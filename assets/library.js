let myLibrary = [];
const domParser = new DOMParser()
const bookRow = document.getElementById('bookRow')


function Book(title, author, read, pages) {
  this.title = title
  this.author = author
  this.read = read
  this.pages = pages
}

myLibrary.push(
  new Book('The Politics', 'Sigmund F.', true, 442),
  new Book('The hobbit', "JR.Jenkins", true, 786),
  new Book('Hard kill', "lotert runway", false, 235)
)

myLibrary.forEach((book)=> {
  bookRow.appendChild(bookCard(book))
})

function bookCard(book) {
  const card = `

  <div class="col-6">
  <div class="card h-100">
    <div class="card-body">
      <h4 class="mb-0">${book.title}</h4>
      <h6>${book.author}</h6>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read}   
      <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
    <label class="form-check-label" for="flexSwitchCheckChecked"></label>
   </p>
    </div>
  </div>
</div>


  `
  return domParser.parseFromString(card, 'text/html').body.children[0]
}

const bookForm = document.getElementById('bookForm')
bookForm.addEventListener("submit", addBookToLibrary)

function addBookToLibrary(event) {
  event.preventDefault();

  const formData = new FormData(bookForm)
  const newBook = new Book(
    title = formData.get('title'),
    author = formData.get('author'),
    read = Boolean(formData.get('read')),
    pages = formData.get('pages')
  )
   
  bookRow.appendChild(bookCard(newBook))
  bookForm.reset()
}
