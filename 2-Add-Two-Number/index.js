/**
 * You are given two non-empty linked lists representing 
 * two non-negative integers. 
 * The digits are stored in reverse order, 
 * and each of their nodes contains a single digit. 
 * Add the two numbers and return 
 * the sum as a linked list. 
 * You may assume the two numbers do not 
 * contain any leading zero, 
 * except the number 0 itself.
 */

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// Example Node 

/* ListNode {
  val: 2,
  next: ListNode { val: 4, next: ListNode { val: 3, next: null } }
} */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const addTwoNumbers = (l1, l2) => {
  let dummy = new ListNode();
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry > 0) {
    let total = carry;

    if (l1 !== null) {
      total += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      total += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(total / 10);
    current.next = new ListNode(total % 10);
    current = current.next;
  }

  return dummy.next;
};

const createLinkedListFromArr = (arr, index = 0) => {
  if (index === arr.length) {
    return null; 
  }

  const newNode = new ListNode(arr[index]); 
  newNode.next = createLinkedListFromArr(arr, index + 1); 
  return newNode; 
};

// Test cases
// Example 1
let l1 = createLinkedListFromArr([2,4,3]);
let l2 = createLinkedListFromArr([5,6,4])
const result1 = addTwoNumbers(l1, l2);
console.log(result1)
// Output: 7 0 8

// Example 2
let l3 = new ListNode(0);
let l4 = new ListNode(0);
const result2 = addTwoNumbers(l3, l4);
console.log(result2)
// Output: 0

// Example 3
let l5 = createLinkedListFromArr([9,9,9,9,9,9,9]); 
let l6 = createLinkedListFromArr([9,9,9,9]); 
const result3 = addTwoNumbers(l5, l6);
console.log(result3)
// Output: 8 9 9 9 0 0 0 1



