import { useContext } from "react";
import "./App.css";
import BookList from "./components/BookList";
import Panel from "./components/Panel";
import BookForm from "./components/BookForm";
import BooksContext from "./context/BooksContext";

export default function App() {
  const { books, availableCount } = useContext(BooksContext);

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>

        <h1>Reserva de livros do acervo.</h1>

        <p>
          {availableCount} de {books.length} livros disponíveis.
        </p>
      </header>

      <Panel title="Novo livro">
        <BookForm />
      </Panel>

      <Panel title="Acervo">
        <BookList />
      </Panel>
    </main>
  );
}