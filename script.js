const container  = document.querySelector('.items-container')   

const getBooksFromStorage = () => {
    const booksFromStorage = localStorage.getItem('books');

    return booksFromStorage ? JSON.parse(booksFromStorage): [];
}

const renderBook = (book) => {
    const storageDiv = document.createElement('div');
    storageDiv.classList.add('item-card');
    const storageAuthorName = document.createElement('p');
    const storageBookTitle = document.createElement('p');
    const storagePriorytyReading = document.createElement('p');
    const storageCategoryName = document.createElement('p');

    container.appendChild(storageDiv)
    storageDiv.appendChild(storageAuthorName)
    storageAuthorName.innerText = book.name;
    storageDiv.appendChild(storageBookTitle)
    storageBookTitle.innerText = book.title;
    storageDiv.appendChild(storagePriorytyReading)
    storagePriorytyReading.innerText = book.priority;
    storageDiv.appendChild(storageCategoryName)
    storageCategoryName.innerText = book.category;
}

const main = () => {
    getDomElements();
    setDomEvents();
}

const getDomElements = () => {
    bookTitleInput = document.querySelector('.bookTitle');
    authorNameInput = document.querySelector('.bookAuthorName')
    priorityOptions = document.querySelector('#priority')
    categoryOptions = document.querySelector('#category')
    alertInfo = document.querySelector('.alert')
    btnAdd = document.querySelector('.add-btn')
    item = document.createElement('div') 
    alertInfo = document.querySelector('.alert-info')
}

const setDomEvents = () => {
    btnAdd.addEventListener('click' , addNewItem)
}

const renderInitialBooks = (books) => books.forEach(renderBook);

const books = getBooksFromStorage();

if (books.length > 0) {
    renderInitialBooks(books);
}
  
const addNewItem = () => {
    if(bookTitleInput.value !== '' && authorNameInput.value.length >= 3 && categoryOptions.value !==''  && priorityOptions !== ''){
        const book = {
            name: authorNameInput.value, 
            title: bookTitleInput.value, 
            priority: priorityOptions.value, 
            category: categoryOptions.value 
        };

        books.push(book);
        localStorage.setItem("books", JSON.stringify(books))

        renderBook(book);        
        
        authorNameInput.value = '';
        bookTitleInput.value = '';
        priorityOptions.value = '';
        categoryOptions.value = '';

    }else{
        alertInfo.textContent = 'Coś jest nie tak'
    }
}

document.addEventListener('DOMContentLoaded' , main)