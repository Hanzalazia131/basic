import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useParams } from "react-router-dom";

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }
export default class EditInfo extends React.Component {
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
    // componentDidMount(){
    //     axios.get('http://localhost:5000/infos/'+this.props.match.params.id)
    //     .then(response => {
    //         this.setState({ 
    //             Name: response.data.Name,
    //             CNIC: response.data.CNIC,
    //             DOB: new Date(response.data.DOB)
    //         });
    //     })
    // }
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
        
        axios.post('http://localhost:5000/Infos/Update/'+this.props.match.params.id, Info)
        .then(res=> console.log(res.data))
        
        window.location = '/';
    }
    render() { 
        return (
            <div>
            <h3>Update Info</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                <label>Name: </label>
                <input  type="text"
                    className="form-control"
                    value={this.state.Name}
                    onChange={this.onChangeName}
                    />
              </div>
              <div className="form-group"> 
                <label>CNIC: </label>
                <input  type="text"
                    
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
                <input type="submit" value="Update Info" className="btn btn-primary" />
              </div>
            </form>
          </div>
          );
    }
}
 

