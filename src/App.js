import './App.css';
import ListeLeagues from './leagues/listeLeagues';
import Navbar from './leagues/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
    <div className="App">
      <Navbar  title="A-Sport Démo UBO"/>
      <ListeLeagues/>
    </div>
  );
}

export default App;
