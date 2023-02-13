import { Carousel } from '@mantine/carousel'
import React from 'react'


export default function Video({info}: any) {
  return (
    <Carousel className='w-96 ml-96  border-black border-[1px] rounded-md' withIndicators >       
       {info.map((i: any) => (
        <Carousel.Slide key={i} className='snap-center w-96 bg-slate-100'>     
          <h1 className='text-center mt-2 mb-2'>{i.attributes.title}</h1>
          <iframe width="420" height="315"src={i.attributes.video_URL}></iframe>
          <div className='flex text-center h-20 items-center' >
            <p className='align-middle m-2'>{i.attributes.vide_description}</p>
            </div>
            
              
            </Carousel.Slide> 
      ))}
    
    </Carousel>
  )
}
