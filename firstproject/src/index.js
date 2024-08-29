import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting() {
//   return <h2>This is first component</h2>;
// }
// function Greeting() {
//   return (
//     <>
//       {React.createElement(
//         "div",
//         { className: "my-container" },
//         React.createElement("div", { className: "second-heading" }, "Hello"),
//         React.createElement("div", { className: "second-heading" }, "World")
//       )}
//     </>
//   );
// }

// const Greeting = () => {
//   return (
//     <React.Fragment>
//       {React.createElement("h2", {}, "Hello from react")}
//       {React.createElement(
//         "ul",
//         {}, // ul elementinin özellikleri (props) burada boş
//         React.createElement(
//           "li",
//           {},
//           React.createElement("a", { href: "#" }, "hello") // a tag'ine href eklenmesi
//         ),
//         React.createElement(
//           "li",
//           {},
//           React.createElement("a", { href: "#" }, "world") // a tag'ine href eklenmesi
//         ),
//         React.createElement(
//           "li",
//           {},
//           React.createElement("a", { href: "#" }, "from") // a tag'ine href eklenmesi
//         ),
//         React.createElement(
//           "li",
//           {},
//           React.createElement("a", { href: "#" }, "react") // a tag'ine href eklenmesi
//         ),
//         React.createElement(
//           "li",
//           {},
//           React.createElement("a", { href: "#" }, "universe") // a tag'ine href eklenmesi
//         )
//       )}
//     </React.Fragment>
//   );
// };

// const Greeting = () => {
//   return (
//     <React.Fragment>
//       <Person name="Ahmed Yusuf" />
//       <Hello />
//     </React.Fragment>
//   );
// };

// const Person = (props) => {
//   return (
//     <React.Fragment>
//       {React.createElement("h2", {}, `My name is ${props.name}`)}
//     </React.Fragment>
//   );
// };

// const Hello = () => {
//   return <>{React.createElement("p", {}, "This is react studying")}</>;
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Greeting />);

const bookListStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
  padding: "20px",
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#ffffff",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  margin: "20px",
  width: "250px",
  transition: "transform 0.3s",
};

const containerHoverStyle = {
  transform: "scale(1.05)",
};

const imgStyle = {
  maxWidth: "100%",
  borderRadius: "4px",
  marginBottom: "15px",
};

const h3Style = {
  color: "#333",
  fontSize: "1.2rem",
  margin: "10px 0",
};

const pStyle = {
  color: "#555",
  fontSize: "0.9rem",
  margin: "5px 0",
};

const BookList = () => {
  const listForBooks = {
    theWeddingPeople: {
      addres: "https://m.media-amazon.com/images/I/91hQge8XmcL._SL1500_.jpg",
      name: "The Wedding People: A Novel",
      author: "Alison Espach",
      price: "$" + 14.99,
    },
    bringingBenHome: {
      addres: "https://m.media-amazon.com/images/I/91LjOmcxKVL._SL1500_.jpg",
      name: "Bringing Ben Home: A Murder, a Conviction, and the Fight to Redeem American Justic",
      author: "Barbara Bradley Hagerty",
      price: "$" + 15.99,
    },
    thereAreRiversInTheSky: {
      addres: "https://m.media-amazon.com/images/I/91QIDclHSDL._SL1500_.jpg",
      name: "There Are Rivers in the Sky: A novel",
      author: "Elif Shafak",
      price: "$" + 14.99,
    },
    houseOfGlass: {
      addres: "https://m.media-amazon.com/images/I/71O5CUw54hL._SL1500_.jpg",
      name: "House of Glass: A Novel",
      author: "Sarah Pekkanen",
      price: "$" + 14.99,
    },
    theBoysOfRiverside: {
      addres: "https://m.media-amazon.com/images/I/81ooHCBT58L._SL1500_.jpg",
      name: "The Boys of Riverside: A Deaf Football Team and a Quest for Glory",
      author: "Thomas Fuller",
      price: "$" + 14.99,
    },
    byAnyOtherName: {
      addres: "https://m.media-amazon.com/images/I/914WNJodEUL._SL1500_.jpg",
      name: "By Any Other Name: A Novel",
      author: "Jodi Picoult",
      price: "$" + 14.99,
    },
    andSoIRoar: {
      addres: "https://m.media-amazon.com/images/I/81Js-af2+aL._SL1500_.jpg",
      name: "And So I Roar: A Novel",
      author: "Abi Dare",
      price: "$" + 14.99,
    },
    billionaireNerdSaviorKingBillGatesAndHisQuestToShapeOurWorld: {
      addres: "https://m.media-amazon.com/images/I/71igZGsMjqL._SL1500_.jpg",
      name: "Billionaire, Nerd, Savior, King: Bill Gates and His Quest to Shape Our World",
      author: "Anupreeta Das",
      price: "$" + 16.99,
    },
    neverSawMeComing: {
      addres: "https://m.media-amazon.com/images/I/71CxRNz5YdL._SL1500_.jpg",
      name: "Never Saw Me Coming: How I Outsmarted the FBI and the Entire Banking System—and Pocketed $40 Million",
      author: "Tanya Smith",
      price: "$" + 15.99,
    },
    weBurnDaylight: {
      addres: "https://m.media-amazon.com/images/I/71x+KWVYhSL._SL1500_.jpg",
      name: "We Burn Daylight: A Novel",
      author: "Bret Anthony Johnston",
      price: "$" + 13.99,
    },
  };

  return (
    <div style={bookListStyle}>
      {Object.values(listForBooks).map((book, index) => (
        <Book
          key={index}
          addresOfImg={book.addres}
          forBookName={book.name}
          forAuthor={book.author}
          forPrice={book.price}
        />
      ))}
    </div>
  );
};

const Book = (props) => {
  return (
    <div
      style={{
        ...containerStyle,
        ...(props.isHovered ? containerHoverStyle : {}),
      }}
    >
      <img style={imgStyle} src={props.addresOfImg} alt={props.forBookName} />
      <h3 style={h3Style}>{props.forBookName}</h3>
      <p style={pStyle}>Author: {props.forAuthor}</p>
      <p style={pStyle}>Price: {props.forPrice}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
