import React from "react";

function About(props){
        return(
            <div>
                <h1 className="ff1">About React js</h1>
                <p>I am working in the company {props.company}</p>
            </div>
        )
    }
export default About;