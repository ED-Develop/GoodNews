import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FormattedMessage} from "react-intl";

const FollowLink = ({link}) => {
    const [isHover, setIsHover] = useState(false);
    const toggleIsHover = () => setIsHover((isHover) => !isHover);

    return (
        <li key={link.title}>
            <a
                href={link.href}
                style={isHover ? {color: link.color} : {}}
                onMouseEnter={toggleIsHover}
                onMouseLeave={toggleIsHover}
            >
                <FontAwesomeIcon icon={link.icon} style={{fontSize: '20px', marginRight: '15px'}}/>
                <FormattedMessage id='header.followTooltip'/> {link.title}
            </a>
        </li>
    )
};

export default FollowLink;
