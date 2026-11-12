function ListNode(val) {
    this.val = val;
    this.next = null;
}

// list1 = [5,6]

const node1 = new ListNode(5);
const node2 = new ListNode(6);

node1.next = node2;

const list1 = node1;


// list2 = [1,2]

const node3 = new ListNode(1);
const node4 = new ListNode(2);

node3.next = node4;

const list2 = node3;

var mergeTwoLists = function(list1, list2) {
   if (!list1) return list2;
   if (!list2) return list1;
   let current_l1 = list1.val <= list2.val ? list1 : list2
   let current_l2 = list1.val <= list2.val ? list2 : list1
   let mergedHead = current_l1;

   while(current_l1 && current_l2) {
    if(current_l1.val <= current_l2?.val && (current_l1.next.val >= current_l2?.val || current_l1.next === null)) {
      let newnode = new ListNode(current_l2.val)
      newnode.next = current_l1.next
      current_l1.next =  newnode
      current_l2 = current_l2.next
    }
    current_l1 = current_l1.next
   }
   while (current_l2) {
    current_l1 = mergedHead;

    // Find last node
    while (current_l1.next) {
        current_l1 = current_l1.next;
    }

    current_l1.next = new ListNode(current_l2.val);
    current_l2 = current_l2.next;
    }
    return mergedHead;
};



// Print Helper

function printList(head) {
    let current = head;

    while(current) {
        console.log(current.val);
        current = current.next;
    }
}

mergeTwoLists(list1, list2)
console.log("List 1");
printList(list2);

// console.log("List 2");
// printList(list2);
