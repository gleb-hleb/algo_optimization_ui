import React, {useState} from 'react';
import styles from './optimization.module.css'
import PopUpMenu from "../../components/popUpMenu";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Button,
    CssBaseline, Divider,
    Typography
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPair, tradingPairListRequest} from "../../redux/tradingPair/actions";
import {indicatorsListRequest, setCurrentIndicator} from "../../redux/indicatorsList/actions";
import ConfigList from "../../components/configList";
<<<<<<< HEAD
import ButtonsRow from "../../components/buttonsRow";
import Benchmark from "../../components/benchmark";
import Plot from "../../components/plot";
=======
import Header from '../../components/header/index.js';
import NavigationBar from "../../components/navigation_bar";
>>>>>>> c7d8915... messy dump/ saved for a reason/ llbe rebuild xwith only one option to sign in using google account/ other cases are shit

const Optimization = () => {
    const dispatch = useDispatch();
    const tradingPairs = useSelector(store => store.tradingPairList.trading_pair_list);
    const indicators = useSelector(store => store.indicatorsList.indicators);
    const initialTradingPair = useSelector(store => store.tradingPairList.selected_trading_pair);
    const initialIndicator = useSelector(store => store.indicatorsList.selected_indicator);

    const testData = {
        labels: ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        datasets: [
            {
                type: "line",
                label: "Line#1",
                data: [86, 67, 91, 88, 45, 3, 21, 0, 89, 99, 100],
                borderCapStyle: 'round',
                pointRadius: 0,
                pointHitRadius: 20,
                hoverRadius: 8,
                borderColor: '#6161f6',
                backgroundColor: 'rgb(108, 108, 186, .5)',
                fill: 'start',
            },
            {
                type: "line",
                label: "Line#2",
                data: [74, 60, 21, 53, 78, 2, 0, 0, 78, 45, 55],
                borderCapStyle: 'round',
                pointRadius: 0,
                pointHitRadius: 20,
                hoverRadius: 8,
                borderColor: '#f1dd5c',
                backgroundColor: 'rgb(238,219,159, .5)',
                fill: 'start',
            },
            {
                type: "line",
                label: "Line#3",
                data: [67, 25, 34, 86, 90, 1, 22, 33, 44, 55, 66],
                borderCapStyle: 'round',
                pointRadius: 0,
                pointHitRadius: 20,
                hoverRadius: 8,
                borderColor: '#e3238e',
                backgroundColor: 'rgb(224,121,215, .5)',
                fill: 'start',
            },
            {
                type: "scatter",
                label: "Line#4",
                data: [9, 13, 24, 34, 45, 56, 68, 79, 99, 100, 2],
                borderCapStyle: 'round',
                pointStyle: 'cross',
                pointRadius: 4,
                pointHitRadius: 20,
                hoverRadius: 8,
                borderColor: '#ec1111',
                fill: 'start',
            }
        ]
    };
    const plotData = useSelector(store => store.plotData) || testData;

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
<<<<<<< HEAD
        <React.Fragment>
            <CssBaseline/>
            <Typography component="div" className={styles.tab}>
                <div className={styles.config}>
                    <Accordion expanded={strategyExpanded} onChange={() => setStrategyExpanded(!strategyExpanded)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel-strategy-content"
                            id="panel-strategy-header">
                            <Typography>Strategy</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{flexDirection: 'column'}}>
                            <PopUpMenu
                                items={tradingPairs}
                                name={'Pair'}
                                action={setCurrentPair}
                                initialItem={initialTradingPair}/>
                            <PopUpMenu
                                items={indicators}
                                name={'Indicator'}
                                action={setCurrentIndicator}
                                initialItem={initialIndicator}/>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={configExpanded} onChange={() => setConfigExpanded(!configExpanded)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel-optParams-content"
                            id="panel-optParams-header">
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
                            id="panel-otherParams-header">
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
                            id="panel-optResult-header">
                            <Typography>Optimization results</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className={styles.output}>
                    <Accordion expanded={true}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel-back-testing-content"
                            id="panel-back-testing-header">
                            <Typography>Backtesting</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            style={{display: 'flex', flexDirection: 'column'}}>
                            <Typography
                                component="div"
                                style={{width: '100%'}}>
                                <Typography
                                    component="div"
                                    style={{width: '55%', float: 'left'}}>
                                    <h5>Scenario</h5>
                                    <h5>Target: Shape ratio</h5>
                                    <h5>Reserved: TODO</h5>
                                </Typography>
                                <Typography
                                    component="div"
                                    /*TODO: make height 100%*/
                                    style={{height: '145.69px', width: '45%', float: 'left'}}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size='large'
                                        style={{position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
                                        Start optimization
                                    </Button>
                                </Typography>
                            </Typography>
                            <Divider/>
                            <Benchmark/>
                            <Plot data={plotData}/>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Typography>
        </React.Fragment>
=======
        <Header>
            <NavigationBar>
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
            </NavigationBar>
        </Header>
>>>>>>> c7d8915... messy dump/ saved for a reason/ llbe rebuild xwith only one option to sign in using google account/ other cases are shit
    )
}

export default Optimization;