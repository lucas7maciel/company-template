
import "./App.css"
import { useEffect, useState } from 'react';
import { Navbar } from "./components/navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Contato } from "./pages/contato/index";
import { Solucoes } from "./pages/solucoes/index";
import { Inicio } from "./pages/inicio/index";
import {getLanguage} from "./translations/getLanguage"

export default function App() {
  const [portuguese, setPortuguese] = useState(false)
  getLanguage("en")

  useEffect(() => {
    document.title = "Lucas Systems"
  }, [])

  return (
    <div>
    <Router>
      <Navbar 
        portuguese={portuguese}
        setPortuguese={setPortuguese}
      />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
    </div>
  );
}
