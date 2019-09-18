import React from 'react';
import { connect } from 'react-redux';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer, MDBIcon, MDBFormInline} from "mdbreact";
import { Input, Segment, Grid } from 'semantic-ui-react';
import { Card, CardDeck, CardColumns } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from "mdbreact";

class QuestionStems extends React.Component{
    

    render(){
   
        return(
            <div>
              <h1 className="classheader" style={{ textAlign: 'center' }}>Question Stems</h1>
              


              <CardColumns>
                <Card>
                    <Card.Img variant="top" src="https://blog.knowyourteam.com/wp-content/uploads/2018/12/f6852-1ivfmj3cceaewaahk9gmmia.jpeg" height="200px" />
                    <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Conceptual Understanding</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                         How are you solving the problem? Why?
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://blog.knowyourteam.com/wp-content/uploads/2018/12/f6852-1ivfmj3cceaewaahk9gmmia.jpeg" height="200px" />
                    <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Conceptual Understanding</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                         How did you know to try this strategy?
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://blog.knowyourteam.com/wp-content/uploads/2018/12/f6852-1ivfmj3cceaewaahk9gmmia.jpeg" height="200px" />
                    <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Conceptual Understanding</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                         What could you do differently?
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://blog.knowyourteam.com/wp-content/uploads/2018/12/f6852-1ivfmj3cceaewaahk9gmmia.jpeg" height="200px" />
                    <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Conceptual Understanding</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                         Does what you are doing so far align with your estimate? How do you know?
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://blog.knowyourteam.com/wp-content/uploads/2018/12/f6852-1ivfmj3cceaewaahk9gmmia.jpeg" height="200px" />
                    <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Conceptual Understanding</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                         How is your procedure different from (name of another student)'s strategy?
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://blog.knowyourteam.com/wp-content/uploads/2018/12/f6852-1ivfmj3cceaewaahk9gmmia.jpeg" height="200px" />
                    <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Conceptual Understanding</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                         Did you notice anything that could trip you up in the problem? What are you going to do about it? Why?
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://blog.knowyourteam.com/wp-content/uploads/2018/12/f6852-1ivfmj3cceaewaahk9gmmia.jpeg" height="200px" />
                    <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Conceptual Understanding</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                         How do you know (name of other student) is right? Explain. 
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://blog.knowyourteam.com/wp-content/uploads/2018/12/f6852-1ivfmj3cceaewaahk9gmmia.jpeg" height="200px" />
                    <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Conceptual Understanding</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                         What patterns do you notice? Explain. 
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://blog.knowyourteam.com/wp-content/uploads/2018/12/f6852-1ivfmj3cceaewaahk9gmmia.jpeg" height="200px" />
                    <Card.Body>
                    <Card.Title className="question" style={{ textAlign: 'center' }}>Debrief</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                         Does this answer make sense? What makes you think that? 
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://blog.knowyourteam.com/wp-content/uploads/2018/12/f6852-1ivfmj3cceaewaahk9gmmia.jpeg" height="200px" />
                    <Card.Body>
                    <Card.Title className="question" style={{ textAlign: 'center' }}>Debrief</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                         What strategy will not work in this instance? How do you know? 
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://blog.knowyourteam.com/wp-content/uploads/2018/12/f6852-1ivfmj3cceaewaahk9gmmia.jpeg" height="200px" />
                    <Card.Body>
                    <Card.Title className="question" style={{ textAlign: 'center' }}>Debrief</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                         At what point did you get off track? What did you do about it? 
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://blog.knowyourteam.com/wp-content/uploads/2018/12/f6852-1ivfmj3cceaewaahk9gmmia.jpeg" height="200px" />
                    <Card.Body>
                    <Card.Title className="question" style={{ textAlign: 'center' }}>Debrief</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                         Will this process work for every number? Why or why not?
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://blog.knowyourteam.com/wp-content/uploads/2018/12/f6852-1ivfmj3cceaewaahk9gmmia.jpeg" height="200px" />
                    <Card.Body>
                    <Card.Title className="question" style={{ textAlign: 'center' }}>Debrief</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                         How does what we learned today connect to what we learned yesterday?
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://blog.knowyourteam.com/wp-content/uploads/2018/12/f6852-1ivfmj3cceaewaahk9gmmia.jpeg" height="200px" />
                    <Card.Body>
                    <Card.Title className="question" style={{ textAlign: 'center' }}>Debrief</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                         From today's lesson, what might we be learning about tomorrow? What makes you say that? 
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://blog.knowyourteam.com/wp-content/uploads/2018/12/f6852-1ivfmj3cceaewaahk9gmmia.jpeg" height="200px" />
                    <Card.Body>
                    <Card.Title className="question" style={{ textAlign: 'center' }}>Debrief</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                         How might you explain that to a younger student? 
                    </Card.Text>
                    </Card.Body>
                </Card>
  
  
  
  
  

</CardColumns>




            </div>
        )
    }
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps)(QuestionStems);