import React, { Component } from 'react';

class Search extends Component {
    state = {
        query:''
    }
    handleInputChange = () => {
        this.setState({
          query: this.search.value
        })
      }
    /*searchHandler = (email) => {
        const student = {
            email:email 
        }
       // axios.post('http://localhost:8080/findStudentById', student)
    }*/
    render() {
        return (
            <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
        );
    }
}

export default Search;