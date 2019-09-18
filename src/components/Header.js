import React from 'react';
import { connect } from 'react-redux'
import { MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBContainer, MDBModalFooter } from "mdbreact";
import { NavLink } from 'react-router-dom';
import {Fragment} from 'react'
import logo from '../logo.svg';
import {
    Container,
    Form,
    Button,
    Image,
    Menu,  
    Icon, 
    Modal
} from 'semantic-ui-react'

import _ from 'lodash'



class Header extends React.Component{
    state={
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
      }


      toggle = nr => (e) => {
        
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }
 
    render(){
      
        return (
            <Fragment>
                
                 <header id="sticky-header" className="py-1 bg-dark text-white-50 navbar-fixed-top">
                <div className="container text-center">
                <Menu fixed='top' inverted>
                        <Menu.Item as='a' header>
                         <h2 className="headertitle" ></h2>
                        </Menu.Item>
                </Menu>
                     
                 </div>
                </header>
           </Fragment>
        )

}
}

export default connect()(Header) 