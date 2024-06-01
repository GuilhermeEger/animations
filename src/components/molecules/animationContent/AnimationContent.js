import React, { useRef, useState, useEffect } from "react";
import MuiButton from "../../atoms/muiComponentes/button/Button";
import AnimationRender from "../../atoms/animationRender/AnimationRender";

function AnimationContent({ name, changeSpeed, speedTrigged, speedValue = 1, animationStyle }) {

    useEffect(() => {
        animationRef.current.setSpeed(speedValue);
    },[speedValue])

    const animationRef = useRef(null);

    return (
      <div>
        <div style={{textAlign:'center'}}>
          <AnimationRender style={animationStyle} animationRef={animationRef} name="car"/>
          <div style={{display:"flex", justifyContent:'center', gap:'10px'}}>
            {changeSpeed ? <MuiButton onClick={() => speedTrigged("increasing")}>SpeedUp</MuiButton> : null}
            {changeSpeed ? <MuiButton onClick={() => speedTrigged("decreasing")}>SpeedDown</MuiButton> : null}
            {changeSpeed ? <MuiButton onClick={() => speedTrigged("stop")}>Stop</MuiButton> : null}
          </div>
        </div>
      </div>
    );
}
 
export default AnimationContent;