"use strict"

function Book(title, author, pages, status) {
  // the constructor...
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.status = status,
  this.toggleRead = function () {
       this.status = !this.status;
       
   }
   this.deleteBook = function () {
       // myLibrary is an array that has all books
       myLibrary.splice(myLibrary.indexOf(this), 1);
   }
}

const myLibrary = [];
const form = document.querySelector('.card');
var bookList = document.querySelector('.main-section');

form.addEventListener('submit', (e)=> {
       e.preventDefault();
    const bookTitle = document.getElementById('title').value
    const bookAuthor = document.getElementById('author').value
    const bookPages = document.getElementById('pages').value
    const bookRead = document.getElementById('read').checked
    // function to add book to library array
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
    // function to display books on screen
    displayBook();
    form.reset();
} )


bookList.addEventListener('click', (e) => {
       if (e.target.classList.contains('toggle')) {
           const book = myLibrary[Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode)];
           book.toggleRead();
           displayBook();
       }
       if (e.target.classList.contains('remove')) {
           const book = myLibrary[Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode)];
           book.deleteBook();
           displayBook();
       }
   });


function addBookToLibrary(title, author, pages, status) {
  // do stuff here
  const newBook = new Book(title, author, pages, status)
  myLibrary.push(newBook) ;
}


function displayBook() {
       myLibrary.length == 0 ? bookList.innerHTML = '<h4>Let`s keep a track of all the books you have read or are planning to read!</h4>' : bookList.innerHTML = '';
       myLibrary.forEach(book => {
              const bookDiv = document.createElement('div');
              bookDiv.className = 'book';
              

              const newTitle = document.createElement('h3');
              newTitle.textContent = book.title;
              bookDiv.appendChild(newTitle);

              const newAuthor = document.createElement('p');
              newAuthor.textContent = `Author: ${book.author}`;
              bookDiv.appendChild(newAuthor);

              const newPages = document.createElement('p');
              newPages.textContent = `Pages: ${book.pages};`
              bookDiv.appendChild(newPages);

              const newStatus = document.createElement('button');
              newStatus.className = "toggle"
              newStatus.textContent = `${book.status ? 'Read' : 'Unread'}`;
              bookDiv.appendChild(newStatus);

              const remove = document.createElement('img');
              remove.className = "remove";
              remove.src = "assets/icons/close_24dp_121212_FILL1_wght400_GRAD0_opsz24.svg";
              remove.title = "remove";
              bookDiv.appendChild(remove);

         bookList.appendChild(bookDiv);
       })
}

displayBook();


// function to search

var search = document.getElementById('search');

search.addEventListener('keyup', e => {
       let text = e.target.value.toLowerCase();
       
       let books = bookList.getElementsByClassName('book');
         // convert into array
         Array.from(books).forEach(function(book){
              var bookName = book.firstElementChild.textContent;
              if(bookName.toLowerCase().indexOf(text) < 0 ){
                   book.style.display = 'none'
                   bookList.textContent = "No results found" 
              } else {
                   book.style.display = 'inherit'
              }
            })
             
})