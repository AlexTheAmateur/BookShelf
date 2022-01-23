let bookContainer = document.getElementById("book-container")
let imageOne = document.getElementById("image-1")

function searchFormHandler(event) {
    console.log('HELLO');
    event.preventDefault();
    const searchInput = document.querySelector('input[name="title"]').value.trim();
    console.log(searchInput);

    var apiBook = "https://www.googleapis.com/books/v1/volumes?q=" + searchInput;

    fetch(apiBook).then(function (response) {
        if (response.ok) {
            return response.json()
            
        }
    }).then(function (data) {
        console.log(data);
        searchedResult(data)
    })
}

function searchedResult(data) {
    console.log("This is where the searched resulsts will go")
    bookContainer.innerText = ""
    let title = document.createElement("h2")
    title.innerText= data.items[0].volumeInfo.title 





};


document.querySelector('.search').addEventListener('submit', searchFormHandler);