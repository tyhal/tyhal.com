import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Card from 'reactstrap/es/Card'

const options = {
  chart: {
    styledMode: true
  },

  title: {
    text: 'Solar Employment Growth by Sector, 2010->2016'
  },

  subtitle: {
    text: 'Source: thesolarfoundation.com'
  },

  yAxis: {
    title: {
      text: 'Number of Employees'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [{
    name: 'Installation',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: 'Manufacturing',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: 'Sales & Distribution',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }
}

const options2 = {
  chart: {
    styledMode: true,
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Browser market shares in January, 2018'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Other',
      y: 7.05
    }]
  }]
}

// app component
class Charts extends Component {
  // render
  render () {
    return (<Jumbotron>
      <h1>Charts [ TODO ]</h1>
      <p>Gotta work out what to render here based off the profile data</p>
      <Card>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </Card>
      <Card>
        <HighchartsReact
          highcharts={Highcharts}
          options={options2}
        />
      </Card>
    </Jumbotron>)
  }
}

export default Charts
