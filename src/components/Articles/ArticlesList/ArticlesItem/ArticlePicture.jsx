import React from "react";
import style from "../ArticleList.module.css";
import ImgWithDefault from "../../../common/Utils/ImgWithDefault";

const ArticlePicture = ({urlToImage}) => {

    return (
        <div className={style.picture}>
            <ImgWithDefault url={urlToImage} className='w-100'/>
        </div>
    )
};

export default ArticlePicture;
