import BookForm from "../components/BookForm";
import Panel from "../components/Panel";

export default function NovoLivroPage() {
  return (
    <>
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>

        <h1>Novo livro</h1>

        <p>Cadastre um novo livro no acervo.</p>
      </header>

      <Panel title="Cadastrar livro">
        <BookForm />
      </Panel>
    </>
  );
}