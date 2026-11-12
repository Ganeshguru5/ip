function ListNode(val) {
    this.val = val;
    this.next = null;
}

function getMiddle(head) {
  let slow = head
  let fast = head
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

var isPalindrome = function(head) {
  const mid = getMiddle(head)
  let prev = null
  let current = mid
  while(current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next;
  }
  let left = head
  let right = prev
  while(right) {
    if(left.val !== right.val) {
      return false
    }
    right = right.next
    left = left.next
  }
  return true
}




const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(2)
const node5 = new ListNode(8)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

console.log(isPalindrome(node1))