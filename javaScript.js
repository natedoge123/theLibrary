const bookAdd = document.querySelector('#bookAdd');
const library = document.querySelector('#library');

let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
  this.information = function() {
    let information = (title + ' by ' + author + ', ' + pages + ' pages,  ' + read)
    return information;
  }
}

function addBookToLibrary (book) {
  myLibrary.push(book)
}

function displayLibrary () {
  for(let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].information());
  }
}

let Dune = new book('Dune','Frank Herbert', '900', 'read');
let snowCrash = new book('Snow Crash', 'Neil Stephenson', '500', 'not read');

addBookToLibrary(Dune);
addBookToLibrary(snowCrash);

displayLibrary();

