var bookSearchBtn = document.querySelector('.bookSearchBtn')
var display = document.querySelector('#book-container')
var bookContainer = document.getElementById('book-container')
var bookName = document.querySelector("")

var getBook = function(bookName) {
    event.preventDefault();
    console.log("THIS IS WORKING");
    var apiUrl = (`https://www.googleapis.com/books/v1/volumes?q=${bookName}`);
    fetch(apiUrl).then(function(response) {
        return response.json();
    }).then(function(data) {
        document.querySelector(data.volumeInfo);
    })
    console.log(bookName);
}

bookSearchBtn.addEventListener("click",getBook);


