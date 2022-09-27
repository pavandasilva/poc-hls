import React, { useEffect, useState } from "react"
import ReactHlsPlayer from 'react-hls-player';

export const Videos = () => {
  const playerRef = React.useRef<HTMLVideoElement | null>(null);
  const [linkStream, setLinkStream] = useState(()=> "https://d2we8z90utluth.cloudfront.net/files/hls/2/out.m3u8" );
  const [linkVideo, setLinkVideo] = useState(()=> "https://d2we8z90utluth.cloudfront.net/files/videos/405x720_72f3c1ca-05f3-4e39-a2a8-7021092a7f50.mp4" );
  const [muted, setMuted] = useState(true)


  useEffect(() => {
    console.log('onLoad')

    function fireOnVideoStart() {
      console.log('start')

      setMuted(false)
    }

    playerRef.current?.addEventListener('play', fireOnVideoStart);
  }, [playerRef]);


  /* useEffect(() => {
    console.log('useEffect')

    if(!playerRef.current?.currentTime){
      setIsPlaying(false);
      return;
    }

    setIsPlaying(playerRef.current?.currentTime > 1)
  }, [playerRef?.current?.currentTime]) */


  return (
    <div style={{display: 'flex', flexDirection: 'row', padding: '0px 30px'}}>  
      <div>{isPlaying ? 'isPlayng' : 'notIsPlayng'}</div>

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h2>Player HLS</h2>  
        <label>link .m3u8</label><input type="text" onChange={(event)=> setLinkStream(event.target.value)}/>
        <caption>Playing {linkStream}</caption>
        <div>
          <ReactHlsPlayer
            src={linkStream}
            muted={muted}
            autoPlay
            controls
            width="349" height="720"
            playerRef={playerRef}

            hlsConfig={{
              maxLoadingDelay: 2,
              minAutoBitrate: 0,
              lowLatencyMode: true,
            }}
          />
        </div> 
      </div>

      <div style={{display: 'flex', flexDirection: 'column', padding: '0px 30px'}}>
      <h2>Player HTML</h2>
        <label>link .mp4</label><input type="text" onChange={(event)=> setLinkVideo(event.target.value)}/>
        <caption>Playing {linkVideo}</caption>
        <div>
          <video width="349" height="720" controls autoPlay muted>
            <source 
              src={linkVideo} 
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  )
}