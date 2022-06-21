import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, 
  Switch, 
  Route,
   Link 
  } 
from "react-router-dom";
import Header from './Header/header'
import home from './Home/home'
import about from './About/about'
import contact from './Contact/contact'
import product from './Products/product'
import productdetails from './Products/productdetails';


function App() {
  return (
    <div className="App">
      <>
      <div className='container' >
      <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={home}/>
        <Route path="/about" exact component={about}/>
        <Route path="/contact" exact component={contact}/>
        <Route path="/product" exact component={product}/>
        <Route path="/details/:id" exact component={productdetails}/>

        </Switch>
      </Router>
      </div>
      </>
    </div>
  );
}

export default App;
