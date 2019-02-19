import React, { Component } from 'react';
import Axios from 'axios';

class Signup extends Component {

    state={
        firstName:'',
        lastName:'',
        telePhone:'',
        age:'',
        email:'',
        password:''
    }
    signUpSubmitHandler = (event) => {
        event.preventDefault();
        const student ={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            email: this.state.email,
            password: this.state.password,
            phoneNumber: this.state.telephone
        }
        Axios.post('http://localhost:8080/submitStudentDetails', student).then(
           
            (response) => {
        

        }
        )
    }


    signUpChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {
                [name]:value
            }
        );
}   


    render() {
        return (
           <div>
            <form className="container" onSubmit={this.signUpSubmitHandler}>
            <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="firstName">First Name</label>
                        <input name="firstName" type="text" value={this.state.firstName} onChange={this.signUpChangeHandler} name="firstName" className="form-control" id="firstName" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="lastName">Last Name</label>
                        <input name="lastName" type="text" value={this.state.lastName} onChange={this.signUpChangeHandler} className="form-control" id="lastName" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label form="telePhone">Telephone</label>
                        <input name="telePhone" type="text" value={this.state.telePhone} onChange={this.signUpChangeHandler} className="form-control" id="telePhone" placeholder="Telephone" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="age">Age </label>
                        <input name="age" type="text" value={this.state.age} onChange={this.signUpChangeHandler} className="form-control" id="age" placeholder="Age" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input name="email" type="email" value={this.state.email} onChange={this.signUpChangeHandler} className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input name="password" type="password" value={this.state.password} onChange={this.signUpChangeHandler}name="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                 

                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>

        </div>

		
        );
    }
}

export default Signup;