import React, {useState} from "react";
import {archiveDateFormatter} from "../../../helpers/dateFormater";

const Archives = () => {
    const [date, setDate] = useState(archiveDateFormatter(new Date()));

    return (
        <div>
            <h4>Archives</h4>
            <ul>
                {date.map( d => {
                    return <li> {d.from}    {d.title}</li>
                })}
            </ul>
        </div>
    )
};

export default Archives;