import React from 'react';
import styles from './telegram.module.css'
import {indicatorsListRequest} from "../../../redux/indicators/actions";
import {useDispatch, useSelector} from "react-redux";

const Telegram = () => {
    const dispatch = useDispatch();
    const test = useSelector(store => store.indicatorsList.indicators);
    console.log(test);

    React.useEffect(() => {
        dispatch(indicatorsListRequest())
    }, [dispatch])

    return (
        <div className={styles.tab}>
            <article>
                {test ? test.join(', ') : "Not loaded"}
            </article>
        </div>
    )
}

export default Telegram;