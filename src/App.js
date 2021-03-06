import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Switch, Route } from "react-router-dom"
import Home from './Pages/Home';
import { GlobalStyles } from './styles/GlobalStyles';
import Footer from './Components/Footer/Footer.js';
import Top from './Components/Top/Top';
import ToggleMenu from './Components/ToggleMenu/ToggleMenu';
import Profile from './Pages/Profile';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import ScreenPhoto from './Components/ScreenPhoto/ScreenPhoto';
import { HashRouter } from 'react-router-dom';




function App() {



  
  return (
    <>
    
    <HashRouter>
    <GlobalStyles/>

    <NavBar/>
    <ScreenPhoto/>
   <ToggleMenu/>
    <Top/>
    <Switch>


      <Route exact path='/'>
          <Home/>
      </Route>

      <Route exact path='/profile'>
        <Profile/>
      </Route>
      
      <Route exact path='/projects'>
        <Projects/>
      </Route>

      <Route exact path='/contact'>
        <Contact/>
      </Route>

    </Switch>

    <Footer/>
    </HashRouter>
    </>
  );
}

export default App;
