import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/loginscreen/LoginScreen';
import HomeScreen from './components/homescreen/HomeScreen';
import EmployeeScreen from './components/employeescreen/EmployeeScreen';
import ForgetPassword from './components/forgetpassword/ForgetPassword';
import './App.css';

function App() {
  return (
    <div>
        <Router>
         <Routes>
          <Route path='/' element= { <LoginScreen/> } />
          <Route path='/homescreen' element= { <HomeScreen/> } />
          <Route path='/employeescreen' element= { <EmployeeScreen/> } />
          <Route path='/reset' element= { <ForgetPassword/> } />
       </Routes>  
    </Router>
    </div>
  );
}

export default App;
