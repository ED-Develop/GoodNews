import React from "react";
import defaultImage from "../../../assets/image/newsDefault.jpg";

const ImgWithDefault = ({url, alt, className}) => {
    const handleError = (e) => e.target.src = defaultImage;

    return <img className={className} src={url || defaultImage} alt={alt || 'photo'} onError={handleError}/>
};

export default ImgWithDefault;
