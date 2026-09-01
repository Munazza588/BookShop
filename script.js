let myLibrary = [];

function Book(title,author,numOfPages) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = "Still need to Read";


}

Book.prototype.toggle = function() {
        this.read = "Finished Reading";
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
        const FinishedRead = document.createElement("Button");
        FinishedRead.classList.add("FinishedReading");
        removeButton.textContent = "Remove Book";
        FinishedRead.textContent = "Read Status";
        div.setAttribute("data-id", myLibrary[i].id);
        div.classList.add("book");
        const pTitle = document.createElement("p");
        const pAuthor = document.createElement("p");
        const pPages = document.createElement("p");
        const pDoneReading = document.createElement("p");
        pTitle.textContent=myLibrary[i].title;
        pAuthor.textContent = myLibrary[i].author;
        pPages.textContent = myLibrary[i].numOfPages;
        pDoneReading.textContent=myLibrary[i].read;
        div.appendChild(pTitle);
        div.appendChild(pAuthor);
        div.appendChild(pPages);
        div.appendChild(pDoneReading);
        div.appendChild(removeButton)
        div.appendChild(FinishedRead);
        outerDiv.appendChild(div);
    
    }
    readStatus();
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

function readStatus() {
    const readButtons = document.querySelectorAll(".FinishedReading"); // note: querySelectorAll, plural
    readButtons.forEach(readButton => {
        readButton.addEventListener("click", () => {
            const parentDiv = readButton.closest(".book");
            const id = parentDiv.dataset.id;
            const book = myLibrary.find(b => b.id === id); // find the actual Book object by id
            book.toggle(); // now this calls the real prototype method
            displayAllBooks(); // re-render so the updated "read" text shows on the card
        });
    });
}



addBookToLibrary("peer-e-kamil","umera ahmed",100);
addBookToLibrary("jannat-ke-pattay","nemrah ahmed",300);

displayAllBooks();
displayForm();
removeABook();
readStatus();


