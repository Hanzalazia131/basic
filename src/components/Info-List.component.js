import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css"

const Info = props => (
    <tr>
    <td>{props.Info.Name}</td>
    <td>{props.Info.CNIC}</td>
    <td>{props.Info.DOB.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.Info._id}>edit</Link> | <a href="#" onClick={() => { props.deleteInfo(props.Info._id) }}>delete</a>
    </td>
  </tr>
)

export default class InfoList extends Component {
    constructor(props){
        super(props);

        this.deleteInfo = this.deleteInfo.bind(this);


        this.state = {Infos: []};        
    }

    componentDidMount(){
        axios.get('http://localhost:5000/infos')
        .then(response => {
            this.setState({Infos: response.data})
        })
        .catch((error) => {console.log(error)})
    }

    deleteInfo(id){
        axios.delete('http://localhost:5000/infos/delete/'+id)
        .then(res => console.log(res.data));
        
        this.setState({ 
        Infos: this.state.Infos.filter(el => el._id !== id)  
        });
    }

    InfosList() {
        return this.state.Infos.map(currentInfo => {
            return <Info Info={currentInfo} deleteInfo={this.deleteInfo} key={currentInfo._id}/>
        })
    }
    render() { 
        return (
            <div>
            <h3>Infos</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>CNIC</th>
                  <th>DOB</th>
                </tr>
              </thead>
              <tbody>
                { this.InfosList() }
              </tbody>
            </table>
          </div>
        );
    }
}
 
