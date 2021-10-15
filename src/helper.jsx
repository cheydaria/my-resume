import React from 'react';
import ReactDOM from 'react-dom';

function AboutMe () {
  return (<>
    <h3>About Me</h3>
    <P>A recent MS graduate from the GIT program at Arizona State University. 
       <br/> I am passionate about cohesive and inclusive design. 
       <br/>I aim to include more users’ experiences to create robust products.</P>
    </>);
}

function Skills () {
    return (<>
      <h3>Skills</h3>
      <h4>Programming</h4>
      <P>Seasoned in Object Oriented 
          <br/>Programming Languages: Java, PHP, HTML </P>
      <h4>Design and Wireframing</h4>
      <P>Proficient in the UX design process: identifying the problem, designing a solution, and delivering the product.
      <br/>Tools: Balsamiq, Figma, Adobe Photoshop
      </P>
      <h4>Research</h4>
      <P>Experienced in creating surveys, collecting and analyzing data.
      <br/>Tool: Qualtrics 
      </P>
      
      <h4>Project Management</h4>
      <P>Practiced in scheduling and workflows. 
      <br/>Tools: SmartSheet, Trello, Lucidchart 
      </P>
      </>);
  }

function Garage() {
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <Car brand="Ford" />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));
