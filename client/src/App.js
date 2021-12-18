import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import '../src/css/LandingPage.css'
import ActivityCreate from './components/ActivityCreate';
import Detail from './components/Detail'

function App() {
  return (
    <BrowserRouter> 
    <Switch>
      <Route exact path= '/' component= {LandingPage}/>
      <Route exact path= '/home' component={Home}/>
      <Route exact path='/activity' component={ActivityCreate}/>
      <Route exact path="/detail/:cca3" component={Detail}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
