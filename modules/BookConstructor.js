export default class BookConstructor {
  constructor(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.deleted = false;
  }

  changeReadStatus() {
    this.read = !this.read;
    console.log(this.author, this.title, this.pages, this.read, this.deleted);
  }

  setDelete() {
    this.deleted = true;
    console.log(this.author, this.title, this.pages, this.read, this.deleted);
  }
}
