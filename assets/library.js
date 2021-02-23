const myLibrary = [];
const bookForm = document.getElementById('bookForm');
const bookRow = document.getElementById('bookRow');

function Book(title, author, read, pages) {
  this.title = title;
  this.author = author;
  this.read = read;
  this.pages = pages;
}

myLibrary.push(
  new Book('The Politics', 'Sigmund F.', true, 442),
  new Book('The hobbit', 'JR.Jenkins', true, 786),
  new Book('Hard kill', 'lotert runway', false, 235),
);

function randomID() {
  return Math.floor((Math.random(425367) * 10000000000));
}

function checker(book) {
  return book.read ? 'checked' : '';
}

function toggleRead(event) {
  const targetID = event.target.getAttribute('data-target');
  const toggleTarget = document.querySelector(`[data-id='${targetID}']`);
  const readStatus = toggleTarget.querySelector('.readStatus');

  readStatus.innerHTML = event.target.checked ? 'Read: true' : 'Read: false';
}

function removeBookFromLibrary(event) {
  event.target.parentElement.parentElement.remove();
}

function addCardEventListeners(card) {
  card.getElementsByClassName('book-delete')[0].addEventListener('click', removeBookFromLibrary);
  card.getElementsByClassName('read-toggler')[0].addEventListener('change', toggleRead);
}

function bookCard(book) {
  const domParser = new DOMParser();
  const uuid = randomID();
  const cardHTML = `
    <div class="col-6" data-id="${uuid}">
        <div class="card border-primary shadow h-100 position-relative overflow-hidden">
        <button type="button" class="book-delete btn btn-danger rounded-0 py-0 position-absolute top-5 end-0">X</button>
        <div class="card-body">
          <h6 class="card-title mb-0">${book.title}</h6>
          <p class="card-subtitle mb-3 text-muted">${book.author}</p>
          <p class="mb-0"><span class="text-muted">Pages:</span> ${book.pages}</p>
          <div class="mb-0 d-flex">
            <span class="readStatus">Read: ${book.read}</span>
            <div class="form-check form-switch d-inline-flex ms-3">
              <input class="form-check-input read-toggler" type="checkbox" id="readStatus" ${checker(book)} data-target="${uuid}">
              <label class="form-check-label" for="readStatus"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  const card = domParser.parseFromString(cardHTML, 'text/html').body.children[0];
  addCardEventListeners(card);
  return card;
}

function addBookToLibrary(event) {
  event.preventDefault();
  const formData = new FormData(bookForm);
  const title = formData.get('title');
  const author = formData.get('author');
  const read = Boolean(formData.get('read'));
  const pages = formData.get('pages');
  const newBook = new Book(title, author, read, pages);

  bookRow.appendChild(bookCard(newBook));
  bookForm.reset();
}

myLibrary.forEach((book) => {
  bookRow.appendChild(bookCard(book));
});

bookForm.addEventListener('submit', addBookToLibrary);
