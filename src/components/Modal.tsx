import React from 'react'
import Modal3 from './Modal3'

export default function Modal({info} :any) {
  return (
    <div>
   <h1 className='text-white font-extralight text-5xl'>key concepts</h1>
   
   <div className='flex w-[680px] h-[500px] m-2 rounded-xl gap-8 shadow-lg  bg-slate-100 bg-opacity-10 items-center justify-center overflow-hidden mb-8'>
    
    {info.map((i: any) => (
      <div className='rounded-xl m-2 flex-col flex  w-[200px] ' key={i}>  
        <Modal3 info2={i.attributes}/>
      </div>
))}
        </div>
        </div>
  )
}

