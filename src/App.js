import './App.css';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Navbar/Nav';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
