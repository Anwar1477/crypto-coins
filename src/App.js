import { Route, Routes } from 'react-router-dom';
import './App.css';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import About from './components/About/About';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/coins' element={<Coins />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App;
