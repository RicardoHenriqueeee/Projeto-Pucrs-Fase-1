import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ background: '#f0f0f0', padding: '10px', marginBottom: '20px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/register">Cadastrar Livro</Link></li>
        <li><Link to="/list">Listar Livros</Link></li>
      </ul>
    </nav>
  );
}