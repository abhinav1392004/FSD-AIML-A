// function Book() {
//   const image = React.createElement("img", {
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_vuIWdS4z5Somcctla6_8buv6GTlsaZjOL8yQrvC_glExnt_M3Qrm0s&s",
//     width: 250,
//     height: 250,
//     alt: "Physics Book Image"
//   }, null);

//   const h4 = React.createElement("h4", null, "Title: Physics");
//   const h3 = React.createElement("h3", null, "Price: ₹324/-");
//   const bt = React.createElement("button", {style: {marginRight: "20px"}}, "Add To Cart");
//   const bt2 = React.createElement("button", null, "Buy Now");

//   // ✅ Include bt2 also here
//   const child = React.createElement("div", { className: "card" }, image, h4, h3, bt, bt2);

//   return child;
// }

// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);
// root.render(React.createElement(Book));



function Book({ title, price, img }) {
  const image = React.createElement("img", {
    src: img,
    width: 250,
    height: 250,
    alt: `${title} Image`,
  });

  const h4 = React.createElement("h4", null, `Title: ${title}`);
  const h3 = React.createElement("h3", null, `Price: ₹${price}/-`);

  const bt = React.createElement(
    "button",
    { style: { marginRight: "10px" } },
    "Add To Cart"
  );
  const bt2 = React.createElement("button", null, "Buy Now");

  const buttons = React.createElement(
    "div",
    { style: { display: "flex", gap: "10px", marginTop: "10px" } },
    bt,
    bt2
  );

  return React.createElement(
    "div",
    {
      className: "card",
      style: {
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "270px",
      },
    },
    image,
    h4,
    h3,
    buttons
  );
}

// Create a parent container holding multiple books
const books = [
  {
    title: "Physics",
    price: 324,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_vuIWdS4z5Somcctla6_8buv6GTlsaZjOL8yQrvC_glExnt_M3Qrm0s&s",
  },
  {
    title: "Chemistry",
    price: 280,
    img: "chemistryImg.jpg",
  },
  {
    title: "Mathematics",
    price: 350,
    img: "mathImg.webp",
  },
];

// Map each book object to a Book element
const bookElements = books.map((b) =>
  React.createElement(Book, { title: b.title, price: b.price, img: b.img })
);

// Render all books in a flex container
const container = React.createElement(
  "div",
  { style: { display: "flex" } },
  ...bookElements
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
