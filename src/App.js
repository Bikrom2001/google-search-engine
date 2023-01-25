import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home.jsx';
import Search from './Components/Search.jsx';
import Login from './Components/Login';
import Password from './Components/Password';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/search" component={Search} exact></Route>
        <Route path="/login" component={Login} exact></Route>
        <Route exact path="/password" component={Password}></Route>
      </Switch>
    </Router>
  );
}

export default App;
