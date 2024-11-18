import React from 'react'

function Card({data}) {
  console.log(data.image);
  
  return (
    <div className='w-[21vw] h-[57vh] bg-zinc-100 rounded-lg flex flex-col justify-items-start items-center overflow-hidden text-black relative'>
        <div className="image w-[100%] h-[53%]  rounded-md  overflow-hidden" style={{borderBottomRightRadius: "0px",borderBottomLeftRadius: "0px"}}>
                <img className="w-full h-full object-cover" src={data.image} alt="" />
            </div>
            <h1 className='mt-2 px-6 text-xl capitalize font-bold text-center leading-none'>{data.title}</h1>
            <p className='mt-4 font-semibold text-center'>{data.Description}</p>
            <a href={data.link} target='_blank' className='px-3 py-3 absolute bottom-[3%] capitalize rounded-md bg-red-400  text-xs text-white hover:scale-110'>Read more</a>
    </div>
  )
}

export default Card