import { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import Panel from "./components/Panel";
import { books } from "./data/books";
import BookForm from "./components/BookForm";

export default function App() {
  const [bookList, setBookList] = useState(books);

  function handleReserve(bookId) {
    setBookList((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId ? { ...book, available: !book.available } : book,
      ),
    );
  }

  function handleAddBook(newBook) {
    setBookList((currentBooks) => [...currentBooks, newBook]);
  }

  const availableCount = bookList.filter((book) => book.available).length;

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>

        <h1>Reserva de livros do acervo.</h1>

        <p>
          {availableCount} de {bookList.length} livros disponíveis.
        </p>
      </header>

      <Panel title="Novo livro">
        <BookForm onAddBook={handleAddBook} />
      </Panel>

      <Panel title="Acervo">
        <BookList books={bookList} onReserve={handleReserve} />
      </Panel>
    </main>
  );
}
