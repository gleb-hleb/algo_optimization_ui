import React, {Component} from 'react';
import Chart from 'chart.js';
import _ from 'lodash';

// const originalLineDraw = Chart.controllers.line.prototype.draw;
// Chart.helpers.extend(Chart.controllers.line.prototype, {
//     draw: function () {
//         // function drawSellMarker() {
//         //
//         // }
//         //
//         // function drawBuyMarker() {
//         //
//         // }
//         function drawVerticalLine(context, index) {
//             const xAxis = chart.scales['x-axis-0'];
//             const yAxis = chart.scales['y-axis-0'];
//
//             context.save();
//             context.beginPath();
//             context.moveTo(xAxis.getPixelForValue(undefined, index), yAxis.top);
//             context.strokeStyle = '#be0808';
//             context.lineWidth = 2;
//             context.lineTo(xAxis.getPixelForValue(undefined, index), yAxis.bottom);
//             context.stroke();
//             context.restore();
//         }
//
//         originalLineDraw.apply(this, arguments);
//         const chart = this.chart;
//         const ctx = chart.chart.ctx;
//         const markers = chart.config.data.markers;
//         if (!markers) return;
//
//         for (const marker of markers) {
//             drawVerticalLine(ctx, marker);
//         }
//     }
// });

export default class Plot extends Component {
    chartRef = React.createRef();
    config = {
        type: "line",
        data: this.props.data,
        options: {
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            drawTicks: true,
                            display: false,
                        },
                    },
                ],
                xAxes: [
                    {
                        gridLines: {
                            drawTicks: true,
                            display: false,
                        },
                    },
                ],
            },
            tooltips: {
                enabled: true,
                intersect: false,
                axis: 'x',
                display: true,
            }
        }
    };

    componentDidMount() {
        const ctx = this.chartRef.current.getContext("2d");
        this.plot = new Chart(ctx, this.config);
    }

    shouldComponentUpdate(nextProps) {
        return !_.isEqual(nextProps.data, this.props.data);
    }

    render() {
        return (
            <div>
                <canvas
                    id="curr-plot"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
