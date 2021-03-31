import './App.css';
import AllPets from './components/AllPets';
import {Router, Link} from '@reach/router';
import SpecificPet from './components/SpecificPet';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
function App() {
  return (
    <div className="App">
      <Link to ="/pets/new"> Add a Pet to the Shelter</Link>
      <h1> Adoption Center </h1>
      

      <Router>
      <AllPets path="/"></AllPets>
        <NewPet path= "/pets/new"></NewPet>
        <EditPet path = "/pets/edit/:petid"></EditPet>
        <SpecificPet path = "/pets/info/:petid"></SpecificPet>
      </Router>
    </div>
  );
}

export default App;
