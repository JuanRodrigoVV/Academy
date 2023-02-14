import React from 'react'
import Modal3 from './Modal3'

export default function Modal({info} :any) {
  return (
    <div className='items-center justify-center text-center flex flex-col'>
   <h1 className='text-white font-extralight text-5xl mt-8'>Key Concepts</h1>
   
   <div className='flex w-[620px] h-[500px] m-4 rounded-xl gap-8  bg-slate-100 bg-opacity-0 items-center justify-center overflow-hidden mb-8'>
    
    {info.map((i: any) => (
      <div className='rounded-xl m-2 flex-col flex ' key={i}>  
        <Modal3 info2={i.attributes}/>
      </div>
))}
        </div>
        </div>
  )
}

