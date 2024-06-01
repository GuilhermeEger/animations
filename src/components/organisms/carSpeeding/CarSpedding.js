import React, {useEffect, useState, useRef} from "react";
import Speedometer from "../../molecules/speedometer/Speedometer"
import AnimationContent from "../../molecules/animationContent/AnimationContent";

function CarSpeding(){

    const [speed, setSpeed] = useState(0);
    const [isSpeeding, setIsSpeeding] = useState(false);
    const intervalIDRef = useRef(null);

    function clearExistingInterval() {
        if (intervalIDRef.current) {
          clearInterval(intervalIDRef.current);
          intervalIDRef.current = null;
        }
      }

    function checkSpeedUpBreakes(directionOfChangeSpeed){

        if(directionOfChangeSpeed == "stop")
            return false
        else if (isSpeeding)
            return true;
        else if (speed == 100 && isSpeeding)
            return true;
        else  if (speed == 0 && isSpeeding)
            return true;
        else if (speed == 0 && directionOfChangeSpeed == "decreasing")
            return true;
        else if (speed == 100 && directionOfChangeSpeed == "increasing")
            return true;
             
    }

    function carSmoothSpeed(speed){
        return speed/70
    }

    function changeCarSpeed(directionOfChangeSpeed){
        clearExistingInterval();

        const intervalID = setInterval(() => { 
            
            setSpeed(prevSpeed => {

                if (directionOfChangeSpeed === "stop") {
                    if (prevSpeed <= 1) {
                      clearInterval(intervalID);
                      setIsSpeeding(false);
                      return 0;
                    }
                    return prevSpeed - 1;
                  } else if (directionOfChangeSpeed === "increasing") {
                    if (prevSpeed >= 99) {
                      clearInterval(intervalID);
                      setIsSpeeding(false);
                      return prevSpeed;
                    }
                    return prevSpeed + 1;
                  } else if (directionOfChangeSpeed === "decreasing") {
                    if (prevSpeed <= 1) {
                      clearInterval(intervalID);
                      setIsSpeeding(false);
                      return prevSpeed;
                    }
                    return prevSpeed - 1;
                  }
                    
            });
          }, directionOfChangeSpeed == "stop" ? 0.5 : 20); 

          intervalIDRef.current = intervalID;

    }

    function speedHandle(directionOfChangeSpeed){

        if(checkSpeedUpBreakes(directionOfChangeSpeed))
            return

        if(!isSpeeding)
            setIsSpeeding(true)

        changeCarSpeed(directionOfChangeSpeed);

    }

    return(
    <div>
        <div>
            <AnimationContent animationStyle={{width:'400px'}} speedTrigged={(directionOfChangeSpeed) => speedHandle(directionOfChangeSpeed)} speedValue={carSmoothSpeed(speed)} changeSpeed={true} name="car" />
            <Speedometer width={'400px'} speedValue={speed} />
        </div>
    </div>
    )

}

export default CarSpeding;