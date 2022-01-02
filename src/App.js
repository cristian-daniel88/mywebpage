import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Switch, Route } from "react-router-dom"
import Home from './Pages/Home';
import { GlobalStyles } from './styles/GlobalStyles';
import Footer from './Components/Footer/Footer.js';
import Top from './Components/Top/Top';
import ToggleMenu from './Components/ToggleMenu/ToggleMenu';

function App() {
  return (
    <>
    <GlobalStyles/>
    
    <NavBar/>
   <ToggleMenu/>
    <Top/>
    <Switch>


      <Route exact path='/'>
          <Home/>
      </Route>


    </Switch>

    <Footer/>
    </>
  );
}

export default App;
