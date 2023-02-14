import { Carousel } from '@mantine/carousel'
import React from 'react'


export default function Video({info}: any) {
  return (
    <Carousel className='w-[700px] items-center  rounded-xl' withIndicators >       
       {info.map((i: any) => (
        <Carousel.Slide key={i} className='snap-center roundedxl items-center w-[700px] rounded-xl  bg-slate-100 backdrop-blur-md bg-opacity-20'>     
          <iframe className=' rounded-xl shadow-lg rounded-b-none' width="700" height="500"src={i.attributes.video_URL}></iframe>
          <h1 className='text-center mt-4  text-xl text-white font-bold'>{i.attributes.title}</h1>
          <div className='flex text-center h-20 items-center justify-center' >
            <p className='align-middle ml-2 mr-2 mt-[-10px] font-light text-white'>{i.attributes.vide_description}</p>
            </div>
            
              
            </Carousel.Slide> 
      ))}
    
    </Carousel>
  )
}
