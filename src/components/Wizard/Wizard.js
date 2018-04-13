import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Wizard extends Component{
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
        this.handleAddHouse = this.handleAddHouse.bind( this )
    }
    handleName(val){
        this.setState({name: val})
    }
    handleAddress(val){
        this.setState({address: val})
    }
    handleCity(val){
        this.setState({city: val})
    }
    handleState(val){
        this.setState({state: val})
    }
    handleZipcode(val){
        this.setState({zipcode: val})
    }
    handleAddHouse(){
        const{ name, address, city, state, zipcode } = this.state;

        axios.post('http://localhost:4000/api/houses', { name, address, city, state, zipcode })
            .then( res => {
                console.log('All good')
            })
    }
    render(){
        return(
            <div>
                <h1>Wizard</h1>
                <Link to='/'><button>Cancel</button></Link>
                <h3>Name</h3>
                <input onChange={(e) => this.handleName(e.target.value)}/>
                <h3>Address</h3>
                <input onChange={(e) => this.handleAddress(e.target.value)} />
                <h3>City</h3>
                <input onChange={(e) => this.handleCity(e.target.value)}/>
                <h3>State</h3>
                <input onChange={(e) => this.handleState(e.target.value)}/>
                <h3>Zipcode</h3>
                <input onChange={(e) => this.handleZipcode(e.target.value)} /><br/>
                <Link to='/'><button onClick={this.handleAddHouse}>Complete</button></Link>
            </div>
        )
    }
}