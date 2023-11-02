class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head){
        this.head = head;
    }
    
    size = () => {
        let n = this.head;
        let c = 0;
        while(n){
            n = n.next
            c++
        }
        return c
    }
    
    printList = () => {
        let n = this.head
        while(n){
            console.log(n.value)
            n = n.next
        }
    }
}

function arrToList(a, list) {
    list.head = new Node(a[0]);
    var t = list.head
    a.shift()
    a.forEach((x) => {
        t.next = new Node(x)
        t = t.next
    })
}

function sortList(list) {
    var big;
    var point;
    var x;
    for(let i = 0; i < list.size()-1; i++ ){
      let n = list.head
      while(n.value != big){
          if(n.next){
              if(n.value > n.next.value){
                x = n.value;
                n.value = n.next.value;
                n.next.value = x;
                n = n.next;
              } else {n = n.next}
          } else {big = n.value}
      }
    }
}

function fillArr(arr) {
    while(arr.length<1000){
        arr.push(Math.floor(Math.random() * 1000))
    }
}

var arr = [];
fillArr(arr)
list = new LinkedList()
arrToList(arr, list);
console.log(list.size())
sortList(list)
list.printList()
