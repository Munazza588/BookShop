let myLibrary = [];

function Book(title,author,numOfPages) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;

}
index = 0;
function addBookToLibrary(title,book,pages) {
    const book1 = new Book(title,book,pages)
    myLibrary[index] = book1;
    index +=1;
}

const outerDiv = document.querySelector(".bookCards");

function displayAllBooks() {
    outerDiv.innerHTML = "";
    for(let i=0;i<myLibrary.length;i++) {
        const div = document.createElement("div");
        const removeButton = document.createElement("Button");
        removeButton.classList.add("DeleteBookButton");
        removeButton.textContent = "Remove Book";
        div.setAttribute("data-id", myLibrary[i].id);
        div.classList.add("book");
        const pTitle = document.createElement("p");
        const pAuthor = document.createElement("p");
        const pPages = document.createElement("p");
        pTitle.textContent=myLibrary[i].title;
        pAuthor.textContent = myLibrary[i].author;
        pPages.textContent = myLibrary[i].numOfPages;
        div.appendChild(pTitle);
        div.appendChild(pAuthor);
        div.appendChild(pPages);
        div.appendChild(removeButton)
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
        const pages = document.querySelector("#pageInput").value;
        addBookToLibrary(title, author,pages);
        displayAllBooks();
        form.reset();
        removeABook();
    })

    openFormBtn.addEventListener("click",() => {
        dialog.showModal();
    })

}

function removeABook() {
    const removeButtons = document.querySelectorAll(".DeleteBookButton"); // note: querySelectorAll, plural
    removeButtons.forEach(removeButton => {
        removeButton.addEventListener("click", () => {
            const parentDiv = removeButton.closest(".book");
            const id = parentDiv.dataset.id;
            parentDiv.remove();
            myLibrary = myLibrary.filter(book => book.id !== id);
            index -=1;
        });
    });
}



addBookToLibrary("peer-e-kamil","umera ahmed",100);
addBookToLibrary("jannat-ke-pattay","nemrah ahmed",300);

displayAllBooks();
displayForm();
removeABook();


