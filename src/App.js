import React from 'react';
import './App.css';
import {connect, Provider} from "react-redux";
import store from "./redux/store";
import HeaderContainer from "./components/Header/HeaderContainer";
import {HashRouter} from "react-router-dom";
import {authMe} from "./redux/auth-reducer";
import Routes from "./components/Routes";
import Error from "./components/common/Error/Error";
import {getGeolocationPosition, setGlobalError} from "./redux/app-reducer";
import {CSSTransitionGroup} from "react-transition-group";
import Preloader from "./components/common/Preloader/Preloader";
import Footer from "./components/Footer/Footer";

class AppContainer extends React.PureComponent {
    componentDidMount() {
        this.props.authMe();
        this.props.getGeolocationPosition();
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
                <Footer isFixed={this.props.isFixedFooter}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        globalError: state.app.globalError,
        isFetching: state.app.isFetching,
        isFixedFooter: state.app.isFixedFooter
    }
};

const AppConnected = connect(mapStateToProps, {authMe, setGlobalError, getGeolocationPosition})(AppContainer);

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
