import {useMediaQuery} from "react-responsive";

const Large = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });

    return isNotMobile ? children : null
};

export default Large;
