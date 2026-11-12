function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

var removeNthFromEnd = function(head, n) {
  let current = head
  let count = 1
  while(current && current.next) {
    count++
    current = current.next
  }
  const check = (count - n)
  if(check === 0) {
    return head.next
  }
  count = 1
  current = head
   while(current && current.next) {
    if(count === check) {
      current.next = current.next.next
      break
    } else {
      count++
      current = current.next
    }
  }
  return head
};

function printList(head) {
    let current = head;

    while (current) {
        console.log(current.val);
        current = current.next;
    }
}

const head = createLinkedList([1,2]);
removeNthFromEnd(head, 2)
printList(head);