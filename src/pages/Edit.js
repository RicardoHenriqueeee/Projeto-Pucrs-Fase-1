import { useParams, useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";

export default function Edit({ books, onEditBook }) {
  const { index } = useParams();
  const navigate = useNavigate();
  const bookToEdit = books[parseInt(index)];

  const handleSubmit = (editedBook) => {
    onEditBook(parseInt(index), editedBook);
    navigate("/list"); // Redireciona para a lista após salvar
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', marginLeft: '40%'}}>
      <h1>Editar Livro</h1>
      <BookForm 
        onSubmit={handleSubmit} 
        initialData={bookToEdit} 
        isEditing={true}
      />
    </div>
  );
}