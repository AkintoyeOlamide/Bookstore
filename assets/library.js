let myLibrary = [];

function Book(title, author, readStatus, pages) {
  this.title = title
  this.author = author
  this.readStatus = readStatus
  this.pages = pages
}

const bookForm = document.getElementById('bookForm')
bookForm.addEventListener("submit", addBookToLibrary)

function addBookToLibrary(event) {
    event.preventDefault();
  const newBook = Book(  
      title = document.getElementById("title").value,
      author = document.getElementById("author").value,
      readStatus = document.getElementById("readStatus").value,
      pages = document.getElementById("pages").value
   )
   console.log(newBook)
}

