import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Switch, Route } from "react-router-dom"
import Home from './Pages/Home';
import { GlobalStyles } from './styles/GlobalStyles';
import Footer from './Components/Footer/Footer.js';
import Top from './Components/Top/Top';
import ToggleMenu from './Components/ToggleMenu/ToggleMenu';
import Profile from './Pages/Profile';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
 const history = useHistory()


      history.push('/')

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

      <Route exact path='/profile'>
        <Profile/>
      </Route>


    </Switch>

    <Footer/>
    </>
  );
}

export default App;
