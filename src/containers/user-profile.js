import React from 'react';
import { connect } from 'react-redux'
import { getUser } from '../services/backend';
import ls from 'local-storage';
import { Header, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";



class UserProfile extends React.Component {
    // constructor(props){
    //     super(props)
        
    // }
   
componentDidMount() {
    getUser().then(data => this.props.dispatch({
        type: 'GET_USER',
        data
    }));
}


handleLogout = (e) => {
    ls.remove('jwt')
    this.props.dispatch({type: 'LOGOUT'})
}

render() {
    console.log("USER", this.props.user.user.username)
    const {username, name, school, img_url} = this.props.user.user
    return(
        <div>
            <MDBCard className="my-5 px-1 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Teacher Profile
          </h2>
          <Image className="userpic" circular src={img_url} width="200"/> 
            <p className="name">{name}</p>                 
            <p className="username">{username}</p>
            <p className="school">{school}</p>
          <p className="grey-text w-responsive mx-auto mb-5"></p>
        </MDBCardBody>
      </MDBCard>   
       </div>
    )
} }


const mapStateToProps = (state) => state
    

export default connect(mapStateToProps)(UserProfile)