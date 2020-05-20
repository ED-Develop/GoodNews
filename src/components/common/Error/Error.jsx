import React, {useEffect} from "react";
import style from './Error.module.css';
import {Alert} from "react-bootstrap";

const Error = ({error, closeErrorWindow}) => {
    useEffect(() => {
        setTimeout(() => closeErrorWindow(), 5000);
    });

    return (
        <div className={style.errorContainer}>
            <Alert variant="dark" onClose={() => closeErrorWindow()} dismissible>
                <p>
                    {error}
                </p>
            </Alert>
        </div>
    )
};

export default Error;
