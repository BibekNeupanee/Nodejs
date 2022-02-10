async function loadBooks() {
  const data = await fetch("http://localhost:3000/books");
  const books = await data.json();
  console.log(books);

  document.querySelector(".books").innerHTML = "";

  books.books.forEach(function (element) {
    const list = document.createElement("li");
    list.innerHTML = element.name;

    document.querySelector(".books").appendChild(list);
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  loadBooks();
  document.querySelector(".add").addEventListener("click", async function () {
    let name = document.querySelector(".bookinput").value;

    await fetch("http://localhost:3000/books", {
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
    });

    document.querySelector(".bookinput").value = "";
    loadBooks();
  });
});
