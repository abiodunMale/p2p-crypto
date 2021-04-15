import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SideMenu from './components/sidemenu';
import Auth from './pages/auth';
import Demo from './pages/demo';
import Navbar from './components/navbar';


const App = () => {
  return (
    <>
    <BrowserRouter>
    {false ? 
    <>
      <SideMenu/>
      <Navbar/>
    </> : <Auth/>  }
      <Switch>
        <Route exact path='/demo' component={Demo}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
