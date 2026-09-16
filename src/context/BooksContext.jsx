import { createContext, useEffect, useState } from "react";
import { books as initialBooks } from "../data/books";

const STORAGE_KEY = "reserva-biblioteca:books";

const BooksContext = createContext(null);

function loadBooks() {
  const savedBooks = localStorage.getItem(STORAGE_KEY);

  if (!savedBooks) {
    return initialBooks;
  }

  try {
    const parsedBooks = JSON.parse(savedBooks);

    if (Array.isArray(parsedBooks)) {
      return parsedBooks;
    }

    return initialBooks;
  } catch {
    return initialBooks;
  }
}

export function BooksProvider({ children }) {
  const [bookList, setBookList] = useState(loadBooks);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookList));
  }, [bookList]);

  function toggleBook(bookId) {
    setBookList((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId
          ? { ...book, available: !book.available }
          : book,
      ),
    );
  }

  function addBook(newBook) {
    setBookList((currentBooks) => [...currentBooks, newBook]);
  }

  const availableCount = bookList.filter(
    (book) => book.available,
  ).length;

  const contextValue = {
    books: bookList,
    availableCount,
    toggleBook,
    addBook,
  };

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;