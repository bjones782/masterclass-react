import React from 'react';
import { NavLink } from 'react-router-dom'
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
  import { connect } from 'react-redux';
  import { pdfjs } from 'react-pdf';

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class LearningObjectives extends React.Component {
    constructor(props){
        super(props)

        this.state = { 
            numPages: null, 
            pageNumber: 1,
            isClickedM1: false,
            isClickedM2: false,
            isClickedM3: false,
            isCLickedE1: false,
            isCLickedE2: false,
            isClickedSc1: false,
            handleIsClickedSS1: false   
        }
    }

    handleIsClickedM1 = (e) => {
        this.setState({isClickedM1: !this.state.isClickedM1})
        console.log(e.target)
    
    }

   
    handleIsClickedM2 = (e) => {
        this.setState({isClickedM2: !this.state.isClickedM2})
        console.log(e.target)
    
    }

    handleIsClickedM3 = (e) => {
        this.setState({isClickedM3: !this.state.isClickedM3})
        console.log(e.target)
    
    }

    handleIsClickedE1 = (e) => {
        this.setState({isClickedE1: !this.state.isClickedE1})
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


     onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      };
      
      goToPrevPage = () =>
          this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
      goToNextPage = () =>
          this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

    render(props){
        const { pageNumber, numPages } = this.state;
    return(
      <div className="bg4">
        <div className="textcenter3">
  

          <h1 className="classheader" style={{ textAlign: 'center' }}>Curriculum Guides</h1>
  <div class="row">
    <div class="col-sm">
    
  <MDBCard className="objcard">
    <MDBCardHeader className="cardheada" ><strong>Math</strong></MDBCardHeader>
    <Container >
    <Image className="LOimage" src='https://cdn0.iconfinder.com/data/icons/tutor-icon-set/512/calculator_icon-512.png' width="250"  />
    </Container>
   <MDBCardBody>
      {/* <MDBCardTitle></MDBCardTitle> */}
      <MDBCardText>
      <strong ><button className="helpbtn" onClick={this.handleIsClickedM1}><i class="fas fa-calculator"></i></button> Module 1:</strong> Place Value, Rounding, and Algorithms for Addition and Subtraction<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedM2}><i class="fas fa-calculator"></i></button> Module 2:</strong> Unit Conversions and Problem Solving with Metric Measurement<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedM3}><i class="fas fa-calculator"></i></button> Module 3:</strong> Multi-Digit Multiplication and Division<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedM3}><i class="fas fa-calculator"></i></button> Module 4:</strong> Angle Measure and Plane Figures<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedM3}><i class="fas fa-calculator"></i></button> Module 5:</strong> Fraction Equivalence, Ordering, and Operations<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedM3}><i class="fas fa-calculator"></i></button> Module 6:</strong> Decimal Fractions<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedM3}><i class="fas fa-calculator"></i></button> Module 7:</strong> Exploring Measurement with Multiplication<br></br>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
    </div>
    <div class="col-sm">
      
  <MDBCard className="objcard">
    <MDBCardHeader className="cardheada" ><strong>Literacy</strong></MDBCardHeader>
    <Container >
    <Image className="LOimage" src='https://icon-library.net/images/literacy-icon/literacy-icon-13.jpg' width="250"  />
    </Container>
    <MDBCardBody>
      {/* <MDBCardTitle></MDBCardTitle> */}
      <MDBCardText>
      <strong ><button className="helpbtn" onClick={this.handleIsClickedE2}><i class="fas fa-book"></i></button> Module 1:</strong> The Heart, Literally and Figuratively.<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedE1}><i class="fas fa-book"></i></button> Module 2:</strong> Extreme Settings<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedE1}><i class="fas fa-book"></i></button> Module 3:</strong> Perspectives on Revolution<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedE1}><i class="fas fa-book"></i></button> Module 4:</strong> Greek Mythology<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedE1}><i class="fas fa-book"></i></button> Module 5:</strong> Legends of the Middle Ages<br></br><br></br>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
    </div>

    <div class="col-sm">
      
      <MDBCard className="objcard">
    <MDBCardHeader className="cardheada" ><strong>Science</strong></MDBCardHeader>
    <Container >
    <Image className="LOimage" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dzXYk2bCCjU9Ht_QCUa7f7XRHdsw02W1876eMpKZIzqm0UgB' width="250"  />
    </Container>
    <MDBCardBody>
      {/* <MDBCardTitle></MDBCardTitle> */}
      <MDBCardText>
      <strong ><button className="helpbtn" onClick={this.handleIsClickedSc1}><i class="fas fa-flask"></i></button> Module 1:</strong> Weather and Moon Phases<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedSc1}><i class="fas fa-flask"></i></button> Module 2:</strong> Stars, Planets, and Moon<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedSc1}><i class="fas fa-flask"></i></button> Module 3:</strong> Forecasting the Weather<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedSc1}><i class="fas fa-flask"></i></button> Module 4:</strong> Role of Organisms and Flow of Energy<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedSc1}><i class="fas fa-flask"></i></button> Module 5:</strong> Light and Sound<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedSc1}><i class="fas fa-flask"></i></button> Module 6:</strong> Force and Motion<br></br><br></br>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
    </div>



    <div class="col-sm">
      
      <MDBCard className="objcard">
    <MDBCardHeader className="cardheada" ><strong>Social Studies</strong></MDBCardHeader>
    <Container >
    <Image className="LOimage" src='https://www.shareicon.net/data/2016/07/11/794242_planet_512x512.png' width="250" />
    </Container>
    <MDBCardBody>
      {/* <MDBCardTitle></MDBCardTitle> */}
      <MDBCardText>
      <strong ><button className="helpbtn" onClick={this.handleIsClickedSS1}><i class="fas fa-globe-americas"></i></button> Module 1:</strong> The Causes, Events, and Results of the American Revolution<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedSS1}><i class="fas fa-globe-americas"></i></button> Module 2:</strong> Physical Systems Affect Human Systems<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedSS1}><i class="fas fa-globe-americas"></i></button> Module 3:</strong> The Declaration of Independence<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedSS1}><i class="fas fa-globe-americas"></i></button> Module 4:</strong> Federal System of Government<br></br><br></br>
      <strong><button className="helpbtn" onClick={this.handleIsClickedSS1}><i class="fas fa-globe-americas"></i></button> Module 5:</strong>Westward Expansion<br></br><br></br>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
    </div><br></br>
    </div>


    {(this.state.isClickedM1) ?
        <div>
        <nav>
          <button className="pdfbtn" onClick={this.goToPrevPage}><i class="fas fa-arrow-left"></i></button>
          <button className="pdfbtn" onClick={this.goToNextPage}><i class="fas fa-arrow-right"></i></button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            file={require("../math-g4-m1-full-module.pdf")}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>: null}

     

      {(this.state.isClickedM2) ?
        <div>
        <nav>
          <button className="pdfbtn" onClick={this.goToPrevPage}><i class="fas fa-arrow-left"></i></button>
          <button className="pdfbtn" onClick={this.goToNextPage}><i class="fas fa-arrow-right"></i></button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            file={require("../math-g4-m2-full-module.pdf")}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>: null}
           

      {(this.state.isClickedM3) ?
        <div>
        <nav>
          <button className="pdfbtn" onClick={this.goToPrevPage}><i class="fas fa-arrow-left"></i></button>
          <button className="pdfbtn" onClick={this.goToNextPage}><i class="fas fa-arrow-right"></i></button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            file={require("../math-g4-m3-full-module.pdf")}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>: null}



      {(this.state.isClickedE1) ?
        <div>
        <nav>
          <button className="pdfbtn" onClick={this.goToPrevPage}><i class="fas fa-arrow-left"></i></button>
          <button className="pdfbtn" onClick={this.goToNextPage}><i class="fas fa-arrow-right"></i></button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            file={require("../4th_standards_booklet.pdf")}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>: null}

      {(this.state.isClickedE2) ?
        <div>
        <nav>
          <button className="pdfbtn" onClick={this.goToPrevPage}><i class="fas fa-arrow-left"></i></button>
          <button className="pdfbtn" onClick={this.goToNextPage}><i class="fas fa-arrow-right"></i></button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            file={require("../tcoe_bookmarks_grade_4.pdf")}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>: null}



      {(this.state.isClickedSc1) ?
        <div>
        <nav>
          <button className="pdfbtn" onClick={this.goToPrevPage}><i class="fas fa-arrow-left"></i></button>
          <button className="pdfbtn" onClick={this.goToNextPage}><i class="fas fa-arrow-right"></i></button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            file={require("../Science-4th-Grade-Curriculum-Map.pdf")}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>: null}


      {(this.state.isClickedSS1) ?
        <div>
        <nav>
          <button className="pdfbtn" onClick={this.goToPrevPage}><i class="fas fa-arrow-left"></i></button>
          <button className="pdfbtn" onClick={this.goToNextPage}><i class="fas fa-arrow-right"></i></button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            file={require("../Social-Studies-4th-Grade-Teacher-Notes.pdf")}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>: null}






</div>





        </div>
    )
}}

const mapStateToProps = (state) => state
export default connect(mapStateToProps)(LearningObjectives)