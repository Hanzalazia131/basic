import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default class AddInfo extends Component {
    constructor(props){
        super(props);


        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCNIC = this.onChangeCNIC.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            CNIC: '',
            DOB: ''
        }        
    }
    onChangeName(e){
        this.setState({
                Name: e.target.value  
            });
    }
    onChangeCNIC(e){
        this.setState({
                CNIC: e.target.value  
            });
    }
    onChangeDOB(date){
        this.setState({
                DOB: date  
            });
    }
    onSubmit(e){
        e.preventDefault();
        const Info = {
            Name: this.state.Name,
            CNIC: this.state.CNIC,
            DOB: this.state.DOB
        };
        
        axios.post('http://localhost:5000/Infos/add', Info)
        .then(res=> console.log(res.data))
        
        window.location = '/';
    }
    render() { 
        return (
            <div>
            <h3>Create New Info</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                <label>Name: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.Name}
                    onChange={this.onChangeName}
                    />
              </div>
              <div className="form-group"> 
                <label>CNIC: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.CNIC}
                    onChange={this.onChangeCNIC}
                    />
              </div>
              <div className="form-group">
                <label>DOB: </label>
                <div>
                  <DatePicker
                    selected={this.state.DOB}
                    onChange={this.onChangeDOB}
                  />
                </div>
              </div>
              <div className="form-group">
                <input type="submit" value="Create Info" className="btn btn-primary" />
              </div>
            </form>
          </div>
          );
    }
}
 

