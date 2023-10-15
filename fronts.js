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
        let new_node = new Node(val);

        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
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
            return this.head.value;
        }
    }
}

SLL1 = new SLL()
SLL1.addFront(18)
SLL1.addFront(5)
SLL1.addFront(73)
SLL1.removeFront()
console.log(SLL1)