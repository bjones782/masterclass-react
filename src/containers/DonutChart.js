import React from 'react';
import { connect } from 'react-redux'
import { Pie } from "react-chartjs-2";
import ReactApexChart from 'react-chartjs-2';
import Chart from 'react-apexcharts'
import { MDBContainer } from "mdbreact";
import { getStudentStandards } from '../services/backend';
import { Container } from 'react-bootstrap'

class DonutChart extends React.Component {
      
  constructor(props) {
    super(props);

    this.state = {
      options: {
        
        labels: ["Got It", "Almost", "Not Yet"],
        colors:['#FF0000', '#66CD00', '#FFFF00'],
        dataLabels: {
          enabled: false
        },

        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 100
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
        }
        
      },
      series: [55, 2, 1],
      plotOptions: {
        pie: {
          size: 200
            }}
      
      

    }
  }


  appendData () {
    let arr = this.state.series.slice()
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)

    this.setState({
      series: arr
    })
  }

  removeData() {
    if(this.state.series.length === 1) return
    
    let arr = this.state.series.slice()
    arr.pop()

    this.setState({
      series: arr
    })
  }

  randomize() {
    this.setState({
      series: this.state.series.map(() => {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1
      })
    })
  }

  reset() {
    let lessonmasteryall = this.props.standards.lessons.map(lesson => lesson.mastery)
    
    let numstudents = this.props.students.students.length

    let mastery1 = lessonmasteryall.filter(function(lesson) {
      return lesson === 1
    })

    let newmastery1 = (mastery1.length/numstudents)* 100

    let mastery2 = lessonmasteryall.filter(function(lesson) {
      return lesson === 2
    })

    let newmastery2 = (mastery2.length/numstudents)* 100

    let mastery3 = lessonmasteryall.filter(function(lesson) {
      return lesson === 3
    })

    let newmastery3 = (mastery3.length/numstudents)* 100
    
    this.setState({
      series: [0, newmastery1, newmastery2, newmastery3]
    })
  }

  render() {
    console.log(this.props.standards.lessons)

    console.log(this.props.standards.lessons.map(lesson => lesson.mastery))
    let lessonmasteryall = this.props.standards.lessons.map(lesson => lesson.mastery)

    console.log(lessonmasteryall.filter(function(lesson) {
      return lesson === 1
    }))
    
    let numstudents = this.props.students.students.length
    let mastery1 = lessonmasteryall.filter(function(lesson) {
      return lesson === 1
    })

    console.log("ans", (mastery1.length/numstudents)* 100)

    let newmastery1 = (mastery1.length/numstudents)* 100

    return (
      <Container className="donutc">
      <div className="fake"></div>
  
      <div className="donutplease">
      <div id="donut">
        <h1 className="donuthead">Student Data</h1>
        <div className="chart-wrap">
          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="donut" width="80" />
          </div>
        </div>
        <div className="actions">
          {/* <button onClick={() => this.randomize()}>RANDOMIZE</button> */}
          {/* <button onClick={() => this.appendData()}>ADD</button>
          <button onClick={() => this.removeData()}>REMOVE</button> */}
          {/* <button onClick={() => this.reset()}>MASTERED THIS STANDARD</button> */}
          <button onClick={() => this.reset()} 
              type="button" class="btn btn-black btn-rounded z-depth-1a">Calculate for this standard</button>
        </div>
      </div>
      </div>
      </Container>
    );
  }
}

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(Chart), domContainer);

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(DonutChart)