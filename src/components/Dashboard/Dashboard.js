import React, {Component} from 'react';
import axios from 'axios';
import House from '../House/House';
import {Link} from 'react-router-dom';

export default class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            houses: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/api/houses').then(res => {
            this.setState({ houses: res.data })
        })
    }
    render(){
        const houseList = this.state.houses.map((e) =>{
            return(
                <div key={e.house_id}>
                    {console.log(e)}
                    <House property_name={e.property_name} address={e.address} city={e.city} state={e.state} zipcode={e.zip}/>
                </div>
            )
        })
        return(
            <div>
                <h1>Dashboard</h1>
                <Link to='/wizard'><button>Add New Property</button></Link>
                {houseList}
            </div>
        )
    }
}