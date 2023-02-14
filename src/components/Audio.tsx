import { Carousel } from '@mantine/carousel'
import React from 'react'

export default function Audio({info}: any) {    

  return (
    <Carousel className='w-[480px] shadow-xl' withIndicators >
        
    
       {info.map((i: any) => (

        <Carousel.Slide key={i} className='snap-center w-[450px] justify-center  bg-slate-100 backdrop-blur-md bg-opacity-10 rounded-xl '>     
         <div className='h-8'>
          <h1 className='text-center mt-8  text-white font-extralight text-xl'>{i.attributes.title}</h1>

         </div>
          <div className='object-scale-down'>
          <img className='rounded-xl m-8 h-[350px] w-[420px]'
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

  
  