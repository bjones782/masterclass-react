import React from 'react';
import { connect } from 'react-redux'
import { MDBMedia, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { getStudentStandards } from '../services/backend';
import NumberFormat from 'react-number-format';
import { Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Button } from 'semantic-ui-react'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const LESSONS = 'http://localhost:3000/lessons'
 


class NBTA3 extends React.Component {
    constructor(props){
        super(props)
        

        this.state = {
          isClicked: false,
          activeItem: "",
          standard: ""
        }
    }
    componentDidMount() {
      getStudentStandards(this.props.id).then(data => {
          return this.props.dispatch({
          type: 'GET_STUDENT_STANDARDS',
          data
        })});
  }

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleItemClick = (e) => {
    console.log("HERE", e.target.name, e.target.value)
    this.setState({ 
      activeItem: e.target.name,
      standard: e.target.standard
    })
  }



  handleIsClicked = (e) => {
    this.setState({isClicked: !this.state.isClicked})
   
  }

  handleSave = (e, name, id) => {
    e.preventDefault()
    // console.log("APP PROPS", e, name, id, masterylevel)
    this.props.dispatch({type: 'ADD_MASTERED', id: id, name: name, masterylevel: 1})
    
    const student = this.props.id
    return fetch(LESSONS, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          standard_id: 8,
          student_id: id, 
          mastery: 1
      })
    }) 
    .then(res => res.json())
    .then((data) => {
      console.log('raza', data)
      this.props.fetchStudentData()
    })
  }

  handleSave2 = (e, name, id) => {
    e.preventDefault()
    // console.log("GO THROUGH", name, id, masterylevel)
    this.props.dispatch({type: 'ADD_ALMOST', id: id, name: name, masterylevel: 2})
  
    const student = this.props.id
    return fetch(LESSONS, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          standard_id: 8,
          student_id: id, 
          mastery: 2
      })
    }) 
    .then(res => res.json())
    .then((data) => {
      console.log('raza', data)
      this.props.fetchStudentData()
    })
   
  }
  
  handleSave3 = (e, name, id) => {
    e.preventDefault()
    this.props.dispatch({type: 'ADD_NOTYET', id: id, name: name, masterylevel: 3})
  
    const student = this.props.id
    return fetch(LESSONS, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          standard_id: 8,
          student_id: id, 
          mastery: 3
      })
    }) 
    .then(res => res.json())
    .then((data) => {
      console.log('raza', data)
      this.props.fetchStudentData()
    })
  
  }
  

render() {
  console.log("LOOK", this.props.standards.masteredStandards1)
  let note = this.props.standards.standards.map(standard => standard.notation)
  const { activeItem } = this.state
  
    return( 
      <div>
    <div class="container">
      <MDBMedia >
<MDBMedia left className="mr-3" >
<MDBMedia classname="cardpic" object src="http://breakfastonmarsbook.weebly.com/uploads/1/7/9/0/17908507/3280266_orig.png" height="10" alt="thumbnail" className="img-thumbnail"  />
</MDBMedia>
<MDBMedia className="cardbody" body><br></br>
Standard We Are Learning Today:
<MDBMedia className="cardhead"  heading>
<strong>4.NBT.A.3</strong> - Use place value understanding to round multi-digit whole numbers to any place.
</MDBMedia>
<button className="helpbtn" onClick={this.handleIsClicked}>help <i class="fas fa-question-circle"></i></button>
</MDBMedia>
</MDBMedia>


<br></br>

{(this.state.isClicked) ? 
<div className="toggle">
<div class="row">
    <div class="col-sm">
   
<Card className="help" border="success" style={{ width: '18rem' }}>
<Card.Header>Rounding Within 1 Million</Card.Header>
<Card.Body>
  <Card.Title>Round 168,356 to the nearest ten thousand.</Card.Title>
  {/* <Card.Text>
        <NumberFormat prefix={'  A. '} value={3.89} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} />
        <NumberFormat prefix={'  B. '} value={3.98} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} />
        <NumberFormat prefix={'  C. '} value={3.74} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} />
        <NumberFormat prefix={'  D. '} value={3.09} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} />
  </Card.Text> */}
</Card.Body>
</Card>
</div><br></br>

<div class="col-sm">
<Card className="help" border="danger" style={{ width: '18rem' }}>
<Card.Header>Rounding Within 1 Million</Card.Header>
<Card.Body>
  <Card.Title>Round 446,221 to the nearest ten</Card.Title>
  {/* <Card.Text>
        <NumberFormat prefix={'  A. '} value={87.51} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} />
        <NumberFormat prefix={'  B. '} value={87.8} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} />
        <NumberFormat prefix={'  C. '} value={87.9} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} />
        <NumberFormat prefix={'  D. '} value={87.5} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} />
  </Card.Text> */}
</Card.Body>
</Card>
</div><br></br>


<Card className="help" border="warning" style={{ width: '18rem' }}>
<Card.Header>Rounding Within 1 Million</Card.Header>
<Card.Body>
  <Card.Title>Round 992,449 to the nearest hundred thousand.</Card.Title>
  {/* <Card.Text>
        <NumberFormat prefix={'  A. $'} value={68.56} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} />
        <NumberFormat prefix={'  B. '} value={67.44} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} />
        <NumberFormat prefix={'  C. '} value={67.39} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} />
        <NumberFormat prefix={'  D. '} value={68.86} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} />
  </Card.Text> */}
</Card.Body>
</Card>

    </div>
</div> 



: null}<br></br><br></br>

</div>


     
  <div class="row">
    <div class="col-sm">
      
      <MDBCard >
    <MDBCardHeader color="green lighten-2" className="cardhead" ><strong>Mastered</strong></MDBCardHeader>
    <MDBCardBody>
      {/* <MDBCardTitle></MDBCardTitle> */}
      <MDBCardText>
      {this.props.standards.masteredStandards1.map(student => <li className="smallgroup">{student}</li>)}
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
    </div>
    <div class="col-sm">
      
      <MDBCard >
    <MDBCardHeader color="orange lighten-2" className="cardhead" ><strong>Almost</strong></MDBCardHeader>
    <MDBCardBody>
      {/* <MDBCardTitle></MDBCardTitle> */}
      <MDBCardText>
      {this.props.standards.almostStandards.map(student => <li className="smallgroup">{student}</li>)}
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
    </div>
    <div class="col-sm">
      
      <MDBCard >
    <MDBCardHeader color="red lighten-2" className="cardhead" ><strong>Not Yet</strong></MDBCardHeader>
    <MDBCardBody>
      {/* <MDBCardTitle></MDBCardTitle> */}
      <MDBCardText>
      {this.props.standards.notyetStandards.map(student => <li className="smallgroup" >{student}</li>)}
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
    </div><br></br>
    </div>

    <br></br>



     <div className="row row-card">
    
      {this.props.students.students.map(s => <div className="col-sm-6 col-sm-card"><MDBCard key={s.id} {...s} handleSave={this.props.handleSave} handleSave2={this.props.handleSave2} handleSave3={this.props.handleSave3}>
        <MDBCardHeader color="blue lighten-2"><h3>{s.name}</h3></MDBCardHeader>
        <MDBCardBody>
      <MDBCardText>
      {((this.props.standards.masteredStandards1).includes(this.props.name)) ? <li>{note[0]}</li> : null}<br></br>
      </MDBCardText>
      <button className="listbtn" onClick={(e) => this.handleSave(e, s.name, s.id)} type="button" ><i class="far fa-check-circle"></i> Got It</button>
      <button className="listbtna" onClick={(e) => this.handleSave2(e, s.name, s.id)} type="button" ><i class="fas fa-star-half-alt"></i> Almost</button>
      <button className="listbtnb" onClick={(e) => this.handleSave3(e, s.name, s.id)} type="button" ><i class="far fa-times-circle"></i> Not Yet</button>
      {/* <MDBBtn color="green">got it</MDBBtn> */}
    </MDBCardBody>
  </MDBCard></div>)}

    

    

   </div>
</div>


    
    
  
     
    
   
   
    
    )
}

}
const mapStateToProps = (state) => state

export default connect(mapStateToProps)(NBTA3)
