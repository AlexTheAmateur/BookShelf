let bookContainer = document.getElementById("book-container");
let wrapper = document.querySelector(".wrapper");
let main = document.querySelector(".main");
let footer = document.querySelector(".footer")

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
  bookContainer.setAttribute("class", "column");
  let backButton = document.createElement("H2");
  backButton.innerText = "Back to Search";
  backButton.setAttribute("id", "backButton");
  backButton.setAttribute("hidden", "true");

  wrapper.insertBefore(backButton, wrapper.main);

  for (let i = 0; i < data.items.length; i++) {
    let title = document.createElement("h3");
    title.innerText = data.items[i].volumeInfo.title;

    let bookBox = document.createElement("div");
    let image = document.createElement("button");
    image.setAttribute("id", "bookButton" + [i]);
    image.setAttribute("type", "button");

    let author = document.createElement("p");
    author.setAttribute("class", "column");
    author.innerText = data.items[i].volumeInfo.authors;

    firstImage = data.items[i].volumeInfo.imageLinks.smallThumbnail;
    image.innerHTML = "<img src='" + firstImage + "'>";
    title.setAttribute("class", "title");

    bookBox.appendChild(title);
    bookBox.appendChild(image);
    bookBox.appendChild(author);
    bookContainer.appendChild(bookBox);
    document
      .querySelector("#bookButton" + [i])
      .addEventListener("click", openBook);
  }
}

function openBook() {
  const backButton = document.querySelector("#backButton");
  main.setAttribute("hidden", "true");
  footer.setAttribute("hidden", "true");
  backButton.setAttribute("hidden", "false");
  let bookInfo = document.createElement("p");
  wrapper.appendChild(bookInfo);
  
  // if (main.style.display === "none") {
  //   main.style.display = "block";
  // } else {
  //   main.style.display = "none";
  // }
}

// document.querySelector(".bookButton").addEventListener("click", openBook);
document.querySelector(".search").addEventListener("submit", searchFormHandler);