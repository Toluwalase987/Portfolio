import "./css/Info.css";
import him from '../images/HIM.jpg'
import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
 
export default function Info({homeRef}) {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(()=>{
    const img = new Image()
    img.onload = ()=>{
      setImageLoaded(true)
    }
    img.src = him
  }, [him])

  return (
    <div className="info" ref={homeRef} id="home"> 
      <div className="info-text">
        <div className="name">
          <h4>Hey there 👋🏾 </h4>
          <h5>i'm</h5>
          <h1>Toluwalase Kunle-John</h1> 
          <p>A</p>
          <h3>Front-End Developer</h3>  
          <p>&</p>
        </div>

        <div className="capability">
          <p>
            I'm capable of developing eye-pleasing, responsive and interactive
            websites/webapps from scratch<br/> &<br/> transforming them into modern
            user-friendly<br/> web experiences.
          </p>
        </div>
      </div>

      <div className="info-img">
        {imageLoaded ? (
          <img src={him} alt="" />
        ) : (
          <Blurhash 
            hash="LMI}959F_09b~4Rkt6j]NF%M9at3"
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}
      </div>
    </div>
  );
}
