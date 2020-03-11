import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {
    render() {
        return (
            <>
                <Profile/>
            </>
        )
    }
}

const mapStateToProps = () => {
    return {

    }
};

export default connect()(ProfileContainer);