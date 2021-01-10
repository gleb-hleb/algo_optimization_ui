import React, {useState} from 'react';
import styles from './optimization.module.css'
import PopUpMenu from "../../components/popUpMenu";
import {
    Button, Card, CardContent, Divider, TextField,
    Typography
} from "@material-ui/core";
import {
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPair, tradingPairListRequest} from "../../store/tradingPair/actions";
import {indicatorsListRequest, setCurrentIndicator} from "../../store/indicatorsList/actions";
import ConfigList from "../../components/configList";
import ButtonsRow from "../../components/buttonsRow";
import Benchmark from "../../components/benchmark";
import Plot from "../../components/plot";

const BacktestOptionsPage = () => {
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
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    React.useEffect(() => {
        if (!tradingPairs) {
            dispatch(tradingPairListRequest())
        }
        if (!indicators) {
            dispatch(indicatorsListRequest())
        }
        // eslint-disable-next-line
    }, [dispatch])

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <React.Fragment>
            {/*<NavigationBar/>*/}
            {/*<CssBaseline/>*/}
            <Typography component="div" className={styles.tab}>
                <div className={styles.config}>
                    <Card>
                        <CardContent style={{flexDirection: 'column'}}>
                            <Typography style={{marginBottom: "30px"}}>
                                Strategy
                            </Typography>
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
                            <Divider style={{marginTop: '30px', marginBottom: '30px'}}/>
                            <Typography style={{marginBottom: "30px"}}>
                                Optimization params
                            </Typography>
                            <ConfigList/>
                            <Divider style={{marginTop: '30px', marginBottom: '30px'}}/>
                            <Typography style={{marginBottom: "30px"}}>
                                Other params
                            </Typography>
                            <ButtonsRow/>
                        </CardContent>
                    </Card>
                </div>
                <div className={styles.output}>
                    <Card>
                        <CardContent style={{display: 'flex', flexDirection: 'column'}}>
                            <Typography style={{marginBottom: "30px"}}>
                                Backtesting
                            </Typography>
                            <Typography
                                component="div"
                                style={{width: '100%'}}>
                                <Typography
                                    component="div"
                                    style={{width: '70%', float: 'left', display: 'flex', flexDirection: 'column'}}>
                                    <div>
                                        <Typography style={{float: 'left', transform: 'translateY(50%)'}}>Date: </Typography>
                                        <TextField
                                            id="date"
                                            label="From"
                                            type="date"
                                            style={{width: '165px', float: 'left', marginLeft: '15px', verticalAlign: 'center'}}
                                            defaultValue="2017-05-24"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            id="date"
                                            label="To"
                                            type="date"
                                            style={{width: '165px', float: 'left', marginLeft: '15px', verticalAlign: 'center'}}
                                            defaultValue="2017-05-24"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <Typography style={{marginTop: '15px'}}>Target: Shape ratio</Typography>
                                    </div>
                                    <div>
                                        <Typography style={{marginTop: '15px'}}>Reserved: TODO</Typography>
                                    </div>
                                </Typography>
                                <Typography
                                    component="div"
                                    /*TODO: make height 100%*/
                                    style={{height: '145.69px', width: '30%', float: 'left'}}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size='large'
                                        style={{position: 'relative', top: '50%', transform: 'translateY(-50%)', width: '100%'}}>
                                        Start optimization
                                    </Button>
                                </Typography>
                            </Typography>
                            <Divider style={{marginTop: '30px', marginBottom: '30px'}}/>
                            <Benchmark/>
                            <Divider style={{marginTop: '30px', marginBottom: '30px'}}/>
                            <Plot data={plotData}/>
                        </CardContent>
                    </Card>
                </div>
            </Typography>
        </React.Fragment>
    )
}

export default BacktestOptionsPage;