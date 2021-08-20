import {BrowserRouter,Route} from 'react-router-dom'
import { EmployeeAdd } from './components/EmployeeAdd';
import { EmployeeDetail } from './components/EmployeeDetail';
import { Employees } from './components/Employees';
import EmployeeUpdate from './components/EmployeeUpdate';
import { Home } from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './NavBar';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
     <NavBar/><br />
      <div className="container">
        <Route exact path="/home" render={Home}/>
        <Route path="/employees" component={Employees}/>
        <Route path="/"  exact render={Home}/>
        <Route path="/employee-add" component={EmployeeAdd}/>
        <Route path="/employee-detail/:id" component={EmployeeDetail}/>
        <Route path="/employee-update/:id" component={EmployeeUpdate}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
