
import { Link } from "react-router-dom";

export default function BookList({ books, onDelete }) {
  return (
    <ul>
      {books.map((book, index) => (
        <li key={index}>
          <strong>{book.title}</strong> por {book.author} | {book.gen} | {book.data}
          <button style={{marginLeft: '1%'}} onClick={() => onDelete(index)}>Excluir</button>
          <Link to={`/edit/${index}`}>
            <button style={{marginLeft: '1%'}}>Editar</button>
          </Link>
        </li>
      ))}
    </ul>
  );
}