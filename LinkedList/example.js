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

function countLinkedList(head) {
  let count = 1
  let current = head
  while(current && current.next) {
    if(current.next) {
      count ++
      current = current.next
    } else {
      break
    }
  }
  return count
}

function reverseLinkedList(head) {
  let prev = null
  let current = head
  while(current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}

function findMiddleNode(head) {
  let jump1 = head
  let jump2 = head
  while(jump2) {
    if(jump2?.next?.next) {
      jump1 = jump1.next
      jump2 = jump2.next.next
    } else {
        break
    }
  }
  console.log(jump1.val)
  return jump1
}

function sumNodes(head) {
    let sum = 0
    let current = head
    while(current) {
      if(current) {
        sum = sum + current.val   
        current = current.next 
      } else {
        break;
      }
    }
    return sum
}

function printList(head) {
    let current = head;

    while (current) {
        console.log(current.val);
        current = current.next;
    }
}

const head = createLinkedList([1, 2, 3, 4, 5]);
const head7=reverseLinkedList(head)
findMiddleNode(head7);
// console.log(sumNodes(head))