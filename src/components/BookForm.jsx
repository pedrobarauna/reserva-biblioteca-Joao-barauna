import { useContext, useState } from "react";
import BooksContext from "../context/BooksContext";

export default function BookForm() {
  const { addBook } = useContext(BooksContext);

  const [form, setForm] = useState({
    title: "",
    author: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.title.trim() || !form.author.trim()) {
      setError("Preencha o título e o autor.");
      return;
    }

    addBook({
      id: crypto.randomUUID(),
      title: form.title.trim(),
      author: form.author.trim(),
      available: true,
    });

    setForm({
      title: "",
      author: "",
    });

    setError("");
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Título</label>
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="author">Autor</label>
        <input
          id="author"
          name="author"
          value={form.author}
          onChange={handleChange}
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <button type="submit">Cadastrar livro</button>
    </form>
  );
}