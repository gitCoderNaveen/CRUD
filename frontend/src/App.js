import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import GetData from './components/GetData';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ApplicationForm from './components/ApplicationForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/application" element={<ApplicationForm/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/getdata' element={<GetData/>}/>
      </Routes>
    </div>
  );
}

export default App;
