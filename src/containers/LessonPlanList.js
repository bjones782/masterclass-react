import React from 'react';
import { connect } from 'react-redux';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer, MDBIcon, MDBFormInline} from "mdbreact";
import { Input, Segment, Grid } from 'semantic-ui-react';
import { Card, CardDeck, Form, FormControl, Button, Navbar, InputGroup, Jumbotron} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from "mdbreact";


class LessonPlanList extends React.Component{
    state = { 
        searchTerm: "",
        plansSearched: [],
        searchPlanChange: false
     }


    handlePlanSearch = (e) => {
        this.setState({ searchTerm: e.target.value})
    }


    handlePlanFilter = () => {
        console.log(this.props)
        console.log("term", this.state.searchTerm)
        const newPlanArray = this.props.standards.plans.filter(plan => plan.topic.toLowerCase().includes(this.state.searchTerm))
        this.setState({plansSearched: newPlanArray})
     }

     handlePlanClick = () => {
        this.setState({ searchPlanChange: !this.state.searchPlanChange})
    }
    
  
    render(){
    console.log("LP", this.props.standards.plans)
    
        return(
            <div>
              <div background="white">
                <div className="input-group md-form form-sm form-1 pl-0 listbar">
                <span className="input-group-text black lighten-3" id="basic-text1">
                <MDBIcon className="text-white" icon="search" />
                </span>
                <Input className="plansearch" icon='search' placeholder='Search Lessons...' onChange={this.handlePlanSearch} onClick={this.handlePlanClick} onMouseLeave={this.handlePlanFilter}/>
                
    
              </div>
            </div>

            <CardDeck className="lessoncontainer">
                {this.state.searchPlanChange ? this.state.plansSearched.map(plan => <Jumbotron sm="6"><Card className="m3 slistcard2" style={{ maxWidth: "43rem" }}>
          <Card.Img variant="top" src="https://www.kippcharlotte.org/rotating_images/2675/2675_57_710_0_69.jpg" width="5px" height="240px" />
          <Card.Header className="listcardheader">{plan.topic}</Card.Header>
          <Card.Title className="lessoncardtitle">{plan.objective}</Card.Title>
          
          {/* <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/03/22/15/29/blue-1273089_960_720.jpg" width="5px" height="15px" /> */}
          
          <Card.Body>
            
      <Card.Text><strong>Direct Instruction:</strong><br></br> {plan.direct}</Card.Text>
      <Card.Text><strong>Guided Practice:</strong><br></br> {plan.guided}</Card.Text>
      <Card.Text><strong>Independent Practice:</strong><br></br> {plan.independent}</Card.Text>
      <Card.Text><strong>Check for Understanding:</strong><br></br> {plan.cfu}</Card.Text>
    </Card.Body>
    <Card.Footer>
    {/* <NavLink to="/learningobjectives" className="btn">See Curriculum Guides</NavLink> */}
    <NavLink to="/learningobjectives" className="text-muted">See Curriculum Guides</NavLink>
    </Card.Footer>
          </Card> 
                </Jumbotron>) : null}
          </CardDeck>

                <div className="text-center4">
                <span className="classheader"> Lesson Plans</span>
                </div>
              
          <CardDeck className="lessoncontainer">
          {this.props.standards.plans.map(plan => <MDBCol sm="6"><Card className="m3 slistcard2" style={{ maxWidth: "43rem" }}>
          <Card.Img variant="top" src="https://www.kippcharlotte.org/rotating_images/2675/2675_57_710_0_69.jpg" width="5px" height="240px" />
          <Card.Header className="listcardheader">{plan.topic}</Card.Header>
          <Card.Title className="lessoncardtitle">{plan.objective}</Card.Title>
          
          <Card.Body>
            {/* <Card.Title>{plan.objective}</Card.Title> */}
      <Card.Text><strong>Direct Instruction:</strong><br></br> {plan.direct}</Card.Text>
      <Card.Text><strong>Guided Practice:</strong><br></br> {plan.guided}</Card.Text>
      <Card.Text><strong>Independent Practice:</strong><br></br> {plan.independent}</Card.Text>
      <Card.Text><strong>Check for Understanding:</strong><br></br> {plan.cfu}</Card.Text>
    </Card.Body>
    <Card.Footer>
    {/* <NavLink to="/learningobjectives" className="btn">See Curriculum Guides</NavLink> */}
    <NavLink to="/learningobjectives" className="text-muted">See Curriculum Guides</NavLink>
    </Card.Footer>
          </Card> 
          </MDBCol>)}
          </CardDeck>


            </div>
        )
    }
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps)(LessonPlanList);