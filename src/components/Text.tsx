import React from 'react'
import { Carousel } from '@mantine/carousel'
import Modal from './Modal'
import Modal2 from './Modal2'

export default function Text({info}: any) {
  return (
    <Carousel className='w-[700px] flex items-center gap-8 overflow-auto' withIndicators >
        
    
       {info.map((i: any) => (

        <Carousel.Slide key={i} className='snap-center w-[700px] bg-slate-100'>     
            <img className='w-auto m-2'src={i.attributes.text_image}/>
            <h1 className='text-xl m-2'>{i.attributes.title}</h1>
            <div className='h-[350px] overflow-auto'>
              <p>{i.attributes.text_content}</p>
            </div>
            {/* <Modal info={i.attributes.modals.data[0].attributes}/> */}
            <Modal2 info={i.attributes.modals.data[0].attributes}/>

        </Carousel.Slide> 
      ))}
    
    </Carousel>
  )
}
