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
    }).then(function(data) {
        console.log(data);
        // searchedResult(data)
    })
}




document.querySelector('.search').addEventListener('submit', searchFormHandler);

// // function searchBook(){
// //     let searchInput=$("#search-input").val()

// //     var apiBook = "https://www.googleapis.com/books/v1/volumes?q="+searchInput

// //     fetch (apiBook).then(function(response){
// //         if (response.ok){
// //             return response.json()
// //         }
// //     }).then(function(data){
// //         searchedResult(data)
// //     })
// // }
// // function searchedResult(data){
// //     event.preventDefault();
// //     bookContainer.innerHTML=""
// //     let title = document.createElement("h2")
// //     title.innerText = data.hits[0].volumeId.title
// //     title.setAttribute("class", "title")
// //     bookContainer.appendChild(title)
// // }

// // searchButton.addEventListener("submit", searchBook)

