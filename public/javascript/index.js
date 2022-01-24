let bookContainer = document.getElementById("book-container");
let imageOne = document.createElement("img");
imageOne.setAttribute("class", "column");
function searchFormHandler(event) {
  console.log("HELLO");
  event.preventDefault();
  const searchInput = document
    .querySelector('input[name="title"]')
    .value.trim();
  console.log(searchInput);

  var apiBook = "https://www.googleapis.com/books/v1/volumes?q=" + searchInput;

  fetch(apiBook)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data);
      searchedResult(data);
    });
}

function searchedResult(data) {
  bookContainer.innerText = "";

  let title = document.createElement("h2");
  title.innerText = data.items[0].volumeInfo.title;
  bookContainer.appendChild(title);

  let bookList = document.createElement("li");
  bookList.setAttribute("class", "bookList");
  bookContainer.appendChild(bookList);
  for (let i = 0; i < 1; i++) {
    console.log("check out my loop!");

    // for (let i = 0; i < lists.length; i++) {
    //     console.log("THIS IS WHERE THE BOOK WILL GO")
    //     let bookList = document.createElement("li")
    //     bookList.setAttribute("class" ,"bookList")

    //     bookList.appendChild(title)
    //     bookList.innerText= lists[i]
    // }

    firstImage = data.items[i].volumeInfo.imageLinks.smallThumbnail;
    imageOne.innerHTML = "<img src='" + firstImage + "'>";
    title.setAttribute("class", "title");

    bookList.appendChild(imageOne);
    //bookContainer.appendChild(bookList);
  }
}

document.querySelector(".search").addEventListener("submit", searchFormHandler);
