const myLibrary = [];

function Book(title,author) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
}
index = 0;
function addBookToLibrary(title,book) {
    const book1 = new Book(title,book)
    myLibrary[index] = book1;
    index +=1;
}

const outerDiv = document.querySelector(".bookCards");

function displayAllBooks() {
    for(let i=0;i<myLibrary.length;i++) {
        const div = document.createElement("div");
        div.classList.add("book");
        const pId = document.createElement("p");
        const pTitle = document.createElement("p");
        const pAuthor = document.createElement("p");
        pId.textContent=myLibrary[i].id
        pTitle.textContent=myLibrary[i].title
        pAuthor.textContent = myLibrary[i].author
        div.appendChild(pId);
        div.appendChild(pTitle);
        div.appendChild(pAuthor);
        outerDiv.appendChild(div);
    }
}

addBookToLibrary("peer-e-kamil","umera ahmed");
addBookToLibrary("jannat-ke-pattay","nemrah ahmed");

displayAllBooks();




