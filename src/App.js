import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import SearchTerm from './components/SearchTerm/SearchTerm';
import Card from './components/Card/Card';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Contact from './views/Contact';
import Products from './views/Products';
import ProductDetail from './views/ProductDetail';
import Message from './components/Message/Message';
import CheckOut from './views/CheckOut';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import UpdateInfo from './components/UpdateInfo/UpdateInfo'
import Info from './views/Info';
import ScrollButton from './components/ScrollButton/ScrollButton';
import AddProduct from './components/AddProduct/AddProduct';
import { useSelector } from 'react-redux';


function App() {
  const {isOpenRegister, isOpenSignIn} = useSelector(state => state.account);
  const {user, isOpenUpdateInfo} = useSelector(state => state.account);
  const {isOpenFormProduct} = useSelector(state => state.admin);
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <SearchTerm></SearchTerm>
        <Card></Card>
        <Message></Message>
        <ScrollButton></ScrollButton>
        {isOpenRegister && <Register></Register>}
        {isOpenSignIn && <SignIn></SignIn>}
        {isOpenUpdateInfo && <UpdateInfo></UpdateInfo>}
        {isOpenFormProduct && <AddProduct/>}
        <Switch>
          <Route path="/e-commerce" exact>
            <Home/>
          </Route>
          <Route path="/e-commerce/checkout">
            <CheckOut/>
          </Route>
          <Route path="/e-commerce/product/:id">
            <ProductDetail/>
          </Route>
          <Route path="/e-commerce/products">
            <Products/>
          </Route>
          <Route path="/e-commerce/contact">
            <Contact/>
          </Route>
          {user.email !== '' &&
            <Route path="/e-commerce/info">
              <Info/>
            </Route>
          }
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
