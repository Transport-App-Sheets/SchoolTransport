import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Route, Switch, useLocation } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Childmap from './components/Childmap';
import Childshow from './components/Childshow';
import { Home } from '@mui/icons-material';
import AboutUs from './components/AboutUs';

import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  let bgImage;

  // Set the background image based on the current route
  switch (location.pathname) {
    case '/':
      bgImage = require('./components/cg.jpg');
      break;
    case '/addchild':
      bgImage = require('./components/bg.jpg');
      break;
    case '/mapchild':
      bgImage = require('./components/cg.jpg');
      break;
      case '/showchild':
      bgImage = require('./components/bg.jpg');
      break;
   
  }

  return (
    <div style={{ backgroundImage: `url(${bgImage})`,backgroundSize:'cover',backgroundRepeat: 'no-repeat', height: '100vh', margin: 0,
    padding: 0 }}>
      <Switch>
        <Route path='/' exact>
          <>
            <Navbar />
            <Login />
          </>
        </Route>

        <Route path='/home' exact>
          <>
            <Navbar />
            <Home />
          </>
        </Route>

        <Route path='/aboutus' exact>
          <>
            <Navbar />
            <AboutUs />
          </>
        </Route>

        <Route path='/addchild' exact>
          <>
            <Navbar />
            <ResponsiveAppBar />
          </>
        </Route>

        <Route path='/mapchild' exact>
          <>
            <Navbar />
            <Childmap />
          </>
        </Route>
        <Route path='/showchild' exact>
          <>
            <Navbar />  <div style={{display: " flex"}}>
            <Childshow childname='sami' childaddress='Marrakesh' schoolname='Emsi gueliz' driver='IRBus 41'/>
            <Childshow childname='Nasroallah' childaddress='Marrakesh' schoolname='Emsi centrer' driver='IRBus 40'/>
            </div>
          </>
        </Route>
        
      </Switch>

      <Footer />  
    </div>
    
  );
}

export default App;