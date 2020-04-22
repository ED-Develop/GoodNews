import {useEffect} from "react";

const useOutsideClick = (callback, ref, dependency) => {
    const onMouseDown = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback(dependency);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', onMouseDown);

        return () => {
            document.removeEventListener('mousedown', onMouseDown)
        }
    });
};

export default useOutsideClick;