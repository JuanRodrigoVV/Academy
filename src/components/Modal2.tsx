import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

export default function Modal2({info} :any) {
  const [opened, setOpened] = useState(false);
  const [info2, setInfo2] = useState();
  

  return (
    <div className='w-[500px] flex gap-2 justify-items-center'>
      
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={info.title}
      >
     

         <h1>{JSON.stringify(info)}</h1> 

      
      </Modal>

      {info.map((i: any) => (
      <Group key={i} position="center">
        
      <div className='w-40 flex flex-col items-center text-center align-middle content-center'>
        
        <h1>{i.attributes.title}</h1>
        <img className='border-solid border-8 h-40 w-40'src={i.attributes.modal_imageURL}
        />
        
        <Button className='bg-black' onClick={() => setOpened(true)}>{i.attributes.title}</Button>
        
        </div>
      </Group>))}
    </div>
  );
}