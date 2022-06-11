import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Nav from './components/Home/Navbar/Nav' ;
import Login from './components/Login/Login';
import Home from './pages/Home'
function App() 
{


  return (
      <Router>
        
        <Nav />
        
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
        
      </Router>
  );
}

export default App;
