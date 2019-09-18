import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ls from 'local-storage'
import { connect } from 'react-redux'

// import "./Login.css";


class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: "",
            password: "",
            name: "",
            image: "",
            school: ""
            
        };

    }

        handleUChange = (e) => {
            this.setState({username: e.target.value})
            console.log(e.target.value)
        }

        handlePChange = (e) => {
            this.setState({password: e.target.value})
            console.log(e.target.value)
        }

        handleNChange = (e) => {
            this.setState({name: e.target.value})
            console.log(e.target.value)
        }

        handleIChange = (e) => {
            this.setState({image: e.target.value})
            console.log(e.target.value)
        }

        handleSChange = (e) => {
            this.setState({school: e.target.value})
            console.log(e.target.value)
        }


        handleUsChange = (e) => {
            this.setState({username: e.target.value})
            console.log(e.target.value)
        
        }
        
        handlePaChange = (e) => {
            this.setState({password: e.target.value})
            console.log(e.target.value)
        }

        handleSubmit = (e) => {
            e.preventDefault()
            const values = {user: {username: this.state.username, password: this.state.password, name: this.state.name, img_url: this.state.image, school: this.state.school }}
            console.log(values)
            // let user = this.state
            fetch("http://localhost:3000/users", {
              method: 'POST',
              headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify(values)
            })
            .then(res => res.json())
            .then(data => {
              if (data.jwt){
                ls.set('jwt', data.jwt)
                this.props.dispatch({type: 'LOGIN'})
                console.log(data)
                this.props.history.push("/userprofile")
              } else
              alert('Invalid Entry')
            })
          }

        handleLoginSubmit = (e) => {
            
            e.preventDefault()
            
            const values = {user: {username: this.state.username, password: this.state.password}}
            console.log("User:", values)

            fetch("http://localhost:3000/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body:JSON.stringify(values)
            })
            .then(resp => resp.json())
            .then(data => {
                if (data.jwt){
                    ls.set('jwt', data.jwt)
                    this.props.dispatch({type: 'LOGIN'})
                    this.props.history.push("/userprofile")
                    console.log(data.jwt)
                } else 
                alert('Incorrect Username or Password');
            })
            // {this.state.loggedInStatus ? <Redirect to={{pathname: "/userprofile"}}/> : null}
        }


    render() {
      return (
<div className="bg2">   
<div >
<div className="row">
    <div className="col-md-6 login-form-1">
        <h3>Login</h3>
        
            <div className="form-group">
                <input onChange={this.handleUChange} type="text" className="form-control" placeholder="Your Username *"  />
            </div>
            <div className="form-group">
                <input onChange={this.handlePChange} type="password" className="form-control" placeholder="Your Password *"  />
            </div>
            <div className="form-group">
                <input onClick={this.handleLoginSubmit} type="button" className="btnSubmit" value="Login" />
            </div>
            <div className="form-group">
               
            </div>
        
    </div>
    <div className="col-md-6 login-form-2">
        <div className="login-logo">

            <img src="https://freeicons.io/laravel/public/uploads/icons/png/15644753891538116385-512.png" alt="scholar" ></img>
        </div>
        <h3>Sign Up</h3>
            <div className="form-group">
                <input onChange={this.handleNChange} type="text" className="form-control" placeholder="Your First Name *"  />
            </div>
            <div className="form-group">
                <input onChange={this.handleUsChange} type="text" className="form-control" placeholder="Create a Username *"  />
            </div>
            <div className="form-group">
                <input onChange={this.handlePaChange} type="password" className="form-control" placeholder="Create a Password *"  />
            </div>
            <div className="form-group">
                <input onChange={this.handleIChange} type="text" className="form-control" placeholder="Paste Image URL *"  />
            </div>
            <div className="form-group">
                <input onChange={this.handleSChange} type="text" className="form-control" placeholder="School Name *"  />
            </div>
            <div className="form-group">
                <input onClick={this.handleSubmit} type="button" className="btnSubmit" value="Sign Up" />
            </div>
            <div className="form-group">

                
            </div>
            </div>
            
        
        </div>
        </div>
        </div>


      )
    }
  }

  export default connect()(withRouter(Login));