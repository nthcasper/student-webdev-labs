const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = async () => {
  const response = await fetch(url);
  const books = await response.json();

  app.innerHTML = ""; // clear loading spinner

  books.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.innerHTML = `
            <h3>${book.name}</h3>
            <p>Author: ${book.authors.join(", ")}</p>
            <p>Published: ${book.released.split("T")[0]}</p>
            <p>Pages: ${book.numberOfPages}</p>
        `;
    bookElement.style.textAlign = "center";
    bookElement.style.marginBottom = "1em";
    app.appendChild(bookElement);
  });
};

fetchData();
