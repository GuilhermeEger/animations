import AnimationRender from "../../atoms/AnimationRender/AnimationRender";
import CarSpeding from "../../organisms/CarSpeeding/CarSpedding.js";
import TypeAnimation from "../../atoms/TypeAnimation/TypeAnimations";
import "./Home.css";
import getGreetings from "../../../utils/HelperFunctions.js";
import { useEffect } from "react";

function Home() {

  return (
    <div className="App">
      <div style={{marginTop:"20px"}}>
        <TypeAnimation phrases={[getGreetings(), "This is a simple project to practice some skills.","Take a look on code on github!"]} />
      </div>
        <div>
          <div>
            <AnimationRender name="hello" />
            <AnimationRender name="welcome" />
          </div>
          <CarSpeding />
        </div>
    </div>
  );
}

export default Home;
