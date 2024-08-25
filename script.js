
       // Object Constructors
        
        // function Book(title, author, pages, read) {
        //     this.title = title;
        //     this.author = author;
        //     this.pages = pages;
        //     this.read = read;
        //     this.info = function(){
        //         return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
        //     }
        // }

        // const book1 = new Book('Atomic habits', 'James Clear', '323 pages', 'not read yet');

        //     console.log(book1.title);
        //     console.log(book1.author);
        //     console.log(book1.pages);
        //     console.log(book1.read);
        //     console.log(book1.info());

        // const book2 = new Book('Javascript for Dummies', 'Angel cooper', '456 pages', 'completed');
        //     console.log(book2.title);
        //     console.log(book2.author);
        //     console.log(book2.pages);
        //     console.log(book2.read);
        //     console.log(book2.info());



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
          newBook.className = 'book';

          bookList.appendChild(newBook);

         // create nbook display elements
         //img
         var removeIcon = document.createElement('img');
         removeIcon.src = "assets/icons/close_24dp_121212_FILL1_wght400_GRAD0_opsz24.svg";
         removeIcon.title = "Remove";
         newBook.appendChild(removeIcon);

         var bookDetails = document.createElement('div');
         bookDetails.className = "book-details";

         newBook.appendChild(bookDetails);

         // display title
         var displayTitle = document.createElement('h3');
         displayTitle.textContent = newTitle;
         bookDetails.appendChild(displayTitle);

         // display author
         var displayAuthor = document.createElement('p');
         displayAuthor.textContent = `Author: ${newAuthor}`;
         bookDetails.appendChild(displayAuthor);

         // display page number
         var displayPage = document.createElement('p');
         displayPage.textContent = `Pages: ${newPages}`;
         bookDetails.appendChild(displayPage);

         // add button
         var displayBtn = document.createElement('button');
         displayBtn.textContent = newStatus;
         bookDetails.appendChild(displayBtn);

       //   div.appendChild(document.createElement(im))

       //   var book = document.querySelector('.book');

        }
