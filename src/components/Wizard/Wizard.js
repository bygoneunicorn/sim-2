import React, {Component} from 'react';
import { Link, Switch, Route} from 'react-router-dom';
import {StepOne} from './StepOne';
import {StepTwo} from './StepTwo';
import {StepThree} from './StepThree';

export default class Wizard extends Component{
    render(){
        return(

            <div>
                <Link to="/"><button>Cancel</button></Link>
                <Switch>
                    <Route component={StepOne} path='/wizard/stepone'/>
                    <Route component={StepTwo} path='/wizard/steptwo'/>
                    <Route component={StepThree} path='/wizard/stepthree'/>
                </Switch>
            </div>
        )
    }
}