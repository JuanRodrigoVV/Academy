import React from 'react'
import { Carousel } from '@mantine/carousel'
import Modal from './Modal'
import Modal2 from './Modal2'

export default function Text({info}: any) {
  return (
    <Carousel className='w-[700px] flex items-center gap-8 overflow-hidden align-middle text-center rounded-xl rounded-b-xl' withIndicators>
        
    
       {info.map((i: any) => (

        <Carousel.Slide key={i} className='w-[700px] bg-slate-100 backdrop-blur-md bg-opacity-20 rounded-2xl'>     
            <div className='w-[700px] flex flex-col justify-center h-[400px] items-center'>
              <img className='w-[400px] h-[380px] rounded-xl animate-wiggle 'src={i.attributes.text_image}/>
              </div>
            <h1 className='text-3xl m-2 text-white font-light'>{i.attributes.title}</h1>
            <div className='h-[350px] overflow-auto'>
              <p className='m-6 text-white font-extralight text-justify'>{i.attributes.text_content}</p>
            </div>
              <Modal info={i.attributes.modals.data}/> 
           
           
            {/* <Modal2 info={i.attributes.modals.data}/> */}

        </Carousel.Slide> 
      ))}
    
    </Carousel>
  )
}
