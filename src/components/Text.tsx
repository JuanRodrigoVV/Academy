import React from 'react'
import { Carousel } from '@mantine/carousel'

export default function Text({info}: any) {
  return (
    <Carousel className='w-96' withIndicators >
        
    
       {info.map((i: any) => (

        <Carousel.Slide key={i} className='snap-center w-96 bg-slate-100'>     

          <h1 className='text-center mt-2 mb-2'>{i.attributes.title}</h1>
          <div className='object-scale-down'>
          <img className='h-96 w-96'
      src={i.attributes.audio_image}      
      />
      </div>
      
      <div className='bg-slate-100 rounded-b-xl flex'>
              
              <audio src={i.attributes.audio_URL} controls className='lg:w-full lg:ml-0 rounded-full sm:ml-8'/>
                
                  
            </div>
            </Carousel.Slide> 
      ))}
    
    </Carousel>
  )
}
