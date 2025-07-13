/**
 * This lesson demonstrates using Generics with Interfaces in a reusable class.
 * - Collection<T> class allows storing different typed objects.
 * - Book and Game interfaces define data structure.
 * - Generic type <T> ensures type safety and reusability.
 */

interface Book {
  itemType: string;
  title: string;
  isbn: number;
}

interface Game {
  itemType: string;
  title: string;
  style: string;
  price: number;
}

class Collection<T> {
  public data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }
}

const item1 = new Collection<Book>();
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

const item2 = new Collection<Game>();
item2.add({
  itemType: "game",
  title: "Uncharted",
  style: "Action",
  price: 150,
});

console.log("Books Collection:", item1);
console.log("Games Collection:", item2);
