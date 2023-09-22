import './App.css';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './pages/user/Login';
import Home from './pages/user/HomeElement';
import Dashboard from './pages/user/Dashboard';
import { States } from './services/States';
import HomeElement from './pages/user/HomeElement';
import About from './pages/user/About';
import { Work } from '@mui/icons-material';
import Contact from './pages/user/Contact';
import Footer from './pages/user/Footer';
// import Chart from './assets/components/Chart';
import ApplicationstatusDashboard from './pages/user/ApplicationstatusDashboard';


function App() {
  return (
    <div>
      <States>
     <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/appstatussuccess' element={<ApplicationstatusDashboard/>}></Route>
     </Routes>
     </States>
     {/* <Chart/> */}
     {/* <HomeElement/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/> */}
    </div>
  );
}

export default App;
