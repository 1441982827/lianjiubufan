import React, {useRef,useEffect} from 'react'
import StyledPlayer from './StyledPlayer';
import movie from 'images/sport/player/movie.mp4'



const VideoPlayer = (props) => {

const playerDom = useRef();
useEffect(
    () => {
         props.play 
                   ?playerDom.current.play()
                   :playerDom.current.pause()
        if(props.volume){
            playerDom.current.volume=props.volume
        }
    }, [props])

    return (
        <StyledPlayer>
                <video
                 width={props.width||"100%"}
                 ref={playerDom}
                 src={props.movie|| movie}
                 preload={ props.preload ||"auto"}
                 controls= {props.controls?true:false}
                 loop  = {props.controls?true:false}
                >
                      
                </video>
        </StyledPlayer>
    );
}

export default VideoPlayer;

