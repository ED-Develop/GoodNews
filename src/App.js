import React from 'react';
import './App.css';
import {connect, Provider} from "react-redux";
import store from "./redux/store";
import HeaderContainer from "./components/Header/HeaderContainer";
import {HashRouter} from "react-router-dom";
import Routes from "./components/Routes";
import Error from "./components/common/Error/Error";
import {getGeolocationPosition, getInterfaceText, initializeApp, setGlobalError} from "./redux/app/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import Footer from "./components/Footer/Footer";
import {IntlProvider} from "react-intl";
import {getLocale} from "./redux/app/app-selector";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CSSTransition from "react-transition-group/cjs/CSSTransition";

class AppContainer extends React.PureComponent {
    componentDidMount() {
        this.props.initializeApp();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isInitializedApp && !this.props.region && !this.props.isFetching) {
            this.props.getGeolocationPosition();
        }

        if ((this.props.region && !this.props.interfaceText) || (this.props.region !== prevProps.region)) {
            this.props.getInterfaceText();
        }
    }

    closeErrorWindow = () => {
        this.props.setGlobalError(null);
    };

    render() {
        const {globalError, isInitializedApp, interfaceText, locale, isFooter} = this.props;

        if (isInitializedApp) {
            return (
                <IntlProvider locale={locale} messages={interfaceText}>
                    <div className="App">
                        <ScrollToTop/>
                        {this.props.isFetching && <Preloader/>}
                        <CSSTransition
                            in={globalError}
                            classNames="fade"
                            timeout={300}
                            unmountOnExit
                        >
                            <Error error={globalError} closeErrorWindow={this.closeErrorWindow}/>
                        </CSSTransition>
                        <HeaderContainer/>
                        <main className='appMain'>
                            <Routes/>
                        </main>
                        {isFooter && <Footer isFixed={this.props.isFixedFooter}/>}
                    </div>
                </IntlProvider>
            );
        } else {
            return <Preloader/>
        }
    }
}

const mapStateToProps = (state) => ({
    globalError: state.app.globalError,
    isFetching: state.app.isFetching,
    isFixedFooter: state.app.isFixedFooter,
    isInitializedApp: state.app.isInitializedApp,
    region: state.app.region,
    locale: getLocale(state),
    interfaceText: state.app.interfaceText,
    isFooter: state.app.isFooter
});

const AppConnected = connect(mapStateToProps, {
    initializeApp,
    setGlobalError,
    getGeolocationPosition,
    getInterfaceText,
})(AppContainer);

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
