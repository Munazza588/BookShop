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

function displayAllBooks() {
    for(let i=0;i<myLibrary.length;i++) {
        console.log(myLibrary[i]);
    }
}

addBookToLibrary("peer-e-kamil","umera ahmed");
addBookToLibrary("jannat-ke-pattay","nemrah ahmed");

displayAllBooks();


