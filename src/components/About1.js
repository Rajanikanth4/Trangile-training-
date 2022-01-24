import Aboutprop from "./Aboutprop";
function About(){
    return(
        <div>
            <h1 className="ff1" >Its About Me</h1>
      <div style={{float:"left"}}>
                <img className="image"src="images/about.jpg" alt="about" />
                <Aboutprop  className='div1'/>
            </div>
        </div>
    )
}

export default About;