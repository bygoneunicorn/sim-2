import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {updateName, updateAddress, updateCity, updateUsState, updateZipcode} from '../../ducks/reducer';
console.log(updateName, updateAddress, updateCity, updateUsState, updateZipcode)

export class StepOne extends Component{
    // constructor(){
    //     super()

    //     this.state = {
    //         name: '',
    //         address: '',
    //         city: '',
    //         usState: '',
    //         zipcode: ''
    //     }
    //     this.handleAddHouse = this.handleAddHouse.bind( this )
    // }
    // handleName(val){
    //     this.setState({name: val})
    // }
    // handleAddress(val){
    //     this.setState({address: val})
    // }
    // handleCity(val){
    //     this.setState({city: val})
    // }
    // handleState(val){
    //     this.setState({usState: val})
    // }
    // handleZipcode(val){
    //     this.setState({zipcode: val})
    // }
    // handleAddHouse(){
    //     const{ name, address, city, usState, zipcode } = this.state;

    //     axios.post('http://localhost:4000/api/houses', { name, address, city, usState, zipcode })
    //         .then( res => {
    //             console.log('All good')
    //         })
    // }
    render(){
        const {updateName, updateAddress, updateCity, updateUsState, updateZipcode} = this.props
        return(
            <div>
                {console.log(this.props)}
                <h3>Name</h3>
                <input onChange={(e) => updateName(e.target.value)}/>
                <h3>Address</h3>
                <input onChange={(e) => updateAddress(e.target.value)} />
                <h3>City</h3>
                <input onChange={(e) => updateCity(e.target.value)}/>
                <h3>State</h3>
                <input onChange={(e) => updateUsState(e.target.value)}/>
                <h3>Zipcode</h3>
                <input onChange={(e) => updateZipcode(e.target.value)} /><br/>

                <Link to='/'><button>Previous</button></Link>
                <Link to='/wizard/steptwo'><button>Next</button></Link>
            </div>
        )
    }
}
function mapStateToProps( state ){
    console.log( state )
    const { name, address, city, usState, zipcode } = state;
    return{
        name,
        address,
        city,
        usState,
        zipcode
    }
}
console.log(updateName('payload'))
export default connect(mapStateToProps, {updateName})(StepOne)