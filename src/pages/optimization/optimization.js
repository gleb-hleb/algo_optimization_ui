import React, {useState} from 'react';
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
import ButtonsRow from "../../components/buttonsRow";

const Optimization = () => {
    const dispatch = useDispatch();
    const tradingPairs = useSelector(store => store.tradingPairList.trading_pair_list);
    const indicators = useSelector(store => store.indicatorsList.indicators);
    const initialTradingPair = useSelector(store => store.tradingPairList.selected_trading_pair);
    const initialIndicator = useSelector(store => store.indicatorsList.selected_indicator);

    const [strategyExpanded, setStrategyExpanded] = useState(true);
    const [configExpanded, setConfigExpanded] = useState(false);
    const [otherExpanded, setOtherExpanded] = useState(false);
    const [resultExpanded, setResultExpanded] = useState(false);

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
                    <Accordion expanded={strategyExpanded} onChange={() => setStrategyExpanded(!strategyExpanded)}>
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
                    <Accordion expanded={configExpanded} onChange={() => setConfigExpanded(!configExpanded)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel-optParams-content"
                            id="panel-optParams-header"
                        >
                            <Typography>Optimization parameters</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{maxHeight: '500px', overflow: 'auto'}}>
                            <ConfigList/>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={otherExpanded} onChange={() => setOtherExpanded(!otherExpanded)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel-otherParams-content"
                            id="panel-otherParams-header"
                        >
                            <Typography>Other parameters</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ButtonsRow/>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={resultExpanded} onChange={() => setResultExpanded(!resultExpanded)}>
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