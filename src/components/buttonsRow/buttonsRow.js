import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {setIntervalConfig} from "../../store/generalConfig/actions";

const ButtonsRow = () => {
    const dispatch = useDispatch();
    const initialInterval = useSelector(store => store.generalConfig.interval) || '';
    const [alignment, setAlignment] = React.useState(initialInterval);

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
        dispatch(setIntervalConfig(newAlignment));
    };

    return (
        <div>
            <span style={{marginRight: '20px'}}>Interval:</span>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="interval"
            >
                <ToggleButton value="hour" aria-label="hour">
                    <Typography>1 HOUR</Typography>
                </ToggleButton>
                <ToggleButton value="day" aria-label="day">
                    <Typography>1 DAY</Typography>
                </ToggleButton>
                <ToggleButton value="week" aria-label="week">
                    <Typography>1 WEEK</Typography>
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default ButtonsRow;