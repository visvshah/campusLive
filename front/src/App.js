import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './components/Register/Register'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/landing' element={<Register />} />
            <Route path='/map' element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
