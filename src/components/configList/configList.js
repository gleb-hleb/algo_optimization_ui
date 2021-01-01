import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {indicatorConfigRequest} from "../../store/indicatorConfig/actions";
import {CircularProgress} from "@material-ui/core";
import TimeRange from "../timeRange";

const ConfigList = () => {
    const dispatch = useDispatch();
    const selectedIndicator = useSelector(store => store.indicatorsList.selected_indicator);
    const selectedIndicatorConfig = useSelector(store => store.selectedIndicatorConfig.indicator_config);

    React.useEffect(() => {
        if (selectedIndicator) {
            dispatch(indicatorConfigRequest(selectedIndicator));
        }
    }, [dispatch, selectedIndicator]);

    if (!selectedIndicatorConfig) {
        return (
            <CircularProgress/>
        )
    }

    return (
        <div>
            {selectedIndicatorConfig.parameters.map((item) => {
                const rangeType = item.name === "Long period"? 'longPeriod' : 'shortPeriod';
                switch (item.component) {
                    case 'timeRange':
                        return <TimeRange
                            name={item.name}
                            type={rangeType}
                            key={item.name}/>;
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default ConfigList;