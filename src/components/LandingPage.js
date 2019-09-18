import React from 'react';
import { NavLink } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from "mdbreact";
import { MDBIcon } from "mdbreact";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';

const src = '/images/wireframe/image.png'

class LandingPage extends React.Component {
 
  
  render() {
  return (
    <div className="text-center">
      {/* <h1>Example heading <span class="badge badge-secondary">New</span></h1> */}
      <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={5}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://i0.wp.com/blog.neolms.com/wp-content/uploads/2017/10/flipping-elementary-school-classroom.jpeg?fit=1500%2C500&ssl=1"
                alt="First slide"  height="370px"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://www.kippsocal.org/files/images/schools/illuminar-homepage.jpg"
                alt="Second slide"  height="400px"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://3.files.edl.io/b19a/18/05/31/152832-9d460c10-36ef-4e3c-8f61-cee3a792e507.JPG"
                alt="Third slide"  height="390px"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://www.philasd.org/charterschools/wp-content/uploads/sites/63/2017/07/header-image_about-1024x341.jpg"
                alt="Fourth slide"  height="380px"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block w-100"
                src="http://blog.kipp.org/wp-content/uploads/2012/12/ratios-picture.jpg"
                alt="Fifth slide"  height="390px"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>

    <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Why is it so great?
        </h2>
        <p className="lead black-text w-responsive mx-auto mb-5">
          Through MasterClass, teachers can effectively assess core standards, monitor student performance, and easily target interventions to inform their instruction.
        </p>
        <MDBRow>
          <MDBCol md="4">
            <MDBIcon icon="chart-area" size="3x" className="red-text" />
            <h5 className="font-weight-bold my-4">Analytics</h5>
            <p className="black-text mb-md-0 mb-5">
            <NavLink to="/standardslist">Assess and track mastery of state and Common Core standards. Know what your students know in real-time.</NavLink>
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="book" size="3x" className="cyan-text" />
            <h5 className="font-weight-bold my-4">Tutorials</h5>
            <p className="black-text mb-md-0 mb-5">
            <NavLink to="/learningobjectives">Find and use resources aligned to standards. Convenient 'Common Core Standards' link helps teachers stay focused on teaching and assessing core standards.</NavLink> 
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon far icon="comments" size="3x" className="orange-text" />
            <h5 className="font-weight-bold my-4">Support</h5>
            <p className="black-text mb-md-0 mb-5">
            <NavLink to="/data">With focus on individual standards, teachers can easily identify which students are struggling to understand a concept.</NavLink>
            </p>
          </MDBCol>
        </MDBRow>
      </section>
    



  </div>

// </div>

  
)

}

}
// ReactDOM.render(<Carousel />, document.querySelector('.demo-carousel'));

  export default LandingPage;
  

  




