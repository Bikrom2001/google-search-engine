import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home.jsx';
import Search from './Components/Search.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/search" component={Search} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
