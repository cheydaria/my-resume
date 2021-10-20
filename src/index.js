import { useState } from "react";
import ReactDOM from "react-dom";
import './Style.css'

function MyResume() {
  const [res, setRes] = useState({
    sectionContent: ""
  });
  
  function AboutCont() {
    return (<>
        <h3>About Me</h3>
        <p>A recent MS graduate from the GIT program at Arizona State University. 
           <br/> I am passionate about cohesive and inclusive design. 
           <br/>I aim to include more users’ experiences to create robust products.</p>
        </>)
}

const setAbout = () => {
  setRes(previousState => {
    return { ...previousState, sectionContent: <AboutCont/>
   
  }
  });
}

function SkillsCont () {
  return (<>
    <h3>Skills</h3>
    <h4>Programming</h4>
    <p>Seasoned in Object Oriented 
        <br/>Programming Languages: Java, PHP, HTML </p>
    <h4>Design and Wireframing</h4>
    <p>Proficient in the UX design process: identifying the problem, designing a solution, and delivering the product.
    <br/>Tools: Balsamiq, Figma, Adobe Photoshop
    </p>
    <h4>Research</h4>
    <p>Experienced in creating surveys, collecting and analyzing data.
    <br/>Tool: Qualtrics 
    </p>
    
    <h4>Project Management</h4>
    <p>Practiced in scheduling and workflows. 
    <br/>Tools: SmartSheet, Trello, Lucidchart 
    </p>
    </>);
}

const setSkills = () => {
  setRes(previousState => {
    return { ...previousState, sectionContent: <SkillsCont/>
   
  }
  });
}

function EduCont () {
  return <>
  <h3>Education</h3>
  <h4>Arizona State University • 2020</h4>
  <p>MS in Graphic Information Technology
  <br/>GPA: 4.00/4.00
  <br/>Highlight: Independent Research • May 2020
  <br/>Conducted research on the curb-cut effect and its impact on the experiences of video game players.
     </p>
  <h4>University of Texas at El Paso • 2016</h4>
  <p>GPA: 3.38/4.00
  <br/>Highlight: Presenter • October 2015
  <br/>Presented at the Third Annual Interdisciplinary Symposium “How UTEP Students’ Actions Improve Lives: Highlighting Advancements in General Health Promotion and Service to the Disability Community.”
  </p>
  </>
}
const setEdu = () => {
  setRes(previousState => {
    return { ...previousState, sectionContent: <EduCont/>
   
  }
  });
}

function ExpCont() {
  return <>
  <h3>Professional Experience</h3>
  <p>Head West Photos • Remote
  <br/> <b>Designer • December 2020—January 21</b>
  <br/>Designed and delivered wireframes and mockups in Figma, according to competitor research and stakeholder interviews, to guide the implementation of a portfolio website.
 </p>
 <p>Judgment and Decision Making Lab • El Paso
 <br/><b>Research Assistant • June 2017—September 18</b> 
Designed and pilot tested accessible surveys, using Qualtrics, to collect data from blind and visually impaired individuals for a research project.
<br/>Designed recruitment material, accessible to those with varying levels of vision, used to recruit participants at conferences.
<br/>Aided in the qualitative coding of data using thematic analysis to understand participant responses.
<br/>Co-authored IRB proposals and a vignette for a research project.
</p>
  </>
}
const setExp = () => {
  setRes(previousState => {
    return { ...previousState, sectionContent: <ExpCont/> 
  }
  });
}

function AwrdCont (){
  return <>
  <h3>Activities & Awards</h3>
  <p>Clarity Design Systems Conference
  <br/><b>Scholarship Recipient • October 2021</b>
 </p>
 <p>AccessSTEM Richard Tapia Conference
 <br/> <b>Scholarship Recipient • September 2020</b></p>

 <p>AccessSTEM
<br/><b>Member • July 2020—Present</b> 
<br/>Participate in research.
<br/>Attend Zoom seminars.</p>

<p>University of Texas at El Paso
<br/><b>Dean’s List • 2012, 2014</b></p>
  </>
}
const setAwrd = () => {
  setRes(previousState => {
    return { ...previousState, sectionContent: <AwrdCont/> 
  }
  });
}

  return (
    <div id = "page">
        <div id ="resumeHeader">
          <h1>Carmel Heydarian</h1>
          <h2>heydarianc@gmail.com • https://carmelheydarian.com </h2>
        </div>
        <div id ="buttons">
        <button className = "btn" id = "aboutMe" onClick={setAbout}>About Me</button>
        <button className = "btn" id = "skills" onClick={setSkills}>Skills</button>
        <button className = "btn" id = "edu" onClick={setEdu}>Education</button>
        <button className = "btn" id = "exp" onClick={setExp}>Professional Experience</button>
        <button className = "btn" id = "awrd" onClick={setAwrd}>Activities & Awards</button>
        </div>
        <div id = "content">
          {res.sectionContent}
          </div>
        </div>
  )
}


ReactDOM.render(<MyResume />, document.getElementById('root'));