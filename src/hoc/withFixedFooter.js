import React from "react";
import {connect} from "react-redux";
import {toggleIsFixedFooter} from "../redux/app/app-reducer";

export const withFixedFooter = (Component) => {
    class ContainerComponent extends React.Component {
        componentDidMount() {
            this.props.toggleIsFixedFooter(true);
        }

        componentWillUnmount() {
            this.props.toggleIsFixedFooter(false);
        }

        render() {
            const {toggleIsFixedFooter, ...restProps} = this.props;

            return <Component {...restProps}/>;
        }
    }

    return connect(() => ({}), {toggleIsFixedFooter})(ContainerComponent);
};

