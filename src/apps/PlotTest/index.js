
import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'

import Chart from "chart.js";

class TyChartJS extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart(node, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "# of Likes",
            data: [12, 19, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
        <div>
          <canvas
              style={{ width: 800, height: 300 }}
              ref={node => (this.node = node)}
          />
        </div>
    );
  }
}

// app component
class PlotTest extends Component {
  // render
  render () {
    return (<Jumbotron>
      <h1>ChartJS</h1><TyChartJS/>
      <h1>HighCharts</h1> Soon
    </Jumbotron>)
  }
}

export default PlotTest
