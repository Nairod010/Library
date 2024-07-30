let myLibrary = [];

class Book {

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    isRead() {
        if (this.read === false) {
            this.read = true;
            return this.read;
        } else {
            this.read = false;
            return this.read;
        }
    }
};



function addBookToLibrary(title,author,pages,read) {
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
};


const container = document.getElementsByClassName("main-container");
const form = document.querySelector(".register")
const storedBooks = document.getElementById("stored-books");

function addElement(title,author,pages,isRead){

    const newBook = document.createElement("div");
    newBook.setAttribute("id", "new-book")
    
    const closeButton = document.createElement("button");
    closeButton.setAttribute("class", "remove")
    closeButton.textContent = "Remove";
    closeButton.addEventListener("click", () =>{
        storedBooks.removeChild(newBook);
        myLibrary = myLibrary.filter(book => book.title !== newTitle.textContent) 
        console.log(myLibrary);
    });   

    const newTitle = document.createElement(`p`);
    newTitle.setAttribute("id","new-title")
    newTitle.setAttribute("class", "item")
    newTitle.textContent = `${title}`

    const newAuthor =  document.createElement(`p`);
    newAuthor.setAttribute("id","new-author")
    newAuthor.setAttribute("class","item")
    newAuthor.textContent = `${author}`

    const newPages = document.createElement(`p`);
    newPages.setAttribute("id", "new-pages")
    newPages.setAttribute("class","item")
    newPages.textContent = `${pages}`

    const newStatus = document.createElement(`button`)
    newStatus.setAttribute("id", "new-status")
    if(isRead === false){
        newStatus.textContent = "Not Read";
    }else{
        newStatus.textContent = "Read";
    }

    newStatus.addEventListener("click", () => {
        getBook = myLibrary.filter(book => book.title === newTitle.textContent) 
        console.log(getBook[0]);
        getBook[0].isRead();
        console.log(getBook);
        if(getBook[0].read == true){
            newStatus.textContent = "Read";
            newStatus.style = "background-color: #efffc8; color: black; font-size: 1rem; font-weight: 700;border-color: #3b341f";
            newStatus.addEventListener("mouseover", () => {
                newStatus.style = "background-color: #85cb33;"
            })
        }else{
            newStatus.textContent = "Not Read";
            newStatus.style = "";
        }
    })

    newBook.appendChild(newTitle);
    newBook.appendChild(newAuthor);
    newBook.appendChild(newPages);
    newBook.appendChild(newStatus);
    newBook.appendChild(closeButton);
 
    storedBooks.appendChild(newBook); 

};


const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const stats = document.getElementById("toggle");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(title.value !== "" || author.value !== "" || pages.value !== ""){ 
        addBookToLibrary(title.value, author.value, pages.value, stats.checked);
        addElement(title.value, author.value, pages.value, stats.checked);
    };

    console.log(myLibrary);

    console.log(stats.checked);
    title.value = "";
    author.value = "";
    pages.value = "";



})



const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});


