import React from 'react';
import styles from './telegram.module.css'
import {indicatorsListRequest} from "../../redux/indicatorsList/actions";
import {useDispatch, useSelector} from "react-redux";
import {indicatorConfigRequest} from "../../redux/indicatorConfig/actions";

const Telegram = () => {
    const dispatch = useDispatch();
    const test = useSelector(store => store.selectedIndicatorConfig.indicator_config);

    React.useEffect(() => {
        console.log('1');
        if (!test) {
            dispatch(indicatorConfigRequest('sma'))
        }
    }, [dispatch, test])

    React.useEffect(() => {
        console.log('2');
        console.log(test);
    }, [test])

    return (
        <div className={styles.tab}>
            <article>
                {test ? JSON.stringify(test, null, 2) : "Not loaded"}
            </article>
        </div>
    )
}

export default Telegram;