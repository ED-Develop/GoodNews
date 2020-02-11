import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {Provider} from "react-redux";
import store from "./redux/store";
import ArticlesContainer from "./components/Articles/ArticlesContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <HeaderContainer/>
            <Container>
                <ArticlesContainer/>
            </Container>
        </div>
    </Provider>
  );
}

export default App;
