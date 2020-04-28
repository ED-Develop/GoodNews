import React from 'react';
import './App.css';
import {connect, Provider} from "react-redux";
import store from "./redux/store";
import HeaderContainer from "./components/Header/HeaderContainer";
import {HashRouter} from "react-router-dom";
import {authMe} from "./redux/auth-reducer";
import Routes from "./components/Routes";
import Error from "./components/common/Error/Error";
import {setGlobalError} from "./redux/app-reducer";
import {CSSTransitionGroup} from "react-transition-group";
import Preloader from "./components/common/Preloader/Preloader";

class AppContainer extends React.PureComponent {
    componentDidMount() {
        this.props.authMe();
    }

    closeErrorWindow = () => {
        this.props.setGlobalError(null);
    };

    render() {
        const {globalError} = this.props;

        return (
            <div className="App">
                {this.props.isFetching && <Preloader/>}
                <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    {globalError && <Error error={globalError} closeErrorWindow={this.closeErrorWindow}/>}
                </CSSTransitionGroup>
                <HeaderContainer/>
                <main className='appMain'>
                    <Routes/>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        globalError: state.app.globalError,
        isFetching: state.app.isFetching
    }
};

const AppConnected = connect(mapStateToProps, {authMe, setGlobalError})(AppContainer);

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
