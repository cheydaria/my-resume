import { useState } from "react";
import ReactDOM from "react-dom";


function MyResume() {
 
  function AboutCont() {
    return (<>
        <h3>About Me</h3>
        <p>A recent MS graduate from the GIT program at Arizona State University. 
           <br/> I am passionate about cohesive and inclusive design. 
           <br/>I aim to include more users’ experiences to create robust products.</p>
        </>);
}
  const aboutMe = () => {
    return (<>
      <h3>About Me</h3>
      <p>A recent MS graduate from the GIT program at Arizona State University. 
         <br/> I am passionate about cohesive and inclusive design. 
         <br/>I aim to include more users’ experiences to create robust products.</p>
      </>);
  }

  return (
    <div id = "page">
        <div id ="resumeHeader">
          <h1>Carmel Heydarian</h1>
          <h2>heydarianc@gmail.com • https://carmelheydarian.com </h2>
        </div>
        <div id ="buttons">
        <button className = "btn" id = "aboutMe" onClick={AboutCont}>About Me</button>
        </div>
        </div>
      
  )
}

ReactDOM.render(<MyResume />, document.getElementById('root'));