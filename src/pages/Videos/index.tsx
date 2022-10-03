import React, {  useState } from "react"
import ReactHlsPlayer from 'react-hls-player';

export const Videos = () => {
  const playerRef = React.useRef<HTMLVideoElement | null>(null);
  const [linkStream, setLinkStream] = useState(()=> "https://d2we8z90utluth.cloudfront.net/files/videos/c68de2de-4a00-4b6c-97dd-34c4fa4ed09a/405x720_c68de2de-4a00-4b6c-97dd-34c4fa4ed09a.m3u8" );
  const [linkVideo, setLinkVideo] = useState(()=> "https://d2we8z90utluth.cloudfront.net/files/videos/405x720_72f3c1ca-05f3-4e39-a2a8-7021092a7f50.mp4" );

  return (
    <div style={{display: 'flex', flexDirection: 'row', padding: '0px 30px'}}>  
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h2>Player HLS</h2>  
        <label>link .m3u8</label><input type="text" onChange={(event)=> setLinkStream(event.target.value)}/>
        <caption>Playing {linkStream}</caption>
        <div>
          <ReactHlsPlayer
            src={linkStream}
            muted
            playsInline
            autoPlay={true}
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
          <video width="349" height="720" controls autoPlay muted  playsInline>
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