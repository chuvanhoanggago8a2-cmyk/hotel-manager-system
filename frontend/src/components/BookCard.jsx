function BookCard({ book }) {
  return (
    <div className="card h-100 shadow">
      <div className="card-body">
        <h4>{book.title}</h4>

        <p>
          <strong>Author:</strong>
          {" "}
          {book.author}
        </p>

        <p>
          <strong>Category:</strong>
          {" "}
          {book.category}
        </p>

        <p className="text-danger fw-bold">
          {book.price.toLocaleString()}
          {" "}
          VND
        </p>
      </div>
    </div>
  );
}

export default BookCard;