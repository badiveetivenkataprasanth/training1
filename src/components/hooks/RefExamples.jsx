import React, {useEffect,useRef,useState} from 'react'
import VIDEO from "./video.mp4"
const RefExamples = () => {
    // let eleRef = useRef();
    // },[])

    const [play , setPlay] = useState(true);
    let VideoRef = useRef();
    console.log(VideoRef);
    let playORpause=()=>{
        // console.log("clicked");
        if(play == true){
            VideoRef.current.play();
            setPlay(false);
            console.log(play);
        }else{
            VideoRef.current.pause();
            setPlay(true);
            console.log(play)

        }
    }
    return(
        //! audio and video tags are empty tags they dont print any content, they only take the source
        <div>
            <video src={VIDEO} ref={VideoRef} onClick={playORpause}></video>
        </div>
    )
}
export default RefExamples;


 
