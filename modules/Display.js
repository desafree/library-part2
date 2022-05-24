export const displayCommand = {
  displayFromArray,
  removeBooks,
};

function displayFromArray(arr) {
  // TODO:check type
  arr.forEach(createElementInDOM);
}

function removeBooks() {
  const booksContainer = document.querySelector(".books-container");
  booksContainer.textContent = "";
}

function createElementInDOM(obj) {
  let { author, title, pages, read, changeReadStatus, setDelete } = obj;
  // console.log(obj);
  const booksContainer = document.querySelector(".books-container");

  const bookContainer = document.createElement("div");
  bookContainer.classList.add("book-container");

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title-container");

  const titleH3 = document.createElement("h3");
  titleH3.textContent = "Title";
  titleContainer.appendChild(titleH3);
  const titleP = document.createElement("p");
  titleP.textContent = title;
  titleContainer.appendChild(titleP);
  bookContainer.appendChild(titleContainer);

  const authorContainer = document.createElement("div");
  authorContainer.classList.add("author-container");

  const authorH3 = document.createElement("h3");
  authorH3.textContent = "Author";
  authorContainer.appendChild(authorH3);
  const authorP = document.createElement("p");
  authorP.textContent = author;
  authorContainer.appendChild(authorP);
  bookContainer.appendChild(authorContainer);

  const pagesContainer = document.createElement("div");
  pagesContainer.classList.add("pages-container");

  const pagesH3 = document.createElement("h3");
  pagesH3.textContent = "Pages";
  pagesContainer.appendChild(pagesH3);
  const pagesP = document.createElement("p");
  pagesP.textContent = pages;
  pagesContainer.appendChild(pagesP);
  bookContainer.appendChild(pagesContainer);

  const readContainer = document.createElement("div");
  readContainer.classList.add("read-container");

  const readH3 = document.createElement("h3");
  readH3.textContent = "Read";
  readContainer.appendChild(readH3);
  const inputRead = document.createElement("input");
  inputRead.setAttribute("type", "checkbox");
  inputRead.checked = read;
  inputRead.addEventListener("change", changeReadStatus.bind(obj)); //look
  readContainer.appendChild(inputRead);
  bookContainer.appendChild(readContainer);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "DELETE";
  deleteButton.addEventListener("click", setDelete.bind(obj)); //look
  bookContainer.appendChild(deleteButton);

  booksContainer.appendChild(bookContainer);
}
