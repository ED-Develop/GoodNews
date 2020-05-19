import React, {useEffect, useState} from "react";
import {CSSTransitionGroup} from "react-transition-group";
import {useLocation} from 'react-router-dom';

const withHoverEffect = (Tooltip) => (Component) => {
    const HoverEffect = (props) => {
        const [isHover, setIsHover] = useState(false);
        const location = useLocation();

        useEffect(() => {
            setIsHover(isHover => {
                if (isHover) return false;
            });
        }, [location.pathname]);

        return (
            <div className='hoverContainer'
                 onMouseOver={() => setIsHover(true)}
                 onMouseLeave={() => setIsHover(false)}
            >
                <Component {...props}/>
                <CSSTransitionGroup
                    transitionName="hoverTooltip"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {isHover && <Tooltip {...props}/>}
                </CSSTransitionGroup>
            </div>
        )
    };

    return HoverEffect;
};

export default withHoverEffect;
