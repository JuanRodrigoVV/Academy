import React from 'react'


export default function Modal({info} :any) {
  return (
    <div className='w-20 flex-1'>
             {/* <h1>{JSON.stringify(info)}</h1> */}
        <div>
        <h1>{info.title}</h1>
        </div>
        <div>
        <img className='w-auto m-2 h-20'src={info.modal_imageURL}/>
        </div>
        

 

    </div>
  )
}

