import React from 'react'
import Modal3 from './Modal3'

export default function Modal({info} :any) {
  return (
   <>
    {info.map((i: any) => (
      <div key={i}>  
        <Modal3 info2={i.attributes}/>
      </div>
))}
        </>
  )
}

