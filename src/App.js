import './App.css';
import Nav from './Components/Navbar/Nav';
import Trusted from './Components/Trusted/Trusted';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Trusted/>
    </div>
  );
}

export default App;
