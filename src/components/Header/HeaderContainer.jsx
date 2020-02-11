import React from 'react';
import Header from "./Header";

class HeaderContainer extends React.Component {
    state = {
        isShowNavbar: false
    };

    toggleIsShowNavbar = (isShowNavbar) => {
        this.setState({isShowNavbar})
    };

    render() {
        return (
            <div>
                <Header toggleIsShowNavbar={this.toggleIsShowNavbar} isShowNavbar={this.state.isShowNavbar}/>
            </div>
        )
    }
}

export default HeaderContainer;