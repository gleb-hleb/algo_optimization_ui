import React from 'react';
import {TextField} from "@material-ui/core";
import {
    setLongPeriodFrom,
    setLongPeriodTo,
    setShortPeriodFrom,
    setShortPeriodTo,
    setLongPeriodStep,
    setShortPeriodStep
} from "../../redux/generalConfig/actions";
import {useDispatch, useSelector} from "react-redux";
// import styles from "./timeRange.module.css";


const TimeRange = ({name, type}) => {
    const dispatch = useDispatch();
    const generalConfig = useSelector(store => store.generalConfig)[type];

    const actionPeriod = (period) => {
        switch (period) {
            case 'Long period':
                return {
                    from: setLongPeriodFrom,
                    to: setLongPeriodTo,
                    step: setLongPeriodStep
                }
            case 'Short period':
                return {
                    from: setShortPeriodFrom,
                    to: setShortPeriodTo,
                    step: setShortPeriodStep
                }
            default:
                return null;
        }
    }

    const handleChange = (event) => {
        const periods = actionPeriod(name);
        dispatch(periods[event.target.id](event.target.value));
    }

    return (
        <div>
            <h4>{`${name}:`}</h4>
            <TextField
                id="from"
                label="From"
                type={'number'}
                onChange={handleChange}
                value={generalConfig.from || ''}
            />
            <TextField
                id="to"
                label="To"
                type={'number'}
                onChange={handleChange}
                value={generalConfig.to || ''}
                style={{marginLeft: '5px'}}
            />
            <TextField
                id="step"
                label="Step"
                type={'number'}
                onChange={handleChange}
                value={generalConfig.step || ''}
                style={{marginLeft: '5px'}}
            />
        </div>
    );
};

export default TimeRange;