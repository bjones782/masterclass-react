import React from 'react';
import { connect } from 'react-redux';
import { CardDeck, CardColumns } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import {
    Container,
    Grid,
    Header,
    Image,
    List,
    Divider,
    Segment,
    Icon, 
    Card
  } from 'semantic-ui-react'
  import { MDBMedia, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
  import { Document, Page } from "react-pdf";
  


class Videos extends React.Component{
    constructor(props){
        super(props)
    this.state = { 
        numPages: null, 
        pageNumber: 1,
        isClickedMV1: false,
        isClickedMV2: false,
        isClickedMV3: false,
        isCLickedMV4: false,
        isCLickedE2: false,
        isClickedSc1: false,
        handleIsClickedSS1: false
     }
    }

    handleIsClickedMV1 = (e) => {
        this.setState({isClickedMV1: !this.state.isClickedMV1})
        console.log(e.target)
    
    }

    handleIsClickedMV2 = (e) => {
        this.setState({isClickedMV2: !this.state.isClickedMV2})
        console.log(e.target)
    
    }

    handleIsClickedMV3 = (e) => {
        this.setState({isClickedMV3: !this.state.isClickedMV3})
        console.log(e.target)
    
    }

    handleIsClickedMV4 = (e) => {
        this.setState({isClickedMV4: !this.state.isClickedMV4})
        console.log(e.target)
    
    }

    handleIsClickedE2 = (e) => {
        this.setState({isClickedE2: !this.state.isClickedE2})
        console.log(e.target)
    
    }

    handleIsClickedSc1 = (e) => {
        this.setState({isClickedSc1: !this.state.isClickedSc1})
        console.log(e.target)
    
    }

    handleIsClickedSS1 = (e) => {
        this.setState({isClickedSS1: !this.state.isClickedSS1})
        console.log(e.target)
    
    }


    render(){
   
        return(
            <div className="videohead ">
                <h1 className="classheader" style={{ textAlign: 'center' }}>Video Tutorials</h1>
    
                <CardColumns>
                    
                    <Card >
                    <img src="https://www.learner.org/courses/learningmath/number/images/session4/4b1a.gif" alt="area model"/><br></br>
                    <button className="helpbtn" onClick={this.handleIsClickedMV1}><i class="fab fa-youtube"></i></button> 
                    <strong>Multi-digit multiplication using the Area Array Model</strong>
                    </Card>
                {(this.state.isClickedMV1) ?
                <iframe width="440" height="315" src="https://www.youtube.com/embed/EUvOyz2Ysq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null}
                    
                    <Card>
                    <img src="https://i.ytimg.com/vi/rWQDDT9sjrI/maxresdefault.jpg" height="180px" alt="area model"/><br></br>
                    <button className="helpbtn" onClick={this.handleIsClickedMV2}><i class="fab fa-youtube"></i></button> 
                    <strong>Rename Numbers</strong>
                    </Card>
                {(this.state.isClickedMV2) ?
                <iframe width="440" height="315" src="https://www.youtube.com/embed/Y4Ge8lRFl1A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null}
                    
                    <Card>
                    <img src="https://sophialearning.s3.amazonaws.com/packet_logos/121222/large/compare_20fractions.png?1375928855" height="180px" alt="area model"/><br></br>
                    <button className="helpbtn" onClick={this.handleIsClickedMV3}><i class="fab fa-youtube"></i></button> 
                    <strong>Comparing Fractions</strong>
                    </Card>
                {(this.state.isClickedMV3) ?
                <iframe width="440" height="315" src="https://www.youtube.com/embed/6PIZ9P5aRWo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null}
                    
                    <Card>
                    <img src="https://www.theschoolrun.com/sites/theschoolrun.com/files/content-images/mixed_number.png" height="180px" alt="area model"/><br></br>
                    <button className="helpbtn" onClick={this.handleIsClickedMV4}><i class="fab fa-youtube"></i></button> 
                    <strong>Improper Fractions & Mixed Numbers</strong>
                    </Card>
                {(this.state.isClickedMV4) ?
                <iframe width="440" height="315" src="https://www.youtube.com/embed/3vzMNQzUrw4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null}
                    
                    <Card>
                    <img src="https://yr3ghajnsielem.files.wordpress.com/2010/06/division.png" height="180px" alt="area model"/><br></br>
                    <button className="helpbtn" onClick={this.handleIsClickedMV4}><i class="fab fa-youtube"></i></button> 
                    <strong>Basic Division</strong>
                    </Card>
                {(this.state.isClickedMV4) ?
                <iframe width="440" height="315" src="https://www.youtube.com/embed/3vzMNQzUrw4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null}
                    
                    <Card>
                    <img src="https://marvelmath.com/wp-content/uploads/2018/07/Slide3-1.png" height="180px" alt="area model"/><br></br>
                    <button className="helpbtn" onClick={this.handleIsClickedMV4}><i class="fab fa-youtube"></i></button> 
                    <strong>Benchmark Numbers</strong>
                    </Card>
                {(this.state.isClickedMV4) ?
                <iframe width="440" height="315" src="https://www.youtube.com/embed/3vzMNQzUrw4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null}
                    
                    {/* <Card>
                        <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Title style={{ textAlign: 'center' }}>Multi-digit multiplication using the Area Array Model</Card.Title>
                        <Card.Text style={{ textAlign: 'center' }}>
                        <iframe width="440" height="315" src="https://www.youtube.com/embed/EUvOyz2Ysq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Card.Text>
                        </Card.Body>
                    </Card> */}
                    {/* <Card>
                        <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Title style={{ textAlign: 'center' }}>Rename Numbers</Card.Title>
                        <Card.Text style={{ textAlign: 'center' }}>
                        <iframe width="440" height="315" src="https://www.youtube.com/embed/Y4Ge8lRFl1A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Title style={{ textAlign: 'center' }}>Comparing Fractions</Card.Title>
                        <Card.Text style={{ textAlign: 'center' }}>
                        <iframe width="440" height="315" src="https://www.youtube.com/embed/6PIZ9P5aRWo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Title style={{ textAlign: 'center' }}>Place Value</Card.Title>
                        <Card.Text style={{ textAlign: 'center' }}>
                        <iframe width="440" height="315" src="https://www.youtube.com/embed/xMZ_QmybDbM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Card.Text>
                        </Card.Body>
                    </Card> */}
                    {/* <Card>
                        <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Title style={{ textAlign: 'center' }}>Basic Division</Card.Title>
                        <Card.Text style={{ textAlign: 'center' }}>
                        <iframe width="440" height="315" src="https://www.youtube.com/embed/KGMf314LUc0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Title style={{ textAlign: 'center' }}>Improper Fractions & Mixed Numbers</Card.Title>
                        <Card.Text style={{ textAlign: 'center' }}>
                        <iframe width="440" height="315" src="https://www.youtube.com/embed/3vzMNQzUrw4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Title style={{ textAlign: 'center' }}>Benchmark Numbers</Card.Title>
                        <Card.Text style={{ textAlign: 'center' }}>
                        <iframe width="440" height="315" src="https://www.youtube.com/embed/aDVw7JI_M6A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Card.Text>
                        </Card.Body>
                    </Card> */}
                </CardColumns>




            </div>
        )
    }
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Videos);