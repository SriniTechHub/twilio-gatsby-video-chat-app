import React, { useEffect } from 'react'
import { navigate } from 'gatsby';
import useTwiliVideo from '../hooks/use-twilio-video'


const VideoDisplay = ({ roomID }) => {
    const { state, startVideo, leaveRoom, videoRef } = useTwiliVideo();

    useEffect(() => {
        if (!state.token) {
            navigate('/', { state: { roomName: roomID } })
        }
        if (!state.room) {
            startVideo();
        }
        window.addEventListener('beforeunload', leaveRoom);
        return () => {
            window.removeEventListener('beforeunload', leaveRoom)
        }
    }, [state, roomID, startVideo])
    return (<> <h1>Room: "{roomID}"</h1>
        {state.room && (<button className="leave-room" onClick={leaveRoom}>Leave Room</button>)}
        <div className="chat" ref={videoRef}></div> </>);
}

export default VideoDisplay;