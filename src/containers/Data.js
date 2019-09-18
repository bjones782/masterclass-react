// import { ResponsivePie } from '@nivo/pie'
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import '../node_modules/react-vis/dist/style.css';
import {RadialChart} from 'react-vis';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup, MDBContainer, MDBCardFooter, MDBCardHeader } from "mdbreact";
import { ProgressBar, Container } from 'react-bootstrap'


class Data extends React.Component {
  constructor(props){
    super(props)
    

    this.state = {
      isClicked: false
    }
}

  handleIsClicked = (e) => {
    this.setState({isClicked: !this.state.isClicked})
  }


    render() {
      console.log("STD", this.props.standards.standards.length)
      console.log("STDS", this.props.standards.lessons)
        let lessonmasteryall = this.props.standards.lessons.map(lesson => lesson.mastery)
        //retreive by standard_id
        let standardID = this.props.standards.lessons.map(lesson => lesson.standard_id)
       
        let standardOA1 = standardID.filter(function(lesson) {
            return lesson === 13
        }) 

        let standardOA2 = standardID.filter(function(lesson) {
            return lesson === 14
        }) 

        let standardOA3 = standardID.filter(function(lesson) {
            return lesson === 15
        }) 

        let standardOAB4 = standardID.filter(function(lesson) {
            return lesson === 16
        }) 

        let standardOAC5 = standardID.filter(function(lesson) {
            return lesson === 17
        })

        let standardNBTA1 = standardID.filter(function(lesson) {
            return lesson === 18
        }) 

        let standardNBTA2 = standardID.filter(function(lesson) {
            return lesson === 19
        }) 

        let standardNBTA3 = standardID.filter(function(lesson) {
            return lesson === 20
        }) 

        let standardNBTB4 = standardID.filter(function(lesson) {
            return lesson === 21
        }) 

        let standardNBTC5 = standardID.filter(function(lesson) {
            return lesson === 22
        })

        let standardNF1 = standardID.filter(function(lesson) {
            return lesson === 23
        })

        let standardNF2 = standardID.filter(function(lesson) {
          return lesson === 24
        })

        let standardNF3 = standardID.filter(function(lesson) {
          return lesson === 25
        })

        let standardNF4 = standardID.filter(function(lesson) {
          return lesson === 26
        })

        let standardNF5 = standardID.filter(function(lesson) {
          return lesson === 27
        })

        let standardMD1 = standardID.filter(function(lesson) {
          return lesson === 28
        })

        let standardMD2 = standardID.filter(function(lesson) {
          return lesson === 29
        })

        let standardMD3 = standardID.filter(function(lesson) {
          return lesson === 30
        })

        let standardMD4 = standardID.filter(function(lesson) {
          return lesson === 31
        })

        let standardMD5 = standardID.filter(function(lesson) {
          return lesson === 32
        })

        let standardG1 = standardID.filter(function(lesson) {
          return lesson === 33
        })

        let standardG2 = standardID.filter(function(lesson) {
          return lesson === 34
        })

        let standardG3 = standardID.filter(function(lesson) {
          return lesson === 35
        })


        //retreive by mastery level
        console.log("mastery", this.props.standards.lessons)
        let masterOA1 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 13) && v.mastery == 1);
        })
        let almostOA1 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 13) && v.mastery == 2);
        })
        let notyetOA1 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 13) && v.mastery == 3);
        })


        let masterOA2 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 14) && v.mastery == 1);
        })
        let almostOA2 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 14) && v.mastery == 2);
        })
        let notyetOA2 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 14) && v.mastery == 3);
        })


        let masterOA3 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 15) && v.mastery == 1);
        })
        let almostOA3 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 15) && v.mastery == 2);
        })
        let notyetOA3 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 15) && v.mastery == 3);
        })


        let masterOAB4 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 16) && v.mastery == 1);
        })
        let almostOAB4 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 16) && v.mastery == 2);
        })
        let notyetOAB4 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 16) && v.mastery == 3);
        })


        let masterOAC5 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 17) && v.mastery == 1);
        })
        let almostOAC5 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 17) && v.mastery == 2);
        })
        let notyetOAC5 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 17) && v.mastery == 3);
        })


        let masterNBTA1 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 18) && v.mastery == 1);
        })
        let almostNBTA1 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 18) && v.mastery == 2);
        })
        let notyetNBTA1 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 18) && v.mastery == 3);
        })


        let masterNBTA2 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 19) && v.mastery == 1);
        })
        let almostNBTA2 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 19) && v.mastery == 2);
        })
        let notyetNBTA2 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 19) && v.mastery == 3);
        })


        let masterNBTA3 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 20) && v.mastery == 1);
        })
        let almostNBTA3 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 20) && v.mastery == 2);
        })
        let notyetNBTA3 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 20) && v.mastery == 3);
        })


        let masterNBTB4 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 21) && v.mastery == 1);
        })
        let almostNBTB4 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 21) && v.mastery == 2);
        })
        let notyetNBTB4 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 21) && v.mastery == 3);
        })


        let masterNBTC5 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 22) && v.mastery == 1);
        })
        let almostNBTC5 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 22) && v.mastery == 2);
        })
        let notyetNBTC5 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 22) && v.mastery == 3);
        })


        let masterNF1 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 23) && v.mastery == 1);
        })
        let almostNF1 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 23) && v.mastery == 2);
        })
        let notyetNF1 = this.props.standards.lessons.filter(function(v, i) {
            return ((v["standard_id"] == 23) && v.mastery == 3);
        })



        let masterNF2 = this.props.standards.lessons.filter(function(v, i) {
           return ((v["standard_id"] == 24) && v.mastery == 1);
        })
        let almostNF2 = this.props.standards.lessons.filter(function(v, i) {
           return ((v["standard_id"] == 24) && v.mastery == 2);
        })
        let notyetNF2 = this.props.standards.lessons.filter(function(v, i) {
           return ((v["standard_id"] == 24) && v.mastery == 3);
        })



        let masterNF3 = this.props.standards.lessons.filter(function(v, i) {
         return ((v["standard_id"] == 25) && v.mastery == 1);
        })
        let almostNF3 = this.props.standards.lessons.filter(function(v, i) {
         return ((v["standard_id"] == 25) && v.mastery == 2);
        })
        let notyetNF3 = this.props.standards.lessons.filter(function(v, i) {
         return ((v["standard_id"] == 25) && v.mastery == 3);
        })



        let masterNF4 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 26) && v.mastery == 1);
        })
        let almostNF4 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 26) && v.mastery == 2);
        })
        let notyetNF4 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 26) && v.mastery == 3);
        })


        let masterNF5 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 27) && v.mastery == 1);
        })
        let almostNF5 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 27) && v.mastery == 2);
        })
        let notyetNF5 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 27) && v.mastery == 3);
        })


        let masterMD1 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 28) && v.mastery == 1);
        })
        let almostMD1 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 28) && v.mastery == 2);
        })
        let notyetMD1 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 28) && v.mastery == 3);
        })


        let masterMD2 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 29) && v.mastery == 1);
        })
        let almostMD2 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 29) && v.mastery == 2);
        })
        let notyetMD2 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 29) && v.mastery == 3);
        })


        let masterMD3 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 30) && v.mastery == 1);
        })
        let almostMD3 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 30) && v.mastery == 2);
        })
        let notyetMD3 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 30) && v.mastery == 3);
        })


        let masterMD4 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 31) && v.mastery == 1);
        })
        let almostMD4 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 31) && v.mastery == 2);
        })
        let notyetMD4 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 31) && v.mastery == 3);
        })


        let masterMD5 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 32) && v.mastery == 1);
        })
        let almostMD5 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 32) && v.mastery == 2);
        })
        let notyetMD5 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 32) && v.mastery == 3);
        })


        let masterG1 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 33) && v.mastery == 1);
        })
        let almostG1 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 33) && v.mastery == 2);
        })
        let notyetG1 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 33) && v.mastery == 3);
        })


        let masterG2 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 34) && v.mastery == 1);
        })
        let almostG2 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 34) && v.mastery == 2);
        })
        let notyetG2 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 34) && v.mastery == 3);
        })


        let masterG3 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 35) && v.mastery == 1);
        })
        let almostG3 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 35) && v.mastery == 2);
        })
        let notyetG3 = this.props.standards.lessons.filter(function(v, i) {
          return ((v["standard_id"] == 35) && v.mastery == 3);
        })
 
 

        
        //final result average for chart
        let resultMasteredAO1 = (masterOA1.length/standardOA1.length)*100
        let resultAlmostAO1 = (almostOA1.length/standardOA1.length)*100
        let resultNotYetAO1 = (notyetOA1.length/standardOA1.length)*100
        console.log("result", resultAlmostAO1)

        let resultMasteredAO2 = (masterOA2.length/standardOA2.length)*100
        let resultAlmostAO2 = (almostOA2.length/standardOA2.length)*100
        let resultNotYetAO2 = (notyetOA2.length/standardOA2.length)*100

        let resultMasteredAO3 = (masterOA3.length/standardOA3.length)*100
        let resultAlmostAO3 = (almostOA3.length/standardOA3.length)*100
        let resultNotYetAO3 = (notyetOA3.length/standardOA3.length)*100

        let resultMasteredAOB4 = (masterOAB4.length/standardOAB4.length)*100
        let resultAlmostAOB4 = (almostOAB4.length/standardOAB4.length)*100
        let resultNotYetAOB4 = (notyetOAB4.length/standardOAB4.length)*100

        let resultMasteredAOC5 = (masterOAC5.length/standardOAC5.length)*100
        let resultAlmostAOC5 = (almostOAC5.length/standardOAC5.length)*100
        let resultNotYetAOC5 = (notyetOAC5.length/standardOAC5.length)*100

        let resultMasteredNBTA1 = (masterNBTA1.length/standardNBTA1.length)*100
        let resultAlmostNBTA1 = (almostNBTA1.length/standardNBTA1.length)*100
        let resultNotYetNBTA1 = (notyetNBTA1.length/standardNBTA1.length)*100

        let resultMasteredNBTA2 = (masterNBTA2.length/standardNBTA2.length)*100
        let resultAlmostNBTA2 = (almostNBTA2.length/standardNBTA2.length)*100
        let resultNotYetNBTA2 = (notyetNBTA2.length/standardNBTA2.length)*100

        let resultMasteredNBTA3 = (masterNBTA3.length/standardNBTA3.length)*100
        let resultAlmostNBTA3 = (almostNBTA3.length/standardNBTA3.length)*100
        let resultNotYetNBTA3 = (notyetNBTA3.length/standardNBTA3.length)*100

        let resultMasteredNBTB4 = (masterNBTB4.length/standardNBTB4.length)*100
        let resultAlmostNBTB4 = (almostNBTB4.length/standardNBTB4.length)*100
        let resultNotYetNBTB4 = (notyetNBTB4.length/standardNBTB4.length)*100

        let resultMasteredNBTC5 = (masterNBTC5.length/standardNBTC5.length)*100
        let resultAlmostNBTC5 = (almostNBTC5.length/standardNBTC5.length)*100
        let resultNotYetNBTC5 = (notyetNBTC5.length/standardNBTC5.length)*100

        let resultMasteredNF1 = (masterNF1.length/standardNF1.length)*100
        let resultAlmostNF1 = (almostNF1.length/standardNF1.length)*100
        let resultNotYetNF1 = (notyetNF1.length/standardNF1.length)*100

        let resultMasteredNF2 = (masterNF2.length/standardNF2.length)*100
        let resultAlmostNF2 = (almostNF2.length/standardNF2.length)*100
        let resultNotYetNF2 = (notyetNF2.length/standardNF2.length)*100

        let resultMasteredNF3 = (masterNF3.length/standardNF3.length)*100
        let resultAlmostNF3 = (almostNF3.length/standardNF3.length)*100
        let resultNotYetNF3 = (notyetNF3.length/standardNF3.length)*100

        let resultMasteredNF4 = (masterNF4.length/standardNF4.length)*100
        let resultAlmostNF4 = (almostNF4.length/standardNF4.length)*100
        let resultNotYetNF4 = (notyetNF4.length/standardNF4.length)*100

        let resultMasteredNF5 = (masterNF5.length/standardNF5.length)*100
        let resultAlmostNF5 = (almostNF5.length/standardNF5.length)*100
        let resultNotYetNF5 = (notyetNF5.length/standardNF5.length)*100

        let resultMasteredMD1 = (masterMD1.length/standardMD1.length)*100
        let resultAlmostMD1 = (almostMD1.length/standardMD1.length)*100
        let resultNotYetMD1 = (notyetMD1.length/standardMD1.length)*100

        let resultMasteredMD2 = (masterMD2.length/standardMD2.length)*100
        let resultAlmostMD2 = (almostMD2.length/standardMD2.length)*100
        let resultNotYetMD2 = (notyetMD2.length/standardMD2.length)*100

        let resultMasteredMD3 = (masterMD3.length/standardMD3.length)*100
        let resultAlmostMD3 = (almostMD3.length/standardMD3.length)*100
        let resultNotYetMD3 = (notyetMD3.length/standardMD3.length)*100

        let resultMasteredMD4 = (masterMD4.length/standardMD4.length)*100
        let resultAlmostMD4 = (almostMD4.length/standardMD4.length)*100
        let resultNotYetMD4 = (notyetMD4.length/standardMD4.length)*100

        let resultMasteredMD5 = (masterMD5.length/standardMD5.length)*100
        let resultAlmostMD5 = (almostMD5.length/standardMD5.length)*100
        let resultNotYetMD5 = (notyetMD5.length/standardMD5.length)*100

        let resultMasteredG1 = (masterG1.length/standardG1.length)*100
        let resultAlmostG1 = (almostG1.length/standardG1.length)*100
        let resultNotYetG1 = (notyetG1.length/standardG1.length)*100

        let resultMasteredG2 = (masterG2.length/standardG2.length)*100
        let resultAlmostG2 = (almostG2.length/standardG2.length)*100
        let resultNotYetG2 = (notyetG2.length/standardG2.length)*100

        let resultMasteredG3 = (masterG3.length/standardG3.length)*100
        let resultAlmostG3 = (almostG3.length/standardG3.length)*100
        let resultNotYetG3 = (notyetG3.length/standardG3.length)*100

        //calculate for all standards
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

        //calculate for all standards above


        //set data for the charts
        const myData = [{angle: newmastery1}, {angle: newmastery2}, {angle: newmastery3}]
        const AO1 = [{angle: resultMasteredAO1}, {angle: resultAlmostAO1}, {angle: resultNotYetAO1}]
        const AO2 = [{angle: resultMasteredAO2}, {angle: resultAlmostAO2}, {angle: resultNotYetAO2}]
        const AO3 = [{angle: resultMasteredAO3}, {angle: resultAlmostAO3}, {angle: resultNotYetAO3}]
        const AOB4 = [{angle: resultMasteredAOB4}, {angle: resultAlmostAOB4}, {angle: resultNotYetAOB4}]
        const AOC5 = [{angle: resultMasteredAOC5}, {angle: resultAlmostAOC5}, {angle: resultNotYetAOC5}]
        const NBTA1 = [{angle: resultMasteredNBTA1}, {angle: resultAlmostNBTA1}, {angle: resultNotYetNBTA1}]
        const NBTA2 = [{angle: resultMasteredNBTA2}, {angle: resultAlmostNBTA2}, {angle: resultNotYetNBTA2}]
        const NBTA3 = [{angle: resultMasteredNBTA3}, {angle: resultAlmostNBTA3}, {angle: resultNotYetNBTA3}]
        const NBTB4 = [{angle: resultMasteredNBTB4}, {angle: resultAlmostNBTB4}, {angle: resultNotYetNBTB4}]
        const NBTC5 = [{angle: resultMasteredNBTC5}, {angle: resultAlmostNBTC5}, {angle: resultNotYetNBTC5}]
        const NF1 = [{angle: resultMasteredNF1}, {angle: resultAlmostNF1}, {angle: resultNotYetNF1}]
        const NF2 = [{angle: resultMasteredNF2}, {angle: resultAlmostNF2}, {angle: resultNotYetNF2}]
        const NF3 = [{angle: resultMasteredNF3}, {angle: resultAlmostNF3}, {angle: resultNotYetNF3}]
        const NF4 = [{angle: resultMasteredNF4}, {angle: resultAlmostNF4}, {angle: resultNotYetNF4}]
        const NF5 = [{angle: resultMasteredNF5}, {angle: resultAlmostNF5}, {angle: resultNotYetNF4}]
        const MD1 = [{angle: resultMasteredMD1}, {angle: resultAlmostMD1}, {angle: resultNotYetMD1}]
        const MD2 = [{angle: resultMasteredMD2}, {angle: resultAlmostMD2}, {angle: resultNotYetMD2}]
        const MD3 = [{angle: resultMasteredMD3}, {angle: resultAlmostMD3}, {angle: resultNotYetMD3}]
        const MD4 = [{angle: resultMasteredMD4}, {angle: resultAlmostMD4}, {angle: resultNotYetMD4}]
        const MD5 = [{angle: resultMasteredMD5}, {angle: resultAlmostMD5}, {angle: resultNotYetMD5}]
        const G1 = [{angle: resultMasteredG1}, {angle: resultAlmostG1}, {angle: resultNotYetG1}]
        const G2 = [{angle: resultMasteredG2}, {angle: resultAlmostG2}, {angle: resultNotYetG2}]
        const G3 = [{angle: resultMasteredG3}, {angle: resultAlmostG3}, {angle: resultNotYetG3}]
        
        
        return (
          <div>
         
            <div className="text-center2">
                <h1 className="classheader" style={{ textAlign: 'center' }}>Data By Standard</h1>
            <div>

            <div className="datacard">
            <MDBCard border="danger" style={{ maxWidth: "25rem" }}>
    <MDBCardBody className="text-danger">
      <MDBCardTitle tag="h5">Mastery for All Standards</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={myData}
        width={400}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  
            </div><br></br>
            <Container className="progressbar">
              <h6>Total standard mastery for the year:</h6>
            <ProgressBar now={((mastery1.length/this.props.standards.standards.length)*100)} label={`${Math.round(((mastery1.length/this.props.standards.standards.length))*100)}%`} >
            {/* <ProgressBar> */}
            {/* <ProgressBar striped variant="success" now={((mastery1.length/this.props.standards.standards.length)*100)} key={1} label={`${Math.round(((mastery1.length/this.props.standards.standards.length))*100)}%`}/>
            <ProgressBar variant="warning" now={((mastery2.length/this.props.standards.standards.length)*100)} key={2} label={`${Math.round(((mastery2.length/this.props.standards.standards.length))*100)}%`}/>
            <ProgressBar striped variant="danger" now={((mastery3.length/this.props.standards.standards.length)*100)} key={3} label={`${Math.round(((mastery3.length/this.props.standards.standards.length))*100)}%`}/> */}
            </ProgressBar>
            </Container>
            
            <br></br>
            
<div className="datasection">
<MDBContainer>
<MDBCardGroup deck>
  <MDBCard border="success" style={{ maxWidth: "15rem" }}>
    <MDBCardHeader transparent border="success">
    Operations & Algebraic Thinking
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle className="datacardtext" tag="h5">4.OA.A.1</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={AO1}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Interpret a multiplication equation as a comparison
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "15rem" }}>
    <MDBCardHeader transparent border="success">
    Operations & Algebraic Thinking
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.OA.A.2</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={AO2}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Multiply or divide to solve word problems
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "15rem" }}>
    <MDBCardHeader transparent border="success">
    Operations & Algebraic Thinking
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.OA.A.3</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={AO3}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Solve multistep word problems
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "20rem" }}>
    <MDBCardHeader transparent border="success">
    Operations & Algebraic Thinking
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.OA.B.4</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={AOB4}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Find factor pairs for a whole number
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "20rem" }}>
    <MDBCardHeader transparent border="success">
    Operations & Algebraic Thinking
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.OA.C.5</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={AOC5}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Generate a number or shape pattern
    </MDBCardFooter>
  </MDBCard>
</MDBCardGroup>
</MDBContainer>
</div>
<br></br>
<div className="datasection">
<MDBContainer>
<MDBCardGroup deck>
  <MDBCard border="success" style={{ maxWidth: "15rem" }}>
    <MDBCardHeader transparent border="success">
    Number & Operations in Base Ten
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.NBT.A.1</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={NBTA1}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    A digit in one place represents ten times more than the digit to its right
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "15rem" }}>
    <MDBCardHeader transparent border="success">
    Number & Operations in Base Ten
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.NBT.A.2</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={NBTA2}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Read and write multi-digit whole numbers using base-ten numerals
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "15rem" }}>
    <MDBCardHeader transparent border="success">
    Number & Operations in Base Ten
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.NBT.A.3</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={NBTA3}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Use place value understanding to round multi-digit whole numbers
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "20rem" }}>
    <MDBCardHeader transparent border="success">
    Number & Operations in Base Ten
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.NBT.B.4</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={NBTB4}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Fluently add and subtract multi-digit whole numbers
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "20rem" }}>
    <MDBCardHeader transparent border="success">
    Number & Operations in Base Ten
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.NBT.C.5</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={NBTC5}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Multiply a whole number of up to four digits
    </MDBCardFooter>
  </MDBCard>
</MDBCardGroup>
</MDBContainer>
</div>
<br></br>
<div className="datasection">
<MDBContainer>
<MDBCardGroup deck>
  <MDBCard border="success" style={{ maxWidth: "15rem" }}>
    <MDBCardHeader transparent border="success">
      Number & Operations - Fractions
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.NF.A.1</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={NF1}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Explain why a fraction a/b is equivalent to a fraction (n × a)/(n × b)
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "15rem" }}>
    <MDBCardHeader transparent border="success">
    Number & Operations - Fractions
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.NF.A.2</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={NF2}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Compare two fractions with different numerators
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "15rem" }}>
    <MDBCardHeader transparent border="success">
    Number & Operations - Fractions
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.NF.A.3</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={NF3}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    A fraction a/b with a > 1 as a sum of fractions 1/b
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "20rem" }}>
    <MDBCardHeader transparent border="success">
    Number & Operations - Fractions
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.NF.B.4</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={NF4}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Multiply a fraction by a whole number
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "20rem" }}>
    <MDBCardHeader transparent border="success">
    Number & Operations - Fractions
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.NF.C.5</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={NF5}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Express a fraction as an equivalent fraction
    </MDBCardFooter>
  </MDBCard>

</MDBCardGroup>
</MDBContainer>
</div>
<br></br>
<div className="datasection">
<MDBContainer>
<MDBCardGroup deck>
  <MDBCard border="success" style={{ maxWidth: "15rem" }}>
    <MDBCardHeader transparent border="success">
    Measurement & Data
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.MD.1</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={MD1}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Know relative sizes of measurement units
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "15rem" }}>
    <MDBCardHeader transparent border="success">
    Measurement & Data
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.MD.2</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={MD2}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Use the four operations to solve word problems 
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "15rem" }}>
    <MDBCardHeader transparent border="success">
    Measurement & Data
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.MD.3</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={MD3}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Apply the area and perimeter formulas for rectangles
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "20rem" }}>
    <MDBCardHeader transparent border="success">
    Measurement & Data
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.MD.4</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={MD4}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Make a line plot to display a data set of measurements in fractions of a unit
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "20rem" }}>
    <MDBCardHeader transparent border="success">
    Measurement & Data
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.MD.C.5</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={MD5}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Recognize angles as geometric shapes
    </MDBCardFooter>
  </MDBCard>

</MDBCardGroup>
</MDBContainer>
</div>

<br></br>
<div className="datasection">
<MDBContainer>
<MDBCardGroup deck>
  <MDBCard border="success" style={{ maxWidth: "15rem" }}>
    <MDBCardHeader transparent border="success">
    Geometry
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.G.1</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={G1}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Draw points, lines, line segments, rays, angles
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "15rem" }}>
    <MDBCardHeader transparent border="success">
    Geometry
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.G.2</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={G2}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Classify two-dimensional figures based on the presence or absence of parallel or perpendicular lines 
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "15rem" }}>
    <MDBCardHeader transparent border="success">
    Geometry
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.G.3</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={G3}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Recognize a line of symmetry for a two-dimensional figure 
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "20rem" }}>
    <MDBCardHeader transparent border="success">
    Measurement & Data
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.MD.4</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={MD4}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Make a line plot to display a data set of measurements in fractions of a unit
    </MDBCardFooter>
  </MDBCard>

  <MDBCard border="success" style={{ maxWidth: "20rem" }}>
    <MDBCardHeader transparent border="success">
    Measurement & Data
    </MDBCardHeader>
    <MDBCardBody className="text-success">
      <MDBCardTitle tag="h5">4.MD.C.5</MDBCardTitle>
      <MDBCardText className="datacard">
      <RadialChart
        data={MD5}
        width={200}
        height={300}
        colorRange={[ '#DC143C', '#00FF7F', '#ffff66']}
         />
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="datafooter" transparent border="success">
    Recognize angles as geometric shapes
    </MDBCardFooter>
  </MDBCard>

</MDBCardGroup>
</MDBContainer>
</div>

</div>

            </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Data)