import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import landingpage from './components/Landing/Landing.jsx';
import Map from './components/Map/Map';
import Auth from './components/Auth/Auth';
import NavBar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing.jsx';
//import {registerUser, loginUser, getMe} from '../../backend/controllers/userController.js'

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/landing' element={<><NavBar/><Landing/></>} />
          <Route path='/login' element={<><NavBar/><Auth/></>} />
          <Route path='/map' element={<><NavBar/><Map/></>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
//<Auth regUser = {registerUser}/>