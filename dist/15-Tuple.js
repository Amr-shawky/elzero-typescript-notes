"use strict";
let article = [11, "Title 1", true];
article = [12, "Title 2", false];
console.log(article);
article.push(100);
console.log(article);
let fixedArticle = [33, "Title ReadOnly", true];
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
//# sourceMappingURL=15-Tuple.js.map