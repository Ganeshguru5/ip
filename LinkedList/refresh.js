function ListNode(val) {
    this.val = val;
    this.next = null;
}

function countNodes(head) {
  let nodecount = 0
  let current = head
  while(current) {
    current = current.next
    nodecount++
  }
  return nodecount
}

function sumNodes(head) {
  let sum = 0
  let current = head
  while(current) {
    sum = sum + current.val
    current = current.next
  }
  return sum
}

function insertAtBeginning(head, value) {
   let current = head
   let newnode = new ListNode(value)
   newnode.next = current
}

function insertAtEnd(head, value) {
   let newnode = new ListNode(value)
   let current = head
   while(current) {
      current = current.next
   }
   current.next = newnode
}

function deleteNode(head, value) {
  let current = head
  while(current) {
    if(current.val === value) {
        break;
    }
    current =current.next
  }
  current.val = current.next.val
  current.next = current.next.next
  console.log(current)
}

const node1 = new ListNode(10)
const node2 = new ListNode(20)
const node3 = new ListNode(30)

node1.next = node2
node2.next = node3

let head = node1
deleteNode(head, 20)

