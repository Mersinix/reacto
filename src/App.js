
import React from "react";
import './Style.css';
import Pico from "./imageInSrc.jpg";
// import Pica from "/imageInPublic.jpg";

function App() {
  return (
    <div className="App">
     <div style={{border:"solid 1px black",maxWidth:'100vw'}}>

        <h1 className={"title red"}>Your name here</h1><br/>        
        <img className={"img1"} src={Pico} alt="img"/><br/>        
        <img className={"img2"} src="/img/imageInPublic.jpg" alt="img"/>
      </div>
        <video style={{marginLeft:"25%",width:"50%",height:640}}controls>
          <source src={"myVideo.mp4"} type={"video/mp4"}/>
        </video>    
    </div>
  );
}

export default App;
