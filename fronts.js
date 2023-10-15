class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    removeFront() {
        if(this.head == null) {
            return this.head;
        }
        let removeHead = this.head;
        this.head = removeHead.next;
        removeHead.next = null;
        return this.head;
    }
    front() {
        if(this.head == null) {
            return null;
        }
        else {
            console.log(this.head.data)
            return this.head.data;
        }
    }
    display() {
        let runner = this.head
            let myList = []

            while(runner !== null){
                myList.push(runner.data) 
                runner=runner.next
            }
            myList = myList.join(",")
            return myList;
    }
}

SLL1 = new SLL()
SLL1.addFront(18)
SLL1.addFront(5)
SLL1.addFront(73)
SLL1.removeFront()
console.log(SLL1)
console.log(SLL1.head)
SLL1.front()
SLL1.addFront(7)
SLL1.addFront(9)
SLL1.addFront(11)
console.log(SLL1.display())


