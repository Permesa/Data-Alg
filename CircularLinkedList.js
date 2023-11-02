class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
        this.isHead = false
    }
}

class CLinkedList {
    constructor(head){
        this.head = head
    }
    
    size = () => {
        let c = this.head.value ? 1 : 0
        let n = this.head.prev
        while(!n.isHead && n){
            n = n.prev
            c++
            }
        return c
    }
    
    clear = () => {
        this.head = null
    }
    
    getFirst = () => {
        return this.head.value
    }
    
    getLast = () => {
        return this.head.prev.value
    }
    
    revIterate = () => {
        // something
    }
}

//arr to DLinkedList
function arrToCList(a, l) {
    l.head = new Node(a[0])
    l.head.isHead = true;
    let n = l.head
    var p;
    a.shift()
    a.forEach((v) => {
        let x = new Node(v)
        p = n
        n.next = x
        n = x
        x.prev = p
    }) 
    l.head.prev = n
    l.head.prev.next = l.head
}

let arr = [1,2,3,4,5,6,7,8,9,10,12]
let list = new CLinkedList()

arrToCList(arr, list)

console.log("size: " + list.size())
console.log("first node value: " + list.getFirst())
console.log("last node value: " + list.getLast())
