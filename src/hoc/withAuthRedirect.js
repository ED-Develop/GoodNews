import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (props.isAuth) return <Component {...props}/>;

        return <Redirect to='/'/>
    };

    const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    });

    return connect(mapStateToProps)(RedirectComponent);
};
