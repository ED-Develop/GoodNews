import React from "react";
import Memberships from "./Memberships";
import {connect} from "react-redux";
import {toggleMembership} from "../../redux/memberships/memberships-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class MembershipsContainer extends React.Component{
    render() {
        return <Memberships
            memberships={this.props.memberships}
            toggleMembership={this.props.toggleMembership}
            currentMembership={this.props.currentMembership}
        />
    }
}

const mapStateToProps = (state) => ({
    memberships: state.memberships.data,
    currentMembership: state.auth.membership
});

export default compose(
    connect(mapStateToProps, {toggleMembership}),
    withAuthRedirect
)(MembershipsContainer);
