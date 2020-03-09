import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import Login from "./Login/Login";
import {CSSTransitionGroup} from "react-transition-group";
import {login, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    state = {
        isShowNavbar: false,
        isLoginMode: false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.isAuth && this.props.isAuth) {
            this.setState({isLoginMode: false})
        }
    }

    toggleIsShowNavbar = (isShowNavbar) => {
        this.setState({isShowNavbar})
    };

    toggleLoginMode = (isLoginMode) => {
        this.setState({isLoginMode})
    };

    render() {
        return (
            <div>
                <CSSTransitionGroup transitionName="loginModal" transitionEnterTimeout={300}
                                    transitionLeaveTimeout={300}>
                    {this.state.isLoginMode && <Login login={this.props.login} closeLoginForm={this.toggleLoginMode}/>}
                </CSSTransitionGroup>
                <Header isAuth={this.props.isAuth} toggleIsShowNavbar={this.toggleIsShowNavbar}
                        isShowNavbar={this.state.isShowNavbar} openLoginForm={this.toggleLoginMode}
                        logout={this.props.logout} userName={this.props.userName}/>
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

export default connect(mapStateToProps, {login, logout})(HeaderContainer);