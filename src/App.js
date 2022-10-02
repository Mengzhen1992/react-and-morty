import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Random from './pages/Random';
import Favorites from './pages/Favorites';
import Creative from './pages/Creative';
import Character from './pages/Character';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

library.add(faQuestion);

function App() {
  const URL = 'https://rickandmortyapi.com/api/character';
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState('home');

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch(URL);
        const result = await response.json();
        setCharacters(result.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Card characters={characters} />} />
          <Route path="/details/:userId" element={<Character characters={characters} />} />
          <Route path="/random" element={<Random />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/creative" element={<Creative />} />
        </Routes>
      </main>
      <footer>
        <Navbar page={page} setPage={setPage} />
      </footer>
    </div>
  );
}

export default App;
