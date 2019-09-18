import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { MDBCard, MDBCardBody } from "mdbreact"


class Logout extends Component {

    handleLogout = () => {
        window.localStorage.clear()
        window.location.href = '/'
    }

    render(){
        return(
            <div className="textcenter2">
            <div align="center">
                
            <MDBCard className="my-5 px-1 pb-5 text-center">
                <h1 className="bye">Goodbye...</h1>
                 <MDBCardBody>
                 
                <container>
                <iframe src="https://giphy.com/embed/1Rl9cWS6JYrDKIcPHE" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/CMNHospitals-childrens-miracle-network-hospitals-kid-pediatric-patients-1Rl9cWS6JYrDKIcPHE"></a></p>
                <button onClick={this.handleLogout} type="button" className="btn btn-black btn-lg btn-rounded z-depth-1a">Log Out</button>
                </container>
                </MDBCardBody>
            </MDBCard>       
            </div>
            </div>
        )
    }
}


export default connect()(withRouter(Logout));
