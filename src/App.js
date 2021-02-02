import React from 'react';
import Navbar from "./Components/Nav";
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" /*exact component={Home}*/></Route>
      </Switch>
    </Router>
  );
}

export default App;
