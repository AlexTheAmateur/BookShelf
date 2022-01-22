

var getBook = function(query) {
    var apiUrl = (`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    // make a get request to url
    fetch(apiUrl).then(function(response) {
        // request was successful
        if (response.ok) {
            response.json().then(function(data) {
                displayBooks(data);
            });
        }
    })
};

var displayBooks = function(data) {
    var display = document.querySelector('#book-container') //need to add that to HTML

    var bookName = document.createElement('h2');
    bookName.textContent = data.volumeInfo.title &&
    data.volumeInfo.authors &&
    data.volumeInfo.description &&
    data.volumeInfo.imageLinks.thumbnail
}

