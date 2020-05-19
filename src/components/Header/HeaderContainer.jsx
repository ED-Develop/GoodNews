import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import Login from "./Login/Login";
import {CSSTransitionGroup} from "react-transition-group";
import {login, logout} from "../../redux/auth/auth-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class HeaderContainer extends React.Component {
    state = {
        isShowNavbar: false,
        isLoginMode: false,
        isSearch: false,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.isAuth && this.props.isAuth) {
            this.setState({isLoginMode: false});
        }

        if (prevProps.isAuth !== this.props.isAuth) {
            this.toggleIsShowNavbar(false);
        }
    }

    toggleIsShowNavbar = (isShowNavbar) => {
        this.setState({isShowNavbar})
    };

    toggleLoginMode = (isLoginMode) => {
        this.setState({isLoginMode})
    };

    toggleIsSearch = () => {
        this.setState((state, props) => ({
            isSearch: !state.isSearch
        }))
    };

    searchArticles = (searchRequest) => {
        this.props.history.push(`/articles?search=${searchRequest}`);
    };

    render() {
        const {login, isAuth, logout, userName} = this.props;
        const {isLoginMode, isSearch, isShowNavbar} = this.state;

        return (
            <div>
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >
                    {isLoginMode && <Login login={login} closeLoginForm={this.toggleLoginMode}/>}
                </CSSTransitionGroup>
                <Header
                    isAuth={isAuth}
                    toggleIsShowNavbar={this.toggleIsShowNavbar}
                    isShowNavbar={isShowNavbar}
                    openLoginForm={this.toggleLoginMode}
                    logout={logout} userName={userName}
                    isSearch={isSearch}
                    toggleIsSearch={this.toggleIsSearch}
                    searchArticles={this.searchArticles}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userName: state.auth.login
    }
};

export default compose(connect(mapStateToProps, {login, logout}), withRouter)(HeaderContainer);
