import React from 'react';
import './App.css';
import './css/custom-bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {connect, Provider} from "react-redux";
import store from "./redux/store";
import ArticlesContainer from "./components/Articles/ArticlesContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {HashRouter, Route} from "react-router-dom";
import {authMe} from "./redux/auth-reducer";
import HomeContainer from "./components/Home/HomeContainer";

class AppContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return (
            <div className="App">
                <HeaderContainer/>
                <main className='appMain'>
                    <Container>
                        <Route path='/' exact component={HomeContainer}/>
                        <Route path="/articles/:category?" component={ArticlesContainer}/>
                    </Container>
                </main>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {}
};

const AppConnected = connect(mapStateToProps, {authMe})(AppContainer);

const App = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppConnected/>
            </Provider>
        </HashRouter>
    )
};

export default App;
