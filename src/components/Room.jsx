import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
function Room() {
    const {roomID}=useParams();
    const meeting=async(element)=>{
        const appID=2081570225;
        const serverSecret="c51d12523489952d4ce03dc9a6e1a794";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomID,Date.now().toString(),"User Name");

        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall,
            }
        })
    }
  return (
    <div className='text-white w-full h-screen flex items-center justify-center'>
        <div className="w-full h-[99vh]" ref={meeting}/>
    </div>
  )
}

export default Room