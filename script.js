const myLibrary = [];

function Book(title, author, pages, volumes) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.volumes = volumes
};


function addBookToLibrary(title,author,pages,volumes) {
    const newBook = new Book(title,author,pages,volumes);
    myLibrary.push(newBook);
};

const testBook = new Book("test", "test","1","1");
myLibrary.push(testBook);


const container = document.getElementsByClassName("main-container");
const form = document.querySelector(".register")
const storedBooks = document.getElementById("stored-books");

function addElement(title,author,pages,volumes){

    const newBook = document.createElement("div");
    newBook.setAttribute("id", "new-book")

    const newTitle = document.createElement(`p`);
    newTitle.setAttribute("id","new-title")
    newTitle.textContent = `${title}`

    const newAuthor =  document.createElement(`p`);
    newAuthor.setAttribute("id","new-author")
    newAuthor.textContent = `${author}`

    const newPages = document.createElement(`p`);
    newPages.setAttribute("id", "new-pages")
    newPages.textContent = `${pages}`

    const newVolumes = document.createElement(`p`);
    newVolumes.setAttribute("id", "new-volumes")
    newVolumes.textContent = `${volumes}`

    newBook.appendChild(newTitle);
    newBook.appendChild(newAuthor);
    newBook.appendChild(newPages);
    newBook.appendChild(newVolumes);
 
    storedBooks.appendChild(newBook); 
};


const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const volumes = document.getElementById("volumes");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(title.value !== "" || author.value !== "" || pages.value !== "" || volumes.value !== "" ){
        addBookToLibrary(title.value, author.value, pages.value, volumes.value);
    };
    addElement(title.value, author.value, pages.value, volumes.value);
    console.log(myLibrary);
})



const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
 
