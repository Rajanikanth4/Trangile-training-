import React from 'react';

class Homeclass extends React.Component{
    render(){
        return(
            <div>
                <h1 className="cc">Welcome to the Class Component</h1>
                <p> Training period for {this.props.period}</p>
            </div>
        )
    }
}
export default Homeclass;