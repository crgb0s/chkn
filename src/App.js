import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Testimonials from './components/pages/Testimonials';
import SignUp from './components/pages/SignUp';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/chkn' element={<Home />} />
          <Route path='/chkn/' element={<Home />} />
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/sign-up' element={<SignUp />} />


        </Routes>

      </Router>
    </>
  );
}

export default App;
