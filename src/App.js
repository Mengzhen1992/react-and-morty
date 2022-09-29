import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Card />
      </main>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
}

export default App;
