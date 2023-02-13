import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

export default function Modal2({info} :any) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={info.title}
      >
        {<h1>{info.modal_text}</h1>}
      </Modal>

      <Group position="center">
      <div className='w-40 flex flex-col items-center text-center align-middle content-center'>
      
        <h1>{info.title}</h1>
        <img className='border-solid border-8 h-40 w-40'src={info.modal_imageURL}/>
       
        <Button className='bg-black' onClick={() => setOpened(true)}>{info.title}</Button>
        
        </div>
      </Group>
    </>
  );
}