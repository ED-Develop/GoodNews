import React from 'react';
import Header from "./Header";
import {authApi} from "../../api/authApi";

class HeaderContainer extends React.Component {
    state = {
        isShowNavbar: false
    };

    toggleIsShowNavbar = (isShowNavbar) => {
        this.setState({isShowNavbar})
    };

    componentDidMount() {
        authApi.login().then(r => {
            console.log(r);
        })
    }

    render() {
        return (
            <div>
                <Header toggleIsShowNavbar={this.toggleIsShowNavbar} isShowNavbar={this.state.isShowNavbar}/>
            </div>
        )
    }
}

export default HeaderContainer;