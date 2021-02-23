let myLibrary = [];
const bookForm = document.getElementById('bookForm')
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

myLibrary.forEach((book) => {
  bookRow.appendChild(bookCard(book))
})

function bookCard(book) {
  const domParser = new DOMParser()
  const card = `
    <div class="col-6 ">
      <div class="card border-primary shadow h-100 position-relative">
      <button type="button" class="btn btn-danger position-absolute top-5 end-0" onclick="removeBookFromLibrary(event)">X</button>
        <div class="card-body">
          <h6 class="card-title mb-0">${book.title}</h6>
          <p class="card-subtitle mb-3 text-muted">${book.author}</p>
          <p class="mb-0"><span class="text-muted">Pages:</span> ${book.pages}</p>
          <div class="mb-0 d-flex"><span class="text-muted">Read:</span> &nbsp; ${book.read.toString()}
            <div class="form-check form-switch d-inline-flex ms-3">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckChecked"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
  return domParser.parseFromString(card, 'text/html').body.children[0]
}



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

function removeBookFromLibrary(event) {
  event.target.parentElement.parentElement.remove();
  console.log(event.target)
}

bookForm.addEventListener('submit', addBookToLibrary)