import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

export class StepTwo extends Component{
    constructor(){
        super()

        this.state = {
            imageUrl: ''
        }
    }
    handleImageUrl(val){
        this.setState({imageUrl: val})
    }

    render(){
        return(
            <div>
                <h3>Image Url</h3>
                <input onChange={(e) => this.handleImageUrl(e.target.value)}/>
                <Link to='/wizard/stepone'><button>Previous</button></Link>
                <Link to='/wizard/stepthree'><button>Next</button></Link>
            </div>
        )
    }
}
function mapStateToProps( state ){
    const { imageUrl } = state;
    return{
       imageUrl
    }
}
export default connect( mapStateToProps)(StepTwo)
