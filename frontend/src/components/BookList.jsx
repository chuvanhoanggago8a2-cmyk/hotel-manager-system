import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <div className="row">
      {books.map((book) => (
        <div
          className="col-md-4 mb-3"
          key={book.id}
        >
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
}

export default BookList;