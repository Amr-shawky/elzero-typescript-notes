"use strict";
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
const item1 = new Collection();
item1.add({
    itemType: "book",
    title: "Atomic Habits",
    isbn: 123456789,
});
item1.add({
    itemType: "book",
    title: "Follow Your Heart",
    isbn: 987654321,
});
const item2 = new Collection();
item2.add({
    itemType: "game",
    title: "Uncharted",
    style: "Action",
    price: 150,
});
console.log("Books Collection:", item1);
console.log("Games Collection:", item2);
//# sourceMappingURL=index37.js.map