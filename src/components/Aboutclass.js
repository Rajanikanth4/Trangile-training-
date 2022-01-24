import React,{Component} from 'react';

class Aboutclass extends Component{
    render(){
        return(
            <div>
                <h1 className="cc1">It is about class component</h1>
                <p>I am taking training in {this.props.training} </p>
            </div>
        )
    }
}

export default Aboutclass;