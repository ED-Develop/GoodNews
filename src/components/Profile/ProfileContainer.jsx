import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, updateUserProfile} from "../../redux/profile/profile-reducer";
import {change, submit} from "redux-form";
import ModalDialog from "../common/Modal/ModalDialog";
import {compose} from "redux";
import {withFixedFooter} from "../../hoc/withFixedFooter";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isModal: false,
            changedProperty: null
        }
    }

    componentDidMount() {
        this.props.getUserProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isAuth && this.props.user !== prevProps.isAuth && !this.props.user) {
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
                <ModalDialog
                    isShow={this.state.isModal}
                    title='profile.confirm'
                    body='profile.confirmBody'
                    closeModal={this.closeModal}
                    updateProfile={this.updateProfile}
                />
                {
                    this.props.isInitialized && this.props.user
                        ? <Profile
                            user={this.props.user}
                            region={this.props.region}
                            confirmChanges={this.confirmChanges}
                            changeReduxForm={this.props.change}
                            startSubmit={this.props.submit}
                        />
                        : <Preloader/>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    user: state.profile.user,
    region: state.app.region,
    isInitialized: state.app.isInitialized
});

export default compose(
    connect(mapStateToProps, {getUserProfile, updateUserProfile, change, submit}),
    withFixedFooter,
    withAuthRedirect
)(ProfileContainer);
