import { Carousel } from '@mantine/carousel'
import React from 'react'


export default function Video({info}: any) {
  return (
    <Carousel className='w-[700px] items-center  rounded-xl' withIndicators >       
       {info.map((i: any) => (
        <Carousel.Slide key={i} className='snap-center roundedxl items-center w-[700px] rounded-xl  bg-slate-100 backdrop-blur-md bg-opacity-20'>     
          <h1 className='text-center mt-2 mb-2 text-xl text-white font-light'>{i.attributes.title}</h1>
          <iframe className='m-2 rounded-xl shadow-lg' width="680" height="500"src={i.attributes.video_URL}></iframe>
          <div className='flex text-center h-20 items-center justify-center' >
            <p className='align-middle m-2 font-light text-white'>{i.attributes.vide_description}</p>
            </div>
            
              
            </Carousel.Slide> 
      ))}
    
    </Carousel>
  )
}
