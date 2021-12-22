const bookData = document.querySelector('#bookData');
const library = document.querySelector('#library');
const addNewBook = document.querySelector('#addNewBook');
const removeallBooks = document.querySelector('#removeAllBooks');

//
// Backside Functions
//

let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
  this.information = function() {
    let information = (title + ' by ' + author + ', ' + pages + ' pages,  ' + read);
    return information;
  }
}
 
function addBookToLibrary () {
  let data = document.getElementById("bookData");
  
  let title = data.elements[0].value;
  let author = data.elements[1].value;
  let pages = data.elements[2].value;
  let read = data.elements[3].checked; 

  let newBook = new book(title, author, pages, read);

  return newBook;
}

function appendLibrary(book) {
  myLibrary.push(book)
}

function displayLibrary () {
  reloadLibrary();
  for(let i = 0; i < myLibrary.length; i++) {
    const newBookDisplay = document.createElement("div");
    const newBookTitle = document.createElement("p");
    const newBookAuthor = document.createElement("p");
    const newBookPages = document.createElement("p");
    const newBookRead = document.createElement("p");

    newBookTitle.textContent = myLibrary[i].title;
    newBookAuthor.textContent = myLibrary[i].author;
    newBookPages.textContent = myLibrary[i].pages;
    newBookRead.textContent = myLibrary[i].read;

    newBookDisplay.appendChild(newBookTitle);
    newBookDisplay.appendChild(newBookAuthor);
    newBookDisplay.appendChild(newBookPages);
    newBookDisplay.appendChild(newBookRead);

    newBookDisplay.setAttribute('number', i);

    library.appendChild(newBookDisplay);
  }
}

function reloadLibrary () {
  while(library.firstChild) {
    library.removeChild(library.lastChild);
  }
}

function removeAllBooksLibrary () {
  myLibrary = {};
  reloadLibrary();
}

function changeRead (number) {
  myLibrary[number].read != myLibrary[number].read;
}
//
// Button Functions
//

addNewBook.addEventListener('click', function(event) {
  let newBook = addBookToLibrary();
  appendLibrary(newBook);
  document.getElementById("bookData").reset();
  displayLibrary();
});

removeAllBooks.addEventListener('click', function(event) {
  removeAllBooksLibrary();
});
