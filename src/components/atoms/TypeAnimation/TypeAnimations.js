import { useEffect } from 'react';
import { TypeAnimation as LibraryTypeAnimation } from 'react-type-animation';
 
function TypeAnimation({phrases, style}){

  useEffect(() => {
    mountPrashe();
  },[])

  function mountPrashe(){

    const propPhrase = phrases;
    let sequence = [];

    for (let i = 0; i < propPhrase.length; i++) {
        sequence.push(propPhrase[i])
        sequence.push(1500)
    }

    return sequence;

  }

  const defaultStyle = {fontSize: '2em', display: 'inline-block'};

  return (
    <LibraryTypeAnimation
      sequence={mountPrashe()}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={style || defaultStyle}
    />
  );
};

export default TypeAnimation;