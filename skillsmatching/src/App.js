import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CurrentUser from './components/CurrentUser';
import Login from './components/Login';
import ModifierContent from './components/ModifierContent';
import SupprimContent from './components/SupprimContent';
import AjoutContent from './components/AjoutContent';
import Matching from './components/Matching';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/currentUser" component={CurrentUser} />
          <Route path="/goBack" component={CurrentUser} />
          <Route path="/getMatching" component={Matching} />
          <Route path="/modifier/:type&:id" component={ModifierContent} />
          <Route path="/ajouter/:type" component={AjoutContent} />

          <Route path="/supprimer/:id&:action" component={SupprimContent} />

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
