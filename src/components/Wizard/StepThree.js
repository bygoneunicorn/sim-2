import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {updateMonthlyMortgageAmount, updateDesiredMonthlyRent} from '../../ducks/reducer';
export class StepThree extends Component{
    constructor(){
        super()

        this.state = {
            monthlyMortgageAmount: '',
            desiredMonthlyRent: ''
        }
    }
    handleMortgageAmount(val){
        this.setState({monthlyMortgageAmount: val})
    }
    handleMonthlyRent(val){
        this.setState({desiredMonthlyRent: val})
    }


    render(){
        return(
            <div>
                {console.log(this.props)}
                <h3>Monthly Mortgage Amount</h3>
                <input onChange={(e) => this.handleMortgageAmount(e.target.value)}/>
                <h3>Desired Monthly Rent</h3>
                <input onChange={(e) => this.handleMonthlyRent(e.target.value)}/>
                <br/>
                <Link to='/wizard/steptwo'><button>Previous</button></Link>
                <Link to='/'><button>Complete</button></Link>
            </div>
        )
    }
}
function mapStateToProps( state ){
    const { monthlyMortgageAmount, desiredMonthlyRent } = state;
    return{
       monthlyMortgageAmount,
       desiredMonthlyRent
    }
}
export default connect( mapStateToProps, {updateMonthlyMortgageAmount, updateDesiredMonthlyRent})(StepThree)