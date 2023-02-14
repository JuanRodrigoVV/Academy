import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

export default function Modal3({info2} :any) {
  const [opened, setOpened] = useState(false);
  
  

  return (
    <div className='w-[200px] h-[250px]  bg-slate-100 backdrop-blur-md bg-opacity-10 flex-col align-middle justify-items-center rounded-xl overfl hover:translate-y-1'>
      
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={info2.title}
      >
     

         <h1>{info2.modal_text}</h1> 

      
      </Modal>

     
      <Group position="center">
        
      <div className='w-40 flex flex-col items-center text-center align-middle content-center rounded-xl'>
        
        <h1 className='text-white font-extralight'>{info2.title}</h1>
        <img className='rounded-3xl h-40 w-40'src={info2.modal_imageURL}
        />
        
        <Button className='bg-gradient-to-r opacity-40 text-white font-light from-gray-900 to-gray-700 m-4' onClick={() => setOpened(true)}>{info2.title}</Button>
        
        </div>
      </Group>
    </div>
  );
}