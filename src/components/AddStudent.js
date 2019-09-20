import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';




class AddStudent extends React.Component {
    constructor(props){
        super(props)

        this.state={
            name: ""
          }
    }

    // functionName() {
    //     browserHistory.push("/path-to-link");
    // }

    handleStudentChange = (e) => {
        this.setState({name: e.target.value})
        console.log(e.target.value)
    }


    handleStudentSubmit = (e) => {
      
      e.preventDefault()
      this.props.dispatch({type: 'ADD_STUDENT', name: this.state.name})
      const newStudent = {student: {name: this.state.name, almost: false, notyet: false, mastered: false, user_id: 1}}
      
      fetch("https://cors-anywhere.herokuapp.com/https://masterclass-backend.herokuapp.com/students", {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newStudent)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        window.location.assign('/myclass')})
    }


   render () {
    return (
      
      <div className="bg">
        <div className="form" >
        <div id="background">
            <section className="form-gradient">
            <span className="classheader"> Add a Student</span>  


<div className="card" >

 
  <div className="textcenter2">

    <div className="row d-flex justify-content-center">
      <h3 className="black-text mb-3 pt-3 font-weight-bold">Student Name</h3>
    </div>
    <div className="row mt-2 mb-3 d-flex justify-content-center">
    
      {/* <i class="fas fa-user-plus white-text fa-lg"></i> */}
      
    </div>

  </div>
  <div class="card-body mx-4 mt-4">
    <div class="md-form">
    <i class="fa fa-user prefix grey-text"></i>
      <input onChange={this.handleStudentChange} type="text" id="Form-email3" class="form-control"/>
      {/* <label for="Form-email3">Student Name</label> */}
    </div>
    <div class="row d-flex align-items-center mb-4">

      
      <div class="col-md-1 col-md-5 d-flex align-items-start">
        <div class="text-center">
          {/* <button onClick={this.handleStudentSubmit}  type="button" class="btn btn-grey btn-rounded z-depth-1a">ADD!</button> */}
          <button onClick={this.handleStudentSubmit} 
            type="button" class="btn btn-black btn-rounded z-depth-1a">ADD!</button>  
        </div>
      </div>
      
      <div class="col-md-7">
      <NavLink to="/login" class="font-small grey-text d-flex justify-content-end mt-3">Don't have an account? <a href="#"
            class="dark-grey-text ml-1 font-weight-bold"> Sign up</a></NavLink>
      </div>
    </div>
  </div>

</div>
</section>


  {/* <img src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/10481103_856695224383753_8653234673806358993_o.jpg?_nc_cat=111&_nc_oc=AQlsWviYuTcCJSoGf9llgb-Wqmxik4Cy34KGvtfwmEK9xCkCKYtC9MXgquy_VDD2wgI&_nc_ht=scontent-atl3-1.xx&oh=c711f02842d41c2199dc0040c7588000&oe=5E022E82" width="70px"/> */}
</div>

        </div>
        
        </div>
    )
  }}

const mapStateToProps = (state) => state
  
    
export default connect(mapStateToProps)(AddStudent)