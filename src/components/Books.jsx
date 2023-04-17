import React, { Component } from 'react'
import Heading from './Heading'
import axios from 'axios'

export class Books extends Component {
  constructor(props){
    super(props);
    this.state = {
        books: [],
    }
  }
  async componentDidMount(){
    const url = "https://script.google.com/macros/s/AKfycbxATDI60mhkONYhLRv9na5ODgA8FVzXDLjkESNKFklD0z_K3RL4g9OTqzAjY2h_rnr4-g/exec?page=books";
    const response = await axios.get(url);
    this.setState({books: response.data.data});
  }
  render() {
    return (
      <div>
        <Heading title="Books Published" />
        <div className="m-4 d-flex flex-column">
            {this.state.books.length === 0 && (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            )}
            {this.state.books.length !== 0 && (
                <div>
                    <h4>Books</h4>
                    <ol>
                        {this.state.books.map((i, index)=> (
                            <li key={index}>{i.Title}</li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
      </div>
    )
  }
}

export default Books