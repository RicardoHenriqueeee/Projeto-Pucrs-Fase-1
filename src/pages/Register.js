import BookForm from "../components/BookForm";

export default function Register({ onAddBook }) {
  const handleSubmit = (book) => {
    onAddBook(book);
  };

  return (
    <div style={{display: 'flex' , flexDirection: 'column' , marginLeft: '40%'}}>
      <h1>Cadastrar Livro</h1>
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
}