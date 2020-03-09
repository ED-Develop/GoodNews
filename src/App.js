import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {connect, Provider} from "react-redux";
import store from "./redux/store";
import ArticlesContainer from "./components/Articles/ArticlesContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {authMe} from "./redux/auth-reducer";

class App extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <div className="App">
                        <HeaderContainer/>
                        <main className='appMain'>
                            <Container>
                                <Route path='/' exact component={() => <Redirect to='/articles'/>}/>
                                <Route path="/articles/:category?" component={ArticlesContainer}/>
                            </Container>
                        </main>
                    </div>
                </Provider>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = () => {
    return {}
};

const AppContainer = connect(mapStateToProps, {authMe})(App);

const RootApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
};

export default RootApp;
