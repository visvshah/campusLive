import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Map from './components/Map/Map';
import Auth from './components/Auth/Auth';
import NavBar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing.jsx';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';


export default function App() {
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
