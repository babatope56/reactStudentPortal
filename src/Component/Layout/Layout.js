import React, { Component } from 'react';
import Header from '../Header/Header';
import Signup from '../Signup/Signup';
import AboutUs from '../AboutUs/AboutUs';
import{Route,withRouter} from 'react-router-dom';
import Home from '../Home/Home';
import axios from 'axios';
class Layout extends Component {

    state ={
        loggedInUser:null
    }
    signOut = () =>{
        this.setState(
            {
                loggedInUser:null
            }

        )
        this.props.history.push('/');
    }
    signInSubmitHandler = (email, password) => {
        const student = {
            email:email,
            password:password
        }
        axios.post('http://localhost:8080/login', student).then(
            (response) => {
                if (response.data) {
                    this.setState(
                        {
                            loggedInUser: response.data
                        }
                    )
                    this.props.history.push('/');
                }
            }
        )
    }
    
       

    render() {
        let routes = (
            <React.Fragment>
                <Route exact path='/sign-up' component={Signup} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/' component={Signup} />
            </React.Fragment>
        )
        if (this.state.loggedInUser) {
            routes = (
                <React.Fragment>
                    <Route exact path='/home' render = {(props) =>( <Home{...props} loggedInUser={this.state.loggedInUser}/>)} />
                      <Route exact path='/' render = {(props) =>( <Home{...props} loggedInUser={this.state.loggedInUdser}/>)} />
                </React.Fragment>
            )
        }
    
    

        return (
            <div>
                <Header signOut ={this.signOut} submit={this.signInSubmitHandler} loggedInUser={this.state.loggedInUser}/>
                <Route exact path='/about-us' component = {AboutUs} /> 
                {routes}  
                
               
            </div>
        );
    }
}
                    

export default withRouter(Layout);