import { useEffect, useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  const URL = 'https://rickandmortyapi.com/api/character';
  const [characters, setCharacters] = useState([]);

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
        <Card characters={characters} />
      </main>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
}

export default App;
