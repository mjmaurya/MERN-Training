import {Link} from 'react-router-dom'
import {isAuthenticated,Logout} from './repository'

function NavBar() {
  const isLogged=isAuthenticated()
  return (
    isLogged ?
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
        <Link to={'/employees'} className="nav-link">Employees</Link>
        </li>
      </ul>
      <form className="d-flex">
       <button onClick={Logout} className="btn btn-outline-danger m-1" >Logout</button>
      </form>
    </div>
  </div>
</nav>
:
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
      </ul>
      <form className="d-flex">
        <Link to="/login" className="btn btn-outline-success m-1" type="button">LogIn</Link>
        <Link to="/register" className="btn btn-outline-info m-1" type="button">Register</Link>
      </form>
    </div>
  </div>
</nav>

  );
}

export default NavBar;
