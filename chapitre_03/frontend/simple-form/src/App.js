import {useEffect, useState} from "react" ;
import List from "./components/List";
import Add from "./components/Add"
import './App.css';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom';

function App() {
  const [nameList,setNameList] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setNameList(response);
      });
  }, []);

  return (
    <div className="App">
      <Router>
      <h1>Students</h1>
        <Switch>
          <Route path ="/" exact>
          <List students={nameList}/>
          </Route>
          <Route path ="/add" >
          <Add></Add>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
