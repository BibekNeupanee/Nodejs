async function loadBooks() {
  const data = await fetch("http://localhost:3000/books");
  const books = await data.json();
  console.log(books);

  const $content = document.querySelector(".books>tbody");
  $content.innerHTML = "";

  books.books.forEach(function (book) {
    const $list = document.createElement("tr");
    const $idcell = document.createElement("td");
    const $namecell = document.createElement("td");
    const $actioncell = document.createElement("td");
    const $editButton = document.createElement("button");
    const $deleteButton = document.createElement("button");

    $idcell.innerHTML = book.id;
    $namecell.innerHTML = book.name;

    $editButton.innerHTML = "Edit";
    $deleteButton.innerHTML = "Delete";
    
    $editButton.className = "editButton"
    $deleteButton.className = "deleteButton"

    $actioncell.appendChild($editButton);
    $actioncell.appendChild($deleteButton);

    $editButton.addEventListener("click",function(event){
      console.log(book.id);
      alert(book.id);
    })

    $list.appendChild($idcell);
    $list.appendChild($namecell);
    $list.appendChild($actioncell);

    $content.appendChild($list);
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  loadBooks();
  document.querySelector(".add").addEventListener("click", async function () {
    let name = document.querySelector(".bookinput").value;

    await fetch("http://localhost:3000/books", {
      body: JSON.stringify({ name: name }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
    });

    document.querySelector(".bookinput").value = "";
    loadBooks();
  });
});
