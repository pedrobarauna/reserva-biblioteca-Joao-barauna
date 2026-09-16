import { useContext } from "react";
import BookCard from "./BookCard";
import BooksContext from "../context/BooksContext";

export default function BookList() {
  const { books, toggleBook } = useContext(BooksContext);

  if (books.length === 0) {
    return <p>Nenhum livro no acervo.</p>;
  }

  return (
    <section className="book-list" aria-label="Acervo">
      {books.map((book) => (
        <BookCard
          key={book.id}
          {...book}
          onReserve={toggleBook}
        />
      ))}
    </section>
  );
}