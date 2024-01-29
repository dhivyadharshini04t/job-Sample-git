import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Job from './Components/Job';
import BankList from './Components/BankList';
import Slides from './Components/Slides';
import Form from './Components/Form';
import Payment from './Components/Payment';
import Start from './Components/Start';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
const App = () => {
  
  return (
    <Router>
      <div>
        <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register"  element={<Register/>}/>
      <Route path="/Home"  element={<Home/>}/>
      <Route path="/Job" element={<Job/>}/>
      <Route path="/BankList" element={<BankList/>}/>
      <Route path="/Slides" element={<Slides/>}/>
      <Route path="/Form" element={<Form/>}/>
      <Route path="/Payment" element={<Payment/>}/>
      <Route path="/Start" element={<Start/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Navbar" element={<Navbar/>}/>
      </Routes>
      </div>
    </Router>
  );
};
export default App;