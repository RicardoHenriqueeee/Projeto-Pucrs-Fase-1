import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import List from "./pages/List";
import Edit from "./pages/Edit";

export default function App() {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell", gen: "Terror", data: "03/02/2025" },
    { title: "Dom Quixote", author: "Miguel de Cervantes", gen: "História", data: "01/02/2000" },
  ]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDelete = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
  };

  const handleEditBook = (index, editedBook) => {
    const newBooks = [...books];
    newBooks[index] = editedBook;
    setBooks(newBooks);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/register"
          element={<Register onAddBook={handleAddBook} />}
        />
        <Route
          path="/list"
          element={<List books={books} onDelete={handleDelete} />}
        />
        <Route
          path="/edit/:index"
          element={<Edit books={books} onEditBook={handleEditBook} />}
        />
      </Routes>
    </Router>
  );
}