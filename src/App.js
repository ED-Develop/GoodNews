import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {Provider} from "react-redux";
import store from "./redux/store";
import ArticlesContainer from "./components/Articles/ArticlesContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {BrowserRouter, Redirect, Route} from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
       <Provider store={store}>
           <div className="App">
               <HeaderContainer/>
               <Container>
                   <Route path='/' exact component={() => <Redirect to='/articles'/>}/>
                   <Route path="/articles/:category?" component={ArticlesContainer}/>
               </Container>
           </div>
       </Provider>
   </BrowserRouter>
  );
}

export default App;
