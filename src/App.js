import './App.css';

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <ul>
          <li>
            <div>
              <img
                src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                alt="Morty Smith"
              ></img>
              <div>
                <h2>Morty Smith</h2>
              </div>
            </div>
          </li>
        </ul>
      </main>
      <nav>
        <ul>
          <li>
            <a href="https://rickandmortyapi.com/api/character/avatar/2.jpeg">
              1
            </a>
          </li>
          <li>
            <a href="https://rickandmortyapi.com/api/character/avatar/2.jpeg">
              2
            </a>
          </li>
          <li>
            <a href="https://rickandmortyapi.com/api/character/avatar/2.jpeg">
              3
            </a>
          </li>
          <li>
            <a href="https://rickandmortyapi.com/api/character/avatar/2.jpeg">
              4
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
