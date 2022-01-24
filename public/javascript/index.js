let bookContainer = document.getElementById("book-container");
let imageOne = document.getElementById("image-1");

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
  console.log("woah");
  bookContainer.innerText = "";
  let title = document.createElement("h2");
  title.innerText = data.items[0].volumeInfo.title;

  // for (let i = 0; i < lists.length; i++) {
  //     console.log("THIS IS WHERE THE BOOK WILL GO")
  //     let bookList = document.createElement("li")
  //     bookList.setAttribute("class" ,"bookList")

  //     bookList.appendChild(title)
  //     bookList.innerText= lists[i]
  // }
  let image = document.createElement("img");
  tempArray = [];
  tempArray.push(data.items[0].volumeInfo.title);
  tempArray.push(data.items[0].volumeInfo.authors);
  tempArray.push(data.items[0].volumeInfo.imageLinks.smallThumbnail);
  JSON.stringify(tempArray);

  firstImage = tempArray[2];
  imageOne.innerHTML = "<img src='" + firstImage + "'>";
  title.setAttribute("class", "title");
  console.log(imageOne);
  bookContainer.appendChild(title);
  bookContainer.appendChild(imageOne);
  //bookContainer.appendChild(bookList);
}

document.querySelector(".search").addEventListener("submit", searchFormHandler);
