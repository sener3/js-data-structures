import LinkedList from "./index.js";

const data = [
    {
        id: 0,
        title: "Title 1",
        price: 10.5,
    },
    {
        id: 1,
        title: "Title 2",
        price: 8,
    },
    {
        id: 2,
        title: "Title 3",
        price: 10,
    },
];

const linkedList = new LinkedList();

data.forEach((x) => linkedList.insertNode(x));

linkedList.printList();
