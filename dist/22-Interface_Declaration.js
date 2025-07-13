"use strict";
let user1 = {
    id: 100,
    username: "Elzero",
    country: "Egypt"
};
user1.country = "Syria";
function getData(data) {
    console.log(`ID is ${data.id}`);
    console.log(`Username is ${data.username}`);
    console.log(`Country is ${data.country}`);
}
getData({
    id: 200,
    username: "Osama",
    country: "KSA"
});
//# sourceMappingURL=22-Interface_Declaration.js.map