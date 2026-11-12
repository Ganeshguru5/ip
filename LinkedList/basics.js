function ListNode(val) {
    this.val = val;
    this.next = null;
}

var sumNodes = (head) => {
  let current = head
  let sum = 0
  while(current) {
    sum+=current.val
    current = current.next
  }
  return sum
}

function searchNode(head, target) {
  let current = head
  while(current) {
    if(current.val === target) {
      return true
    } else {
      current = current.next
    }
  }
  return false
}

function findMaximumValue(head) {
  let maxValue = head.val
  let current = head
  while(current) {
    maxValue = Math.max(maxValue, current.val)
    current = current.next
  }
  return maxValue
}

function insertAtBeginning(head, value) {
    let node0 = new ListNode(value);
    node0.next = head;
    head = node0;
    return head;
}

function insertAtEnd(head, value) {
  let endnode = head
  while(endnode.next !== null) {
    endnode = endnode.next
    console.log("this is end node in while", endnode)
  }
  endnode.next = new ListNode(value)
}

function deleteNode(head, value) {
  let current = head
  while(current) {
    if(current.next.val === value) {
      break;
    }
    current = current.next
  }
  current.next = current.next.next
}
// 10 > 20 > 30 > 40 to remove is 20
// { value: 10, next: 20 } 

// function reverseLinkedlist(head) {
//   let prev = null
//   let current = head
//   let next = current.next
//   while(current.next !== null) {
//     current.next  = prev 
//     prev = current
//     next = next.next
//     current = next 
//   }
//   console.log(current)
// }

function reverseLinkedlist(head) {
  let prev = null;
  let current = head;

  while(current) {

    let next = current.next;  // save next node

    current.next = prev;      // reverse arrow

    prev = current;           // move prev

    current = next;           // move current
  }

  return prev;
}

var mergeTwoLists = function(list1, list2) {

    // Edge cases
    if (!list1) return list2;
    if (!list2) return list1;

    // Pick the list with the smaller head as the main list
    let current_l1 = list1.val <= list2.val ? list1 : list2;
    let current_l2 = list1.val <= list2.val ? list2 : list1;

    // Save the head because current_l1 will move
    let mergedHead = current_l1;

    while (current_l1 && current_l2) {

        // Insert current_l2 node between current_l1 and current_l1.next
        if (
            current_l1.val <= current_l2.val &&
            (
                current_l1.next === null ||
                current_l1.next.val >= current_l2.val
            )
        ) {

            // Create a new node with current_l2 value
            let newNode = new ListNode(current_l2.val);

            // Save the next node
            let l1Next = current_l1.next;

            // Insert new node
            current_l1.next = newNode;
            newNode.next = l1Next;

            // Move list2 pointer
            current_l2 = current_l2.next;
        }

        // Move forward in main list
        current_l1 = current_l1.next;
    }

    // If list2 still has nodes left,
    // attach them to the end
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

function printList(head) {

  let current = head;

  while(current) {
    console.log(current.val);
    current = current.next;
  }
}

function findMiddleNode(head) {
  let slow = head
  let fast = head
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

const node1 = new ListNode(10)
const node2 = new ListNode(20)
const node3 = new ListNode(30)
const node4 = new ListNode(40)

node1.next = node2
node2.next = node3
node3.next = node4

let head = node1

// console.log(sumNodes(head))
// console.log(searchNode(head, 200))
// console.log(findMaximumValue(head))
// console.log(insertAtBeginning(head, 456))
// deleteNode(head, 200)
// console.log(printList(head))
console.log(findMiddleNode(head))
// console.log(reverseLinkedlist(head))
// console.log(printList(node4))
