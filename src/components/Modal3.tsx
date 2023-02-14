import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

export default function Modal3({info2} :any) {
  const [opened, setOpened] = useState(false);
  
  

  return (
    <div className='w-[500px] flex gap-2 justify-items-center'>
      
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={info2.title}
      >
     

         <h1>{info2.modal_text}</h1> 

      
      </Modal>

     
      <Group position="center">
        
      <div className='w-50 flex flex-col items-center text-center align-middle content-center'>
        
        <h1>{info2.title}</h1>
        <img className='border-solid border-8 h-40 w-40'src={info2.modal_imageURL}
        />
        
        <Button className='bg-black' onClick={() => setOpened(true)}>{info2.title}</Button>
        
        </div>
      </Group>
    </div>
  );
}