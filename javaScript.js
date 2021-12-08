const bookData = document.querySelector('#bookData');
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
  const book = new book(title, author, pages, read)
}

function displayLibrary () {
  for(let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].information());
  }
}

/*
let Dune = new book('Dune','Frank Herbert', '900', 'read');
let snowCrash = new book('Snow Crash', 'Neil Stephenson', '500', 'not read');
let OhThePlacesYoullGo = new book("Oh the Places You'll Go", "Dr.Seuss", "25", "read");

addBookToLibrary(Dune);
addBookToLibrary(snowCrash);
addBookToLibrary(OhThePlacesYoullGo);

displayLibrary();
*/
