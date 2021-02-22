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

  const formData = new FormData(bookForm)
  const newBook = new Book(
    title = formData.get('title'),
    author = formData.get('author'),
    readStatus = formData.get('readStatus'),
    pages = formData.get('pages')
  )

  const bookRow = document.getElementById('bookRow')
  const bookCard = `
    <div class="col-6">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="mb-0">${newBook.title}</h4>
          <h6>${newBook.author}</h6>
          <p>Pages: ${newBook.pages}</p>
          <p>Read status: ${newBook.readStatus}</p>
        </div>
      </div>
    </div>
  `
  const domParser = new DOMParser()
  bookRow.appendChild(domParser.parseFromString(bookCard, 'text/html').body.children[0])
  bookForm.reset()
}
