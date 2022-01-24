import React from 'react';
function Home(props){
    return(
        <div>
            <h1 className="ff">Welcome to my Funtion Component</h1>
            <p>My Favourite platform  is {props.technology}</p>
        </div>
    )
}
export default Home;