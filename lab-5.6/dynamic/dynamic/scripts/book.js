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

function renderBooksTable() {
  const tableBody = document.querySelector("#booksTable tbody");
  tableBody.innerHTML = "";

  books.forEach((books) => {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${books.Bid}</td>
    <td>${books.Bname}</td>
    <td>${books.Bpd}</td>
    <td>${books.Bcountry}</td>
    <td>${books.Bprice}</td>
    <td>
        <a href="#" onclick="updateBooks(Bid)">Update</a>
        <a href="#" onclick="deleteBook(Bid)">Delete</a>
    </td>
    `;

    tableBody.appendChild(row);
  });
}
