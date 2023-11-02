/// LINKED LIST ////////////////////////////////////////////////////
class node {
  constructor(value) {
  this.value = value;
  this.next = null;
  }
}

class linkedList {
  constructor(head){
    this.head = head;
    this.tracker = null;
  }
    
  size = () => {
      let c = 0;
      let n = this.head;
      while(n){
          c++
          n = n.next
      }
      return c
  }
  
  clear = () => {
      this.head = null;
  }
  
  getFirst = () => {
      return this.head
  }
  
  getLast = () => {
      let n = this.head;
      while(n.next) {
          n = n.next
      }
      return n
  }
}

/// arr to list
function arrToList(a, list) {
    list.head = new node(a[0])
    list.tracker = list.head;
    for(let i = 1; i < a.length; i++){
        let N = new node(a[i]);
        list.tracker.next = N;
        list.tracker = N;
    }
}

//find x in list
function searchList(x, list){
    let n = list.head;
    let c = 1;
    while(n) {
        if(n.value == x){
            return "yes " + x + " is the " + c + " node"
        }
        n = n.next;
        c++
    }
    return x + " not in list"
}

// create list
let list = new linkedList(null)
let arr = [1,9,4,6,4,5,3];
arrToList(arr, list);
console.log("Size: " + list.size())
console.log("First node: " + list.getFirst().value)
console.log("Last node: " + list.getLast().value)
console.log(searchList(6, list))
