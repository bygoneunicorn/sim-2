import React, {Component} from 'react';
import axios from 'axios';
import House from '../House/House';
import {Link} from 'react-router-dom';
import './Dashboard.css';

export default class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            houses: []
        }
        this.handleDeleteHouse = this.handleDeleteHouse.bind( this )
    }
    componentDidMount(){
        axios.get('http://localhost:4000/api/houses').then(res => {
            this.setState({ houses: res.data })
        })
    }
    anotherFunc(){

    }

    handleDeleteHouse(id){
        console.log()
        axios.delete(`http://localhost:4000/api/houses/:${id}`).then(res => {
            console.log('Successfully deleted house')
        })
    }
    render(){
        const houseList = this.state.houses.map((e) =>{
            return(
                <div key={e.house_id}>
                    <House id={e.house_id} property_name={e.property_name} address={e.address} city={e.city} state={e.state} zipcode={e.zip} deleteHouse={this.handleDeleteHouse}/>
                </div>
            )
        })
        return(
            <div className="main">
                <h1 className="dashboard-title">Dashboard</h1>
                <Link to='/wizard/stepone'><button>Add New Property</button></Link>
                {houseList}
            </div>
        )
    }
}