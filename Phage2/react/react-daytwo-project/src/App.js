import {Link,BrowserRouter,Route} from 'react-router-dom'
import { Employees } from './components/Employees';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Admin Project</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/home'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/employees'} className="nav-link">Employees</Link>
                </li>
              </ul>
            </div>
          </nav> <br />
      <div>
        <Route exact path="/home" render={Home}/>
        <Route path="/employees" component={Employees}/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
