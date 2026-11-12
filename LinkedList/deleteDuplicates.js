function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Example: [1,1,2,3,3]

const node1 = new ListNode(1);
const node2 = new ListNode(1);
const node3 = new ListNode(2);
const node4 = new ListNode(3);
const node5 = new ListNode(3);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

var deleteDuplicates = function(head) {
  let current = head
  while(current && current.next) {
    if(current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return head
};

function printList(head) {
    let current = head;

    while(current) {
        console.log(current.val);
        current = current.next;
    }
}

const head = node1;

deleteDuplicates(head)
printList(head)