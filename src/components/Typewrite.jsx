import "./Typewrite.css"
import Typewriter from 'typewriter-effect';

const d = new Date().toString();


function Typewrite(){
    return (
      <>
      <div className="hallo">Last Login: {d} on ttys002</div>
      <div className="hello">elmin@Macbook-Pro-von-eko ~ % </div>
      <div className="typewriter">
        <Typewriter
          options={{
            strings: ["I'm a Developer!", "I'm the beste!", "I'm a King!"],
            autoStart: true,
            loop: true,
            pauseFor: 2500,
          }}
        />
      </div>
      </>
    )

}

export default Typewrite;