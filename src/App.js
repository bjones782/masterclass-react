import React from 'react';
import './App.css';
import { Document, Page } from "react-pdf";
import LandingPage from './components/LandingPage';
import UserProfile from './containers/user-profile';
import Login from './components/Login';
import { Switch, Route } from 'react-router-dom';
import StandardsContainer from './containers/StandardsContainer';
import Logout from './components/Logout';
import MyClass from './containers/MyClass';
import Student from './components/Student';
import { getStudents } from './services/backend';
import { deleteStudent } from './services/backend';
import { connect } from 'react-redux';
import Two from './components/Two';
import Three from './components/Three';
import { getStandards } from './services/backend';
import { getLessons } from './services/backend';
import { getComments } from './services/backend';
import { getPlans } from './services/backend';
import { getStudentStandards } from './services/backend';
import StandardsList from './components/StandardsList';
import Header from './components/Header';
import Footer from './components/Footer';
import DonutChart from './containers/DonutChart';
import Test from './components/Test';
import AddStudent from './components/AddStudent'
import Resources from './components/Resources';
import LearningObjectives from './components/LearningObjectives';
import LessonPlan from './components/LessonPlan';
import LessonPlanList from './containers/LessonPlanList';
import LessonPlanCard from './components/LessonPlanCard';
import NavBar from './components/NavBar'
import Data from './containers/Data';
import OAA2 from './components/OAA2';
import OAA3 from './components/OAA3';
import OAB4 from './components/OAB4';
import OAC5 from './components/OAC5';
import NBTA1 from './components/NBTA1';
import NBTA2 from './components/NBTA2';
import NBTA3 from './components/NBTA3';
import NBTB4 from './components/NBTB4';
import NBTC5 from './components/NBTC5';
import NF1 from './components/NF1';
import NF2 from './components/NF2';
import NF3 from './components/NF3';
import NF4 from './components/NF4';
import NF5 from './components/NF5';
import MD1 from './components/MD1';
import MD2 from './components/MD2';
import MD3 from './components/MD3';
import MD4 from './components/MD4';
import MD5 from './components/MD5';
import G1 from './components/G1';
import G2 from './components/G2';
import G3 from './components/G3';
import QuestionStems from './components/QuestionStems'
import Videos from './components/Videos'



const LESSONS = 'http://localhost:3000/lessons'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { numPages: null, pageNumber: 1 }
   
  }

  fetchStudentData = () => {
    getStudents().then(data => this.props.dispatch({
      type: 'GET_STUDENTS',
      data
    }));

    
    getStandards().then(data => {
      return this.props.dispatch({
      type: 'GET_STANDARDS',
      data
    })});

    getLessons().then(data => {
      return this.props.dispatch({
        type: 'GET_LESSONS',
        data
      })});

    getStudentStandards(this.props.id).then(data => {
      console.log(this.props)
      console.log('data', data)
      return this.props.dispatch({
      type: 'GET_STUDENT_STANDARDS',
      data
    })});

    getComments().then(data => this.props.dispatch({
       type: 'GET_COMMENTS',
      data
    }));

    getPlans().then(data => this.props.dispatch({
       type: 'GET_PLANS',
       data
    }));
  }

  componentDidMount() {
    this.fetchStudentData()
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

      <div>
        <head><link href="https://fonts.googleapis.com/css?family=Manjari&display=swap" rel="stylesheet"/></head>
        <NavBar />
        <Header />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' render={() => (<Login />)}  />
          <Route exact path='/userprofile' render={() => (<UserProfile />)} />
          <Route exact path='/standardscontainer' render={(props) => <StandardsContainer {...props} getStudentStandards={this.getStudentStandards} handleSave={this.handleSave} handleSave2={this.handleSave2} handleSave3={this.handleSave3} fetchStudentData={this.fetchStudentData}  /> } />
          <Route exact path='/standardslist' render={(props) => <StandardsList {...props} handleSave={this.handleSave}/>} />
          <Route exact path='/donutchart' render={(props) => <DonutChart {...props} getStudentStandards={this.getStudentStandards}/>} />
          <Route exact path='/logout' render={() => (<Logout />)} />
          <Route exact path='/videos' render={() => (<Videos />)} />
          <Route exact path='/myClass' render={(props) => <MyClass {...props} deleteStudent={this.deleteStudent} getStudentStandards={this.getStudentStandards} getComments={this.getComments} fetchStudentData={this.fetchStudentData}/>} />
          <Route exact path='/student' render={() => (<Student />)} />
          <Route exact path='/standardslist' render={() => (<StandardsList />)} />
          <Route exact path='/two' render={(props) => <Two {...props} getStudentStandards={this.getStudentStandards} handleSave={this.handleSave} handleSave2={this.handleSave2} handleSave3={this.handleSave3}/>} />
          <Route exact path='/three' render={(props) => <StandardsContainer {...props} getStudentStandards={this.getStudentStandards} handleSave={this.handleSave} handleSave2={this.handleSave2} handleSave3={this.handleSave3}/>} />
          <Route exact path='/donutchart' render={() => (<DonutChart />)} />
          <Route exact path='/questionstems' render={() => (<QuestionStems />)} />
          <Route exact path='/addstudent' render={() => (<AddStudent />)} />
          <Route exact path='/resources' render={() => (<Resources />)} />
          <Route exact path='/learningobjectives' render={() => (<LearningObjectives />)} />
          <Route exact path='/lessonplan' render={() => (<LessonPlan getPlans={this.getPlans} fetchStudentData={this.fetchStudentData}/>)} />
          <Route exact path='/lessonplanlist' render={(props) => (<LessonPlanList  {...props} getPlans={this.getPlans} fetchStudentData={this.fetchStudentData}/>)} />
          <Route exact path='/lessonplancard' render={(props) => (<LessonPlanCard  {...props} getPlans={this.getPlans} fetchStudentData={this.fetchStudentData}/>)} />
          <Route exact path='/data' render={(props) => <Data {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/test' render={(props) => <Test {...props} getStudents={this.getStudents} getComments={this.getComments}/>} />
          <Route exact path='/oaa2' render={(props) => <OAA2 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/oaa3' render={(props) => <OAA3 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/oab4' render={(props) => <OAB4 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/oac5' render={(props) => <OAC5 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/nbta1' render={(props) => <NBTA1 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/nbta2' render={(props) => <NBTA2 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/nbta3' render={(props) => <NBTA3 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/nbtB4' render={(props) => <NBTB4 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/nbtc5' render={(props) => <NBTC5 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/nf1' render={(props) => <NF1 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/nf2' render={(props) => <NF2 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/nf3' render={(props) => <NF3 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/nf4' render={(props) => <NF4 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/nf5' render={(props) => <NF5 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/md1' render={(props) => <MD1 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/md2' render={(props) => <MD2 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/md3' render={(props) => <MD3 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/md4' render={(props) => <MD4 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/md5' render={(props) => <MD5 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/g1' render={(props) => <G1 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/g2' render={(props) => <G2 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />
          <Route exact path='/g3' render={(props) => <G3 {...props} getStudentStandards={this.getStudentStandards} fetchStudentData={this.fetchStudentData}/> } />

        </Switch>
        <Footer />
      </div>
    )
  }
}


    
  const mapStateToProps = (state) => state
  // const mapDispatchToProps = (props) => props
  
  export default connect(mapStateToProps)(App)

// export default App;
