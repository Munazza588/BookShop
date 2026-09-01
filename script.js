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

const card1 = document.querySelector(".book1");
card1.innerHTML = `
    <p>id: ${myLibrary[0].id}</p>
    <p>title: ${myLibrary[0].title}</p>
    <p>author: ${myLibrary[0].author}</p>
`;


const card2 = document.querySelector(".book2");
card2.innerHTML = `
    <p>id: ${myLibrary[1].id}</p>
    <p>title: ${myLibrary[1].title}</p>
    <p>author: ${myLibrary[1].author}</p>
`;


