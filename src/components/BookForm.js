import { useState, useEffect } from "react";

export default function BookForm({ onSubmit, initialData, isEditing }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [gen, setGen] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setAuthor(initialData.author);
      setGen(initialData.gen);
      // Formata a data para o formato YYYY-MM-DD que o input type="date" requer
      setData(initialData.data.split('/').reverse().join('-'));
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !gen || !data) {
      setError("Preencha todos os campos!");
      return;
    }
    
    // Formata a data de volta para DD/MM/YYYY antes de enviar
    const formattedData = data.split('-').reverse().join('/');
    onSubmit({ title, author, gen, data: formattedData });
    
    if (!isEditing) {
      setTitle("");
      setAuthor("");
      setGen("");
      setData("");
    }
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input style={{marginLeft: '2%'}}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Autor:</label>
        <input style={{marginLeft: '2%'}}
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Gênero:</label>
        <input style={{marginLeft: '0.5%'}}
          type="text"
          value={gen}
          onChange={(e) => setGen(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Data:</label>
        <input style={{marginLeft: '2.8%'}}
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit" style={{marginLeft: '20%', marginTop: '2%'}}>
        {isEditing ? "Salvar Alterações" : "Adicionar Livro"}
      </button>
    </form>
  );
}