import './App.css';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/menucomponents';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar dark color='primary'>
        <div className="container">
          <NavbarBrand href='/' >Jawad Mirza</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
      </header>
    
    </div>
  );
}

export default App;
