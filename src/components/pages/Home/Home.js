import AnimationRender from "../../atoms/animationRender/AnimationRender";
import CarSpeding from "../../organisms/carSpeeding/CarSpedding";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{width:'200px', height:'200px'}}>
          {false ? <AnimationRender name="hello" /> : null}
          {false ? <AnimationRender name="welcome" /> : null}
          <CarSpeding />
        </div>
      </header>
    </div>
  );
}

export default Home;
