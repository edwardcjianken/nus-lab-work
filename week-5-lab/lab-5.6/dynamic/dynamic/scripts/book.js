const books = [
  {
    Bid: "B001",
    Bname: "The Great Gatsby",
    Bpd: "2022-06-15",
    Bcountry: "USA",
    Bprice: "15.99",
  },
  {
    Bid: "B002",
    Bname: "To Kill a Mockingbird",
    Bpd: "2022-07-05",
    Bcountry: "USA",
    Bprice: "12.50",
  },
  {
    Bid: "B003",
    Bname: "Pride and Prejudice",
    Bpd: "2022-06-30",
    Bcountry: "England",
    Bprice: "10.99",
  },
  {
    Bid: "B004",
    Bname: "1984",
    Bpd: "2022-08-10",
    Bcountry: "UK",
    Bprice: "14.75",
  },
  {
    Bid: "B005",
    Bname: "The Catcher in the Rye",
    Bpd: "2022-07-20",
    Bcountry: "USA",
    Bprice: "13.25",
  },
];

let editMode = "Create";
let editIndex = -1;

function renderBooksTable() {
  const tableBody = document.querySelector("#booksTable tbody");
  tableBody.innerHTML = "";

  books.forEach((book) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${book.Bid}</td>
        <td>${book.Bname}</td>
        <td>${book.Bpd}</td>
        <td>${book.Bcountry}</td>
        <td>${book.Bprice}</td>
        <td>
        <a href="#" onclick="updateBook('${book.Bid}')">Update</a>
        <a href="#" onclick="deleteBook('${book.Bid}')">Delete</a>
        </td>
        `;

    tableBody.appendChild(row);
  });
}

function createUpdateBook() {
  const bid = document.getElementById("Bid").value;
  const bname = document.getElementById("Bname").value;
  const bpd = document.getElementById("Bpd").value;
  const bcountry = document.getElementById("Bcountry").value;
  const bprice = document.getElementById("Bprice").value;

  const newBook = {
    Bid: bid,
    Bname: bname,
    Bpd: bpd,
    Bcountry: bcountry,
    Bprice: bprice,
  };

  console.log("Book to add/update: ", newBook); //For debugging

  const existingIndex = books.findIndex((book) => {
    return book.Bid == bid;
  });

  console.log("Existing index: ", existingIndex); //For debugging

  if (editMode == "Create" && existingIndex == -1) {
    books.push(newBook);
  } else if (editMode == "Update" && existingIndex !== -1) {
    books[editIndex] = newBook;
  }

  renderBooksTable();

  const bookForm = document.getElementById("bookForm");
  bookForm.reset();
  document.getElementById("Bid").disabled = false;
  editMode = "Create";
  editIndex = -1;

  console.log("Books array after change: ", books); //For debugging
  console.log("Edit Mode: ", editMode); //For debugging
  console.log("Edit Index: ", editIndex); //For debugging

  return false;
}

function updateBook(bid) {
  const index = books.findIndex((book) => {
    return book.Bid == bid;
  });

  const bookToUpdate = books[index];

  console.log("Book to update: ", bookToUpdate); //For debugging

  document.getElementById("Bid").value = bookToUpdate.Bid;
  document.getElementById("Bname").value = bookToUpdate.Bname;
  document.getElementById("Bpd").value = bookToUpdate.Bpd;
  document.getElementById("Bcountry").value = bookToUpdate.Bcountry;
  document.getElementById("Bprice").value = bookToUpdate.Bprice;

  document.getElementById("Bid").disabled = true;

  editMode = "Update";
  editIndex = index;

  console.log("Edit Mode: ", editMode); //For debugging
  console.log("Edit Index: ", editIndex); //For debugging
}

function deleteBook(bid) {
  const index = books.findIndex((book) => {
    return book.Bid == bid;
  });

  console.log("Book to delete: ", books[index]); //For debugging

  const confirmDelete = confirm("Are you sure you want to delete this book?");

  if (confirmDelete) {
    books.splice(index, 1);
  } else {
    alert("Cancelled book deletion.");
  }

  console.log("");

  renderBooksTable();
}
