import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CurrentUser from './components/CurrentUser';
import Login from './components/Login';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/currentUser" component={CurrentUser} />
          <Route path="/goBack" component={CurrentUser} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
