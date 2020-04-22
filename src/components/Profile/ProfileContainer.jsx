import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, updateUserProfile} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import {change, submit} from "redux-form";
import ModalDialog from "../common/Modal/ModalDialog";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModal: false,
            changedProperty: null
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isAuth && this.props.isAuth !== prevProps.isAuth) {
            this.props.getUserProfile();
        }
    }

    confirmChanges = (data) => {
        this.setState({...this.state, isModal: true, changedProperty: data});
    };

    closeModal = () => {
        this.setState({...this.state, isModal: false, changedProperty: null});
    };

    updateProfile = () => {
        this.props.updateUserProfile(this.state.changedProperty);
        this.closeModal();
    };

    render() {
        return (
            <>
                <ModalDialog isShow={this.state.isModal} title='Confirm changes' body={'Do you want to save changes?'}
                             closeModal={this.closeModal} updateProfile={this.updateProfile}/>
                {this.props.isFetching && <Preloader/>}
                {this.props.user && <Profile user={this.props.user} confirmChanges={this.confirmChanges}
                                             changeReduxForm={this.props.change} startSubmit={this.props.submit}/>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.app.isFetching,
        isAuth: state.auth.isAuth,
        user: state.profile.user
    }
};

export default connect(mapStateToProps, {getUserProfile, updateUserProfile, change, submit})(ProfileContainer);