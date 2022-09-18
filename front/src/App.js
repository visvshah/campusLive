import './App.css';
import Landing from './components/Landing/Landing';
import NavBar from './components/Navbar/Navbar';
import Map from './components/Map/Map';
import Auth from './components/Auth/Auth';
//import {registerUser, loginUser, getMe} from '../../backend/controllers/userController.js'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Map/>
    </div>
  );
}

export default App;
//<Auth regUser = {registerUser}/>