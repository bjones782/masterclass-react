import React from 'react';
import { connect } from 'react-redux'
import { getStudentStandards } from '../services/backend';
import { deleteStudent } from '../services/backend';
import { fetchStudentData } from '../services/backend'
import {  MDBCol, MDBCard, MDBCardBody,  MDBCardText, MDBCardHeader, MDBMedia, MDBContainer, MDBBtn, MDBCardTitle } from "mdbreact";
import { NavLink } from 'react-router-dom';
import Test from '../components/Test';
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { Form } from 'semantic-ui-react'
import { Segment, List, Grid } from 'semantic-ui-react'
import CommentCard from '../components/CommentCard'
import Chart from 'react-apexcharts'
import { Container, Card } from 'react-bootstrap'
import { Pie } from "react-chartjs-2";
import ReactApexChart from 'react-chartjs-2';



class MyClass extends React.Component{
  state = {
    comments: null,
    content: "",
    toggleComments: false,
    name: "",
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
            width: 20
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
          position: 'right',
          offsetY: 0,
          height: 130,
      }
    },
    series: [55, 2, 1],
    plotOptions: {
      pie: {
        size: 20
          }}
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

  componentDidMount() {
      getStudentStandards(this.props.id).then(data => {
          return this.props.dispatch({
          type: 'GET_STUDENT_STANDARDS',
          data
        })});
  }

handleCommentChange = (e) => {
  this.setState({name: e.target.name, content: e.target.value})
  console.log("id", e.target.name)
  
}


createComment = (e) => {
  e.preventDefault()
  
  fetch("http://localhost:3000/comments", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          content: this.state.content
      })
  })
  // .then(data => {
  //   console.log(data)
  //   window.location.assign('/myclass')})
    .then((data) => {
      console.log('raza', data)
      this.props.fetchStudentData()
    })
}




  handleDelete = (e, s) => {
    return fetch(`http://localhost:3000/students/${s.id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    }).then((data) => {
        console.log("delete", data)
        this.props.fetchStudentData()
      })
      .then(alert('Student removed from class'))
      .catch(function(error){
        console.log("catch statement", error)
      })
  }

    handleCommentDelete = (e, comment) => {
      console.log("comment",e, comment)
      return fetch(`http://localhost:3000/comments/${comment.id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    }).then((data) => {
        console.log("delete", data)
        this.props.fetchStudentData()
      })
      .catch(function(error){
        console.log("catch statement", error)
      })
    }



render(){
  
  let please = this.props.students.students.map(s => s.standards.slice(-1)[0])
  // console.log("NOTE", please.map(s => s))
  let note = this.props.standards.standards.map(standard => standard.id)
  let commentsarr = this.props.students["comments"]
  let commentid = commentsarr.map(comment => comment.id)
  let commentids = commentsarr.map(comment => comment)
  let studentid = this.props.students.students.map(s => s.id)
  let filtered = commentsarr.filter(comment => comment)
  let refiltered = filtered.map(comment => comment.content)

  let lessonmasteryall = this.props.standards.lessons.map(lesson => lesson.mastery)
  let numstudents = this.props.students.students.length
  let mastery1 = lessonmasteryall.filter(function(lesson) {
    return lesson === 1
  })

  let mapped = this.props.students.students.map(s => s)
  let mapped2 = mapped.map(s => s.standards)

  let mappedstds = this.props.students.students.map(s => s.standards)
  let mappedagain = mappedstds.map(s => s)
  

  // console.log("ans", (mastery1.length/numstudents)* 100)

  let newmastery1 = (mastery1.length/numstudents)* 100

  const { content } = this.state

  // console.log("friday", this.props.standards.lessons.map(lesson => lesson.standard_id))
  let lessonsID = this.props.standards.lessons.map(lesson => lesson.standard_id)
  console.log("note", note)
  console.log(this.props.students.students)
  // console.log(this.props.students.comments.map)
  return (
        
        <div className="text-center">
       <span className="classheader"> My Students</span>  
      <div>
        <div id="header"></div>
          <div id="container">
            <div>
            <MDBCard className="classcardhead" border="success">
            <MDBCardBody>
            <MDBCardTitle className="commentcardhead">Student Misconceptions</MDBCardTitle>
            {(this.props.students.comments.map(comment => <MDBCardText className="commentcardtext"><li>{comment.content}<button onClick={(e) => this.handleCommentDelete(e, comment)} type="button" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button></li></MDBCardText>
              ))}
              <input id="input" value={this.state.content} type="text" placeholder="add a note..." onChange={this.handleCommentChange}/>
               {/* <MDBBtn onClick={(e) => this.createComment(e)} color="primary">add comment</MDBBtn> */}
               <NavLink onClick={(e) => this.createComment(e)} to="/login" className="btn btn-sm">ADD</NavLink>
              </MDBCardBody>
          </MDBCard> 
          </div>
            
            
        </div>
        </div>

        <br></br>
        <br></br>

          <body>
          
             <div className="studentcontainer" >
              <div className="row">
                {this.props.students.students.map(s => <MDBCard className="studentcard" id={s.id} key={s.id} {...s} handleSave={this.props.handleSave} handleSave2={this.props.handleSave2} handleSave3={this.props.handleSave3}>
                    <MDBCardBody>
                    <MDBCardTitle className="studenttitle">{s.name}</MDBCardTitle>
                    <p className="cardtextm">Mastered:</p>
                {this.props.standards.lessons.map(lesson => {
                    if(lesson.mastery === 1 && lesson.student_id === s.id)
                    return s.standards.map(standard => (<li className="list">{standard.notation}</li>))
                    // return <li className="list"><NavLink to="/">{s.standards.map(standard => standard.notation)}</NavLink></li>
                    })} {console.log("YAY", s.standards.map(standard => standard))}
                    <p className="cardtexta">Almost:</p>
               {this.props.standards.lessons.map(lesson => {
                    if(lesson.mastery === 2 && lesson.student_id === s.id)
                    return s.standards.map(standard => (<li className="list">{standard.notation}</li>))
                    })}
                     <p className="cardtextn">Not Yet:</p>
               {this.props.standards.lessons.map(lesson => {
                    if(lesson.mastery === 3 && lesson.student_id === s.id)
                    return s.standards.map(standard => (<li className="list">{standard.notation}</li>))
                    // return <li className="list" ><NavLink to="/">{s.standards.map(standard => standard.notation)}</NavLink></li>
                    })}<br></br>
                    
                    {/* <button className="btn-xs" onClick={(e) => this.handleDelete(e, s)}>x</button> */}
                    </MDBCardBody>
                    <button onClick={(e) => this.handleDelete(e, s)} type="button" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </MDBCard>)}
              </div>
            </div>
          </body>

  </div>
  
    )
  }
}

  const mapStateToProps = (state) => state

  // const mapDispatchToProps = dispatch => ({
  //   deleteStudent: id => dispatch(deleteStudent(id)),
  // });

  
  export default connect(mapStateToProps)(MyClass)

