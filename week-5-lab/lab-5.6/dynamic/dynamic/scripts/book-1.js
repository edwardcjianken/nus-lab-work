let books = [
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
    Bname: "The Great Gatsby",
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
  const bookform = document.getElementById("bookForm");

  const newBook = {
    Bid: bid,
    Bname: bname,
    Bpd: bpd,
    Bcountry: bcountry,
    Bprice: bprice,
  };

  console.log("New book: ", newBook); //For debugging

  if (editMode == "Create") {
    books.push(newBook);
  } else if (editMode == "Update") {
    books[editIndex] = newBook;
  }

  renderBooksTable();
  bookform.reset();
  editMode = "Create";
  document.getElementById("Bid").disabled = false;

  console.log(`Edit Mode: ${editMode}`); //For debugging

  return false;
}

function updateBook(bid) {
  const index = books.findIndex((book) => {
    return book.Bid == bid;
  });

  const book = books[index];

  console.log("Book to update: ", book); //For debugging

  document.getElementById("Bid").value = book.Bid;
  document.getElementById("Bname").value = book.Bname;
  document.getElementById("Bpd").value = book.Bpd;
  document.getElementById("Bcountry").value = book.Bcountry;
  document.getElementById("Bprice").value = book.Bprice;

  document.getElementById("Bid").disabled = true;

  editMode = "Update";
  editIndex = index;

  console.log(`Edit Mode: ${editMode}`);
  console.log(`Edit Index: ${editIndex}`);
}

function deleteBook(bid) {
  const index = books.findIndex((book) => {
    return book.Bid == bid;
  });

  console.log("Book to delete: ", books[index]);

  const confirmDelete = confirm("Are you sure you want to delete this book?");

  if (confirmDelete) {
    books.splice(index, 1);
  }

  renderBooksTable();
}
