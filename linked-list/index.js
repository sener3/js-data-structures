function Node(data) {
    this.data = data;
    this.next = null;
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertNode(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = node;
        }
    }

    printList() {
        let temp = this.head;

        while (temp) {
            console.log(temp);
            temp = temp.next;
        }
    }
}

export default LinkedList;
