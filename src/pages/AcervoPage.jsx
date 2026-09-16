import { useContext } from "react";
import BooksContext from "../context/BooksContext";
import BookList from "../components/BookList";
import Panel from "../components/Panel";

export default function AcervoPage() {
  const { books, availableCount } = useContext(BooksContext);

  return (
    <>
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>

        <h1>Reserva de livros do acervo.</h1>

        <p>
          {availableCount} de {books.length} livros disponíveis.
        </p>
      </header>

      <Panel title="Acervo">
        <BookList />
      </Panel>
    </>
  );
}