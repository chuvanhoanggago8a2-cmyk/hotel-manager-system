import BookCard from "./BookCard";

function GroupedBookList({ groupedBooks }) {
  return (
    <>
      {Object.keys(groupedBooks).map((category) => (
        <div key={category}>
          <h2 className="text-primary mt-4 mb-3">
            {category}
          </h2>

          <div className="row">
            {groupedBooks[category].map((book) => (
              <div
                className="col-md-4 mb-3"
                key={book.id}
              >
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default GroupedBookList;