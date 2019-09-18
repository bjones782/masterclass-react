import React from 'react';
import { connect } from 'react-redux'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBCardGroup } from "mdbreact";
import { getStudentStandards } from '../services/backend';
import { NavLink } from 'react-router-dom';



class Student extends React.Component{

    componentDidMount() {
        getStudentStandards(this.props.id).then(data => {
            return this.props.dispatch({
            type: 'GET_STUDENT_STANDARDS',
            data
          })});
    }


 render(){
   
    return (
        <MDBContainer   >
            <MDBCardGroup>
          <MDBCard className="text-center" style={{ width: "22rem", marginTop: "1rem" }}  >
            <MDBCardBody className="text-primary">
              <MDBCardTitle>{this.props.name}</MDBCardTitle>
              <MDBCardTitle  tag="h6" sub className="mb-2 text-muted">
                <strong>Mastered Standards</strong>
              </MDBCardTitle>
              <MDBCardText >
                {this.props.standards.map(standard => {
                    if(standard.masterylevel === 1)
                    return <li><NavLink to="/">{standard.notation}</NavLink></li>
                })}
              </MDBCardText>
              <a href="#!" className="card-link">
                Panel link
              </a>
              <a href="#!" className="card-link">
                Another link
              </a>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="text-center" style={{ width: "22rem", marginTop: "1rem" }}  >
            <MDBCardBody className="text-primary">
              <MDBCardTitle>{this.props.name}</MDBCardTitle>
              <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
              <strong>Almost</strong>
              </MDBCardTitle>
              <MDBCardText >
              {this.props.standards.map(standard => {
                    if(standard.masterylevel === 2)
                    return <li><NavLink to="/">{standard.notation}</NavLink></li>
                })}
              </MDBCardText>
              <a href="#!" className="card-link">
                Panel link {console.log("HERE", this.props.standards.map(standard => {return standard}))}
              </a>
              <a href="#!" className="card-link">
                Another link
              </a>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="text-center" style={{ width: "22rem", marginTop: "1rem" }}  >
            <MDBCardBody className="text-primary">
              <MDBCardTitle>{this.props.name}</MDBCardTitle>
              <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
              <strong>Not Yet</strong>
              </MDBCardTitle>
              <MDBCardText >
              {this.props.standards.map(standard => {
                    if(standard.masterylevel === 3)
                    return <li><NavLink to="/">{standard.notation}</NavLink></li>
                })}
              </MDBCardText>
              <a href="#!" className="card-link">
                Panel link
              </a>
              <a href="#!" className="card-link">
                Another link
              </a>
            </MDBCardBody>
          </MDBCard>
          </MDBCardGroup>
        </MDBContainer>
        );
 }

}

// const mapStateToProps = (state) => state
//     studentStandards: state
// })

export default connect()(Student) 

