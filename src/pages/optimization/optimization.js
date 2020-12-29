import React from 'react';
import styles from './optimization.module.css'
import PopUpMenu from "../../components/popUpMenu";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    CssBaseline,
    Typography
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPair, tradingPairListRequest} from "../../redux/tradingPair/actions";
import {indicatorsListRequest, setCurrentIndicator} from "../../redux/indicatorsList/actions";
import ConfigList from "../../components/configList";

const Optimization = () => {
    const dispatch = useDispatch();
    const tradingPairs = useSelector(store => store.tradingPairList.trading_pair_list);
    const indicators = useSelector(store => store.indicatorsList.indicators);
    const initialTradingPair = useSelector(store => store.tradingPairList.selected_trading_pair);
    const initialIndicator = useSelector(store => store.indicatorsList.selected_indicator);

    React.useEffect(() => {
        if (!tradingPairs) {
            dispatch(tradingPairListRequest())
        }
        if (!indicators) {
            dispatch(indicatorsListRequest())
        }
        // eslint-disable-next-line
    }, [dispatch])

    return (
        <React.Fragment>
            <CssBaseline/>
            <Typography component="div" className={styles.tab}>
                <div className={styles.config}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel-strategy-content"
                            id="panel-strategy-header"
                        >
                            <Typography>Strategy</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{flexDirection: 'column'}}>
                            <PopUpMenu
                                items={tradingPairs}
                                name={'Pair'}
                                action={setCurrentPair}
                                initialItem={initialTradingPair}
                            />
                            <PopUpMenu
                                items={indicators}
                                name={'Indicator'}
                                action={setCurrentIndicator}
                                initialItem={initialIndicator}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel-optParams-content"
                            id="panel-optParams-header"
                        >
                            <Typography>Optimization parameters</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ConfigList/>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel-otherParams-content"
                            id="panel-otherParams-header"
                        >
                            <Typography>Other parameters</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel-optResult-content"
                            id="panel-optResult-header"
                        >
                            <Typography>Optimization results</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className={styles.output}>

                </div>
            </Typography>
        </React.Fragment>
    )
}

export default Optimization;