import React from 'react';
import style from './Preloader.module.css';
import Loader from "react-loader-spinner";

const Preloader = () => {
    return (
       <div className={style.preloader}>
           <Loader type="Oval" color="#00BFFF" height={100} width={100}/>
       </div>
    )
};

export default Preloader;