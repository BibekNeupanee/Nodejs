import React from "react";
import Book from "../Book/Book";
import "./BookList.scss";

function BookList() {
  const books = [
    {
      id: 1,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },
    {
      id: 2,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 3,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 4,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 5,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 6,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 7,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 8,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 9,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 10,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 11,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 12,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 12,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 12,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 12,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 12,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 12,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 12,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 12,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 12,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 12,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 12,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 12,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 12,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },{
      id: 12,
      image:
        "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
      title: "Node.js",
      authors: ["Bibek Neupane", "Subodh Khanal"],
    },
  ];
  return (
    <div className="book-list">
      {books.map((book, i) => (
        <Book {...book} key={i} />
      ))}
    </div>
  );
}

export default BookList;
