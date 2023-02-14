import { Carousel } from '@mantine/carousel'
import React from 'react'

export default function Audio({info}: any) {    

  return (
    <Carousel className='w-[500px]' withIndicators >
        
    
       {info.map((i: any) => (

        <Carousel.Slide key={i} className='snap-center w-[500px]  bg-slate-100 backdrop-blur-md bg-opacity-20 rounded-xl'>     

          <h1 className='text-center mt-2 mb-2 text-white font-extralight text-xl'>{i.attributes.title}</h1>
          <div className='object-scale-down'>
          <img className='h-[500px] w-[500px]'
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

  
  