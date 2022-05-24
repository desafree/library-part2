import BookConstructor from "./modules/BookConstructor.js";
import { displayCommand } from "./modules/Display.js";

const book1 = new BookConstructor("autore prova", "titolo prova", 100, true);
const book2 = new BookConstructor("autore prova", "titolo prova", 100, true);

displayCommand.removeBooks();
displayCommand.displayFromArray([book1, book2]);

// createElementInDOM(book1);

// const prova = [{ deleted: true }, { deleted: false }];
// const prova2 = prova.filter((elem) => {
//   return !elem.deleted;
// });

// console.log(prova2);
