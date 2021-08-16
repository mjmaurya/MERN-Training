import React,{Component} from 'react';
import { Employees } from './Components/Employees';
import { User } from './Components/User';
import Users from './Components/Users';


class App extends Component {
  render() {
    return (
      <div>
        {/* <h1>App Component</h1>
        <Users name="Manoj Kumar" age="30"/>
        <Users name="Manish Kumar" ></Users>
        <User name="Manoj Kumar" city="Patna" />
        <User name="Manish Kumar" city="Patna" ><div><h1>Manoj</h1></div></User>
         */}
         <Employees/>
      </div>
    );
  }
}
export default App;
