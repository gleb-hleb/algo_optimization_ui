import React from 'react';
import {TextField} from "@material-ui/core";
// import styles from "./timeRange.module.css";

const TimeRange = ({name, type}) => {
    const handleChange = (event) => {

    }

    return (
        <div>
            <h4>{`${name}:`}</h4>
            <TextField
                id="from"
                label="From"
                type={'number'}
                onChange={handleChange}
            />
            <TextField
                id="to"
                label="To"
                type={'number'}
                onChange={handleChange}
            />
            <TextField
                id="step"
                label="Step"
                type={'number'}
                onChange={handleChange}
            />
        </div>
    );
};

export default TimeRange;