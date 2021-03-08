import { useEffect, useState } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import "./App.css";
import AddHeroes from "./components/AddHeroes";
import HeroesList from "./components/HeroesList";

function App() {
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/heroes")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setHeroes(response);
      });
  }, []);
  return (
    <BrowserRouter>
      <h1>Mes super héros</h1>
      <Switch>
        <Route path="/" exact>
          <HeroesList heroes={heroes}/>
        </Route>
        <Route path="/add">
          <AddHeroes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
