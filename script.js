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
    outerDiv.innerHTML = "";
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


function displayForm() {
    const openFormBtn = document.querySelector("#openFormBtn");
    const form = document.querySelector("#bookForm");
    const submitButton = document.querySelector(".submit");
    const dialog = document.querySelector("#myDialog");
    form.addEventListener("submit",(event) => {

        const title = document.querySelector("#titleInput").value;
        const author = document.querySelector("#authorInput").value;
        addBookToLibrary(title, author);
        displayAllBooks();
        form.reset();

    })

    openFormBtn.addEventListener("click",() => {
        dialog.showModal();
    })

}

addBookToLibrary("peer-e-kamil","umera ahmed");
addBookToLibrary("jannat-ke-pattay","nemrah ahmed");

displayAllBooks();
displayForm();


