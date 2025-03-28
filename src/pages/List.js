import BookList from "../components/BookList";

export default function List({ books, onDelete }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30%' }}>
      <h1>Lista de Livros</h1>
      <BookList books={books} onDelete={onDelete} />
    </div>
  );
}