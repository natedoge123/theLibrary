const bookData = document.querySelector('#bookData');
const library = document.querySelector('#library');
const addNewBook = document.querySelector('#addNewBook');

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
 
function addBookToArray(Book) {
  myLibrary.push(Book)
}

function addBookToLibrary () {
  let data = document.getElementById("bookData");
  let text = '';
  
  for (let i = 0; i < data.length; i++) {
    if (data.elements[i].type == "text") {
      text += data.elements[i].value + ",";
  } else if (data.elements[i].type == "checkbox" && data.elements[i].checked == true) {
      text += "read";
  } else {
      text += "not read";
  }
  }
  return text;
}

function displayLibrary () {
  for(let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].information());
  }
}

addNewBook.addEventListener('click', function(event) {
  let addedBook = addBookToLibrary();
  let parsedNewestBook = addedBook.split(",");
  let newBook = new book(parsedNewestBook[0], parsedNewestBook[1], parsedNewestBook[2], parsedNewestBook[3]);
  addBookToArray(newBook);
  document.getElementById("bookData").reset();
});

