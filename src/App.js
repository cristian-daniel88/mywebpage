import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Switch, Route } from "react-router-dom"
import Home from './Pages/Home';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
    <GlobalStyles/>
    
    <NavBar/>
    
    <Switch>


      <Route exact path='/'>
          <Home/>
      </Route>


    </Switch>


    </>
  );
}

export default App;
