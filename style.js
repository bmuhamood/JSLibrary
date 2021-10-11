function saveBook(){
let bookTitle, bookAuthor;

bookTitle = document.getElementById("bookTitle").value;
bookAuthor = document.getElementById("bookAuthor").value;

localStorage.setItem("bookTitle", bookTitle);
localStorage.setItem("bookAuthor", bookAuthor);
}