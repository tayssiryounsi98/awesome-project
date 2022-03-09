import logo from './logo.svg';
import './App.css';
import { MappingCountry } from './component/mappingCountry';
import { NavbarCountry } from './component/navbarCountry';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavbarCountry/>
      <MappingCountry/>
    </div>
  );
}

export default App;