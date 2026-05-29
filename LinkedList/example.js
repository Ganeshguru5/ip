function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Create nodes
let node1 = new ListNode(10);
let node2 = new ListNode(20);
let node3 = new ListNode(30);

// Connect nodes
node1.next = node2;
node2.next = node3;

// Head points to first node
let head = node1;

// Traverse
let current = head;

while(current) {
    console.log(current.val);
    current = current.next;
}