import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUp from "./views/SignUp";
import Admin from "./views/Admin";
import Login from "./views/Login";
import './App.css';



function App() {

  return (
    <div className="container">
       <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li> 
              <li><Link to="/signup">sign up</Link></li>
              <li><Link to="/admin">Admin</Link></li>
              <li><Link to="/login">Login </Link></li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/"/> 
						<Route path="/signup" component={SignUp}/>
            <Route path="/login" component={Login}/>
            <Route path="/admin" component={Admin}/>
						{/* <Route path="*" component={Error404}/> */}
          </Switch>
        </div>
      </Router>
     
    </div>
  );
}

export default App;
