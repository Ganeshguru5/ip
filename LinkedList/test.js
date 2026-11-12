function ListNode(val) {
  this.val = val
  this.next = null
}

let node1 = new ListNode(10)
let node2 = new ListNode(20)
let node3 = new ListNode(30)
let node4 = new ListNode(40)

node1.next = node2
node2.next = node3
node3.next = node4

function printNodes(head) {
  let current = head
  while(current) {
    console.log(current)
    current = current.next
  }
}

function countNodes(head) {
  let count = 0
  let current = head
  while(current) {
    count++
    current = current.next
  }
  return count
}

function sumNodes(head) {
  let current = head
  let sum = 0
  while(current) {
    sum += current.val
    current = current.next
  }
  return sum
}

function findNode(head, val) {
  let current = head
  while(current) {
    if(current.val === val) {
      return current
    } else {
      current = current.next
    }
  }
  return null
}

function insertAtBeginning(head, val) {
  let newNode = new ListNode(val)
  newNode.next = head
  head = newNode
  return head
}

function insertAtEnd(head, val) {
  let current = head
  while(current.next !== null) {
    current = current.next
  }
  const newNode = new ListNode(val)
  current.next = newNode
  return current.next
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

// printNodes(node1)
// console.log(countNodes(node1))
// console.log(sumNodes(node1))
// console.log(findNode(20))
const head = insertAtBeginning(node1, 5)
insertAtEnd(node1,60)
// printNodes(head)
reverseLinkedList(head)
printNodes(head)
