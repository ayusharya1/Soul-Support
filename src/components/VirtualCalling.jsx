import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function VirtualCalling() {
  const [value,setValues]=useState();
  const navigate=useNavigate();
  const handleJoinRoom=useCallback(()=>{
    navigate(`/room/${value}`)
  },[navigate,value])
  return (
    <div className='w-full h-[80vh] flex justify-center items-center'>
      <div className='w-[70vh] h-[45vh] border-2 border-zinc-100 text-xl font-[500] border-solid flex justify-center items-center flex-col gap-10 rounded-md'>
      <input className='w-100px p-3 text-black' value={value} onChange={e=>setValues(e.target.value)} type="text" placeholder='Enter room code' />
      <button className='w-[150px] p-2 rounded-md bg-[#FF5571] text-white' onClick={handleJoinRoom}>Join</button>
      </div>
    </div>
  )
}

export default VirtualCalling