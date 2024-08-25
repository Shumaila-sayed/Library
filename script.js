        var form = document.querySelector('.card');
        var bookList = document.querySelector('.main-section') ;
        

        // form add book item
        form.addEventListener('submit', addBook);

        function addBook(e){
              e.preventDefault();
         
          // get new book values
         var newTitle = document.getElementById('title').value;
         var newAuthor = document.getElementById('author').value;
         var newPages = document.getElementById('pages').value;
         var newStatus = document.querySelector('input[name="status"]:checked').value;
       
          // create new book element
          var newBook = document.createElement('div');
          // add class
          newBook.classList = 'book';
          bookList.appendChild(newBook);

         // display title
         var displayTitle = document.createElement('h3');
         displayTitle.textContent = newTitle;
         newBook.appendChild(displayTitle);

         // display author
         var displayAuthor = document.createElement('p');
         displayAuthor.textContent = `Author: ${newAuthor}`;
         newBook.appendChild(displayAuthor);

         // display page number
         var displayPage = document.createElement('p');
         displayPage.textContent = `Pages: ${newPages}`;
         newBook.appendChild(displayPage);

         // add button
         var displayBtn = document.createElement('button');
         displayBtn.className = "toggle";
         displayBtn.textContent = newStatus;
         if(displayBtn.textContent == 'Read') displayBtn.style.backgroundColor = '#CCD5AE';
         newBook.appendChild(displayBtn);

          // create book display elements
         //img
         var removeIcon = document.createElement('img');
         removeIcon.src = "assets/icons/close_24dp_121212_FILL1_wght400_GRAD0_opsz24.svg";
         removeIcon.title = "Remove";
         removeIcon.className = 'remove'
         newBook.appendChild(removeIcon);

         form.reset();

       }

       // removing book from display

       bookList.addEventListener('click', removeBook);

       function removeBook(e) {
         if(e.target.classList.contains('remove')){
         var div = e.target.parentElement;
         bookList.removeChild(div);
         }
       }

       // toggle read and unread

       bookList.addEventListener('click', toggleStatus);

       function toggleStatus(e) {
              if(e.target.classList.contains('toggle')){
              if(e.target.textContent == 'Unread' ){
                     e.target.textContent= 'Read';
                     e.target.style.backgroundColor = '#CCD5AE';
              } else {
                     e.target.textContent= 'Unread';
                     e.target.style.backgroundColor = '#FAEDCD';
              }
       }
       }

       // search book from search bar

       var search = document.getElementById('search');
       search.addEventListener('keyup', searchBook);

       function searchBook(e){
              let text = e.target.value.toLowerCase();
              // get books
              let books = bookList.getElementsByClassName('book');
             // convert into array
              Array.from(books).forEach(function(book){
                var bookName = book.firstElementChild.textContent;
                if(bookName.toLowerCase().indexOf(text) < 0 ){
                     book.style.display = 'none'
                } else {
                     book.style.display = 'inherit'
                }
              })
       }