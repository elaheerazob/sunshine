import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Login';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div>
        <Navbar></Navbar>
        
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        {/* <Route path='/footer' element={}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
