import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar';
import SideMenu from './components/sidemenu';
import demo from './pages/demo';

function App() {
  return (
    <>
    <BrowserRouter>
      {/* <Navbar/> */}
      <SideMenu/>
      <Switch>
        <Route exact path='/demo' component={demo}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
