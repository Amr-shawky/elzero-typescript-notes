"use strict";
class User {
    constructor(username) {
        this.username = username;
        User._created++;
    }
    static getCount() {
        console.log(`${User._created} objects created`);
    }
    static get created() {
        return User._created;
    }
}
User._created = 0;
let u1 = new User("Elzero");
let u2 = new User("Web");
let u3 = new User("School");
User.getCount();
console.log(User.created);
//# sourceMappingURL=30-Class_Static_Members.js.map