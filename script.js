import BookConstructor from "./modules/BookConstructor.js";
import { displayCommand } from "./modules/Display.js";
import { managerArray } from "./modules/ManageArray.js";

const bookPlaceholder1 = new BookConstructor(
  "Autore prova 1",
  "Titolo prova 1",
  100,
  true
);
const bookPlaceholder2 = new BookConstructor(
  "Autore prova 2",
  "Titolo prova 2",
  100,
  true
);
managerArray.addToArray(bookPlaceholder1);
managerArray.addToArray(bookPlaceholder2);
displayCommand.displayFromArray(managerArray.getArray());
refreshDeleteButton();

//todo refresh at every reload

const addBookButton = document.querySelector(".add");
addBookButton.addEventListener("click", () => {
  const formContainer = document.querySelector(".add-book-form");
  formContainer.style.visibility = "visible";
});

const closeButton = document.querySelector(".close-btn");
closeButton.addEventListener("click", () => {
  const formContainer = document.querySelector(".add-book-form");
  formContainer.style.visibility = "hidden";
});

const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const checked = form.checked.checked;
  //   console.log({ title, author, pages, checked });
  form.reset();

  const bookToBeAdded = new BookConstructor(
    title,
    author,
    Number(pages),
    checked
  );
  managerArray.addToArray(bookToBeAdded);
  displayCommand.removeBooks();
  displayCommand.displayFromArray(managerArray.getArray());
  refreshDeleteButton();
  const formContainer = document.querySelector(".add-book-form");
  formContainer.style.visibility = "hidden";
});

function refreshDeleteButton() {
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      managerArray.refreshArray();
      displayCommand.removeBooks();
      displayCommand.displayFromArray(managerArray.getArray());
      refreshDeleteButton();
    });
  });
}
