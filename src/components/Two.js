import React from 'react';
import { connect } from 'react-redux'
// import One from '../components/One';
import { MDBMedia, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Card from 'react-bootstrap/Card';
import { getStudentStandards } from '../services/backend';

class Two extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
      getStudentStandards(this.props.id).then(data => {
          return this.props.dispatch({
          type: 'GET_STUDENT_STANDARDS',
          data
        })});
  }

  //   componentDidMount() {
  //     getStandards().then(data => {
  //         return this.props.dispatch({
  //         type: 'GET_STANDARDS',
  //         data
  //       })});
  // }

render() {
  console.log("LOOK", this.props.standards.masteredStandards1)
  let note = this.props.standards.standards.map(standard => standard.notation)
  
    return( 
      <div>
    <div class="container">
      <MDBMedia>
<MDBMedia left className="mr-3" >
<MDBMedia classname="cardpic" object src="http://breakfastonmarsbook.weebly.com/uploads/1/7/9/0/17908507/3280266_orig.png" height="10" alt="thumbnail" className="img-thumbnail"  />
</MDBMedia>
<MDBMedia className="cardbody" body><br></br>
<MDBMedia className="cardhead" heading>
4.NF.C.6 - 
</MDBMedia>
Use decimal notation for fractions with denominators 10 and 100.
</MDBMedia>
</MDBMedia>
<br></br>
     
  <div class="row">
    <div class="col-sm">
      
      <MDBCard >
    <MDBCardHeader color="green lighten-1" className="cardhead" ><strong>Mastered</strong></MDBCardHeader>
    <MDBCardBody>
      {/* <MDBCardTitle></MDBCardTitle> */}
      <MDBCardText>
      {this.props.standards.masteredStandards1.map(student => <li>{student}</li>)}
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
    </div>
    <div class="col-sm">
      
      <MDBCard >
    <MDBCardHeader color="orange lighten-1" className="cardhead" ><strong>Almost</strong></MDBCardHeader>
    <MDBCardBody>
      {/* <MDBCardTitle></MDBCardTitle> */}
      <MDBCardText>
      {this.props.standards.almostStandards.map(student => <li>{student}</li>)}
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
    </div>
    <div class="col-sm">
      
      <MDBCard >
    <MDBCardHeader color="red lighten-1" className="cardhead" ><strong>Not Yet</strong></MDBCardHeader>
    <MDBCardBody>
      {/* <MDBCardTitle></MDBCardTitle> */}
      <MDBCardText>
      {this.props.standards.notyetStandards.map(student => <li>{student}</li>)}
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
    </div><br></br>
    </div>
</div><br></br><br></br>



     <div className="row">
    
      {this.props.students.students.map(s => <div className="col-sm"><MDBCard key={s.id} {...s} handleSave={this.props.handleSave} handleSave2={this.props.handleSave2} handleSave3={this.props.handleSave3}>
        <MDBCardHeader color="blue lighten-1"><h3>{s.name}</h3></MDBCardHeader>
        <MDBCardBody>
      <MDBCardText>
      {((this.props.standards.masteredStandards1).includes(this.props.name)) ? <li>{note[0]}</li> : null}<br></br>
      </MDBCardText>
      <button onClick={(e) => this.props.handleSave(e, s.name, s.id, {masterylevel: 2})} type="button" className="btn btn-success btn-rounded"><i class="far fa-check-circle"></i>  Got It</button>
      <button onClick={(e) => this.props.handleSave2(e, s.name, s.id, {masterylevel: 2})} type="button" className="btn btn-warning btn-rounded"><i class="fas fa-star-half-alt"></i> Almost</button>
      <button onClick={(e) => this.props.handleSave3(e, s.name, s.id, {masterylevel: 2})} type="button" className="btn btn-danger btn-rounded"><i class="far fa-times-circle"></i> Not Yet</button>
      {/* <MDBBtn color="green">got it</MDBBtn> */}
    </MDBCardBody>
  </MDBCard></div>)}

    

    

   </div>
</div>


    
    
  
     
    
    // <MDBContainer>
    // {this.props.students.students.map(s => <MDBCard key={s.id} {...s} handleSave={this.props.handleSave} handleSave2={this.props.handleSave2} handleSave3={this.props.handleSave3}>
    // //   <Card.Header>{s.name}</Card.Header>
    //     Mastered:
    //         {((this.props.standards.masteredStandards1).includes(this.props.name)) ? <li>{note[0]}</li> : null}<br></br>
    //         Almost:
    //         {((this.props.standards.almostStandards).includes(this.props.name)) ? <li>{note[0]}</li> : null}<br></br>
    //         Not Yet:
    //         {((this.props.standards.notyetStandards).includes(this.props.name)) ? <li>{note[0]}</li> : null}
    //         {/* <button onClick={() => this.props.dispatch({ type: 'ADD_MASTERED', id: this.props.id, name: this.props.name})} type="button" className="btn btn-success btn-rounded">Got it!</button>
    //         <button onClick={() => this.props.dispatch({ type: 'ADD_ALMOST', id: this.props.id, name: this.props.name})} type="button" className="btn btn-warning btn-rounded">Almost</button>
    //         <button onClick={() => this.props.dispatch({ type: 'ADD_NOTYET', id: this.props.id, name: this.props.name})} type="button" className="btn btn-danger btn-rounded">Not Yet</button> */}
    //         <button onClick={(e) => this.props.handleSave(e, s.name, s.id)} type="button" className="btn btn-success btn-rounded"><i class="far fa-check-circle"></i> Got It</button>
    //         <button onClick={(e) => this.props.handleSave2(e, s.name, s.id, {masterylevel: 2})} type="button" className="btn btn-warning btn-rounded"><i class="fas fa-star-half-alt"></i> Almost</button>
    //         <button onClick={(e) => this.props.handleSave3(e, s.name, s.id, {masterylevel: 2})} type="button" className="btn btn-danger btn-rounded"><i class="far fa-times-circle"></i> Not Yet</button>
        
    //     </Card>
    //     )}<br></br>
    //   {/* <Card style={{ width: '12rem' }}> */}
      
      
      
    //   </MDBContainer>
    // </div>
    
    )
}

}
const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Two)




