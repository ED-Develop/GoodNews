import React, {useState} from "react";
import {CSSTransitionGroup} from "react-transition-group";

const withHoverEffect = (Tooltip) => (Component) => {
    const HoverEffect = (props) => {
        const [isHover, setIsHover] = useState(false);

        return (
            <div className='hoverContainer' onMouseOver={() => setIsHover(true)}
                 onMouseLeave={() => setIsHover(false)}>
                <Component/>
                <CSSTransitionGroup
                    transitionName="hoverTooltip"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {isHover && <Tooltip/>}
                </CSSTransitionGroup>
            </div>
        )
    };

    return HoverEffect;
};

export default withHoverEffect;