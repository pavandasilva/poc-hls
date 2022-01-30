import React from "react"
import ReactHlsPlayer from 'react-hls-player';

export const Videos = () => {
  const playerRef = React.useRef<HTMLVideoElement | null>(null);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>    
      <div>
        <ReactHlsPlayer
          src="https://pavantest212.s3.us-east-2.amazonaws.com/file2/index.m3u8"
          autoPlay
          controls
          width="270" height="240"
          playerRef={playerRef}
          muted
        />
      </div>
      <video  width="270" height="240" controls autoPlay muted>
        <source src="https://pavantest212.s3.us-east-2.amazonaws.com/1.mp4" type="video/mp4"  />
      </video>
    </div>
  )
}