// Book.jsx
function Book({ title, price, img }) {
  return (
    <div
      className="card"
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        width: "270px",
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={img}
        alt={`${title} Image`}
        width={250}
        height={250}
        style={{ borderRadius: "15px", display: "block", margin: "0 auto" }}
      />
      <h4 style={{ margin: "10px 0" }}>Title: {title}</h4>
      <h3 style={{ margin: "10px 0" }}>Price: ₹{price}/-</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
        <button>Add To Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

// Parent component rendering all books
function App() {
  const books = [
    {
      title: "Physics",
      price: 324,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_vuIWdS4z5Somcctla6_8buv6GTlsaZjOL8yQrvC_glExnt_M3Qrm0s&s",
    },
    {
      title: "Chemistry",
      price: 280,
      img: "https://via.placeholder.com/250x250?text=Chemistry+Book",
    },
    {
      title: "Mathematics",
      price: 350,
      img: "https://via.placeholder.com/250x250?text=Mathematics+Book",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {books.map((book, index) => (
        <Book key={index} title={book.title} price={book.price} img={book.img} />
      ))}
    </div>
  );
}

// Render App to root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
