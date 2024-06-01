import React from "react";
import Lottie from "lottie-react";
import animationsMap from "../../../utils/AnimationMap";

function AnimationRender(props){

    return(
        <div>
          <Lottie style={props.style} lottieRef={props.animationRef} animationData={animationsMap[props.name]} />
        </div>
    )

}

export default AnimationRender;