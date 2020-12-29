import React from 'react';
import styles from './telegram.module.css'
import {indicatorsListRequest} from "../../redux/indicators/actions";
import {useDispatch, useSelector} from "react-redux";
import {indicatorConfigRequest} from "../../redux/indicatorConfig/actions";

const Telegram = () => {
    const dispatch = useDispatch();
    const test = useSelector(store => store.selectedIndicatorConfig.indicator_config);

    React.useEffect(() => {
        dispatch(indicatorConfigRequest('sma'))
    }, [dispatch])

    return (
        <div className={styles.tab}>
            <article>
                {test ? JSON.stringify(test, null, 2) : "Not loaded"}
            </article>
        </div>
    )
}

export default Telegram;