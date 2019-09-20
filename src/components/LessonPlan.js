import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Form, Row, Col, Control, Container, Image } from 'react-bootstrap'
import { fetchStudentData } from '../services/backend';





class LessonPlan extends React.Component {
    constructor(props){
        super(props)

        this.state={
            topic: "",
            objective: "",
            direct: "",
            guided: "",
            independent: "",
            cfu: ""
          }
    }

    // functionName() {
    //     browserHistory.push("/path-to-link");
    // }

    handleTopicChange = (e) => {
        this.setState({topic: e.target.value})
        console.log(e.target.value)
   }

    handleObjectiveChange = (e) => {
      this.setState({objective: e.target.value})
      console.log(e.target.value)
   }

    handleDIChange = (e) => {
    this.setState({direct: e.target.value})
    console.log(e.target.value)
    }

    handleGPChange = (e) => {
      this.setState({guided: e.target.value})
      console.log(e.target.value)
    }

    handleIPChange = (e) => {
      this.setState({independent: e.target.value})
      console.log(e.target.value)
    }

    handleCFUChange = (e) => {
      this.setState({cfu: e.target.value})
      console.log(e.target.value)
    }

    

    handlePlanSubmit = (e) => {
      
      e.preventDefault()
      this.props.dispatch({type: 'ADD_PLAN', 
      topic: this.state.topic, 
      objective: this.state.objective,
      direct: this.state.direct,
      guided: this.state.guided,
      independent: this.state.independent,
      cfu: this.state.cfu
     })

      const newPlan = {plan: {
        topic: this.state.topic, 
        objective: this.state.objective,
        direct: this.state.direct,
        guided: this.state.guided,
        independent: this.state.independent,
        cfu: this.state.cfu}}
      
      fetch("https://cors-anywhere.herokuapp.com/https://masterclass-backend.herokuapp.com/plans/", {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newPlan)
      })
      .then(res => res.json())
      // .then(data => {
      //   console.log(data)
      //   window.location.assign('/')})
      .then((data) => {
          console.log('raza', data)
          this.props.fetchStudentData()
        })
        .then(data => {
          console.log(data)
          window.location.assign('/lessonplanlist')})
    }


   render () {

    const { topic, objective, direct, guided, independent, cfu  } = this.state
    return (
        <div >
          <span className="textcenter2">-</span>
            <h1 className="classheader" align="center">Create a Lesson Plan</h1>

            <div align="center" className="lessonplanimg">
              {/* <img src="https://www.kippmetroatlanta.org/wp-content/uploads/KWA-teacherstudents2.jpg" height="300px"/> */}
              
            
              <Image src="https://www.kippsocal.org/files/images/schools/opportunity-homepage.jpg"rounded className="rounded-pill" />
            
            </div> 
<Container className="lessonform">


<Form>
<Form.Row>
  </Form.Row>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Lesson Topic</Form.Label>
    <Form.Control onChange={this.handleTopicChange} value={topic} type="email" placeholder="" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Learning Objectives</Form.Label>
    <Form.Control onChange={this.handleObjectiveChange} value={objective} as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Direct Instruction</Form.Label>
    <Form.Control onChange={this.handleDIChange} value={direct} as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Guided Practice</Form.Label>
    <Form.Control onChange={this.handleGPChange} value={guided} as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Independent Practice</Form.Label>
    <Form.Control onChange={this.handleIPChange} value={independent} as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Check for Understanding</Form.Label>
    <Form.Control onChange={this.handleCFUChange} value={cfu} as="textarea" rows="3" />
  </Form.Group>
  <button onClick={this.handlePlanSubmit} 
 type="button" class="btn btn-black btn-rounded z-depth-1a">Save</button>
</Form>
</Container>
        </div>
        
    )
  }}

const mapStateToProps = (state) => state
  
    
export default connect(mapStateToProps)(LessonPlan)