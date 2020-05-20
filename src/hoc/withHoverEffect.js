import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';
import CSSTransition from "react-transition-group/cjs/CSSTransition";

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
                <CSSTransition
                    in={isHover}
                    classNames="hoverTooltip"
                    timeout={300}
                    unmountOnExit
                >
                    <Tooltip {...props}/>
                </CSSTransition>
            </div>
        )
    };

    return HoverEffect;
};

export default withHoverEffect;
