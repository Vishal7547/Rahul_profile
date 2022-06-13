import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu/Menu';

import Section from './Section/Section';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App" 
    style={{backgroundColor:"black"}}
    >
     <Menu/>
     {/* <Section/> */}
     
     <Routes> 
    <Route exact path="/maharani/Electric_and/Hadrware" element={ <Section/>} > </Route>
    <Route exact path="/" element={ <Section/>} > </Route>
    <Route exact path="/nareshyadav" element={ <Section/>} > </Route>
<Route  path="/home" element={ <Section/>} > </Route>
</Routes> 
     
    
    </div>
  );
}

export default App;
