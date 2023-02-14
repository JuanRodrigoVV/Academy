import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

export default function Modal3({info2} :any) {
  const [opened, setOpened] = useState(false);
  
  

  return (
    <div className='w-[200px] h-[200px] gap-96 shadow-2xl bg-white bg-opacity-10 flex flex-col align-middle justify-items-center rounded-xl overfl hover:translate-y-1'>
      
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={info2.title}
      >
     

         <h1 className='text-justify'>{info2.modal_text}</h1> 

      
      </Modal>

     
      <Group position="center">
        
      <div className='w-40flex flex-col items-end rounded-xl bg-opacity-10 mt-6 '>
        
        {/* <h1 className='text-white font-extralight mt-2'>{info2.title}</h1> */}
       

        <img className='rounded-3xl h-40 w-30'src={info2.modal_imageURL}
        />

        
        
        </div>
        <Button className='mt-8 shadow-sm border-none text-white rounded-md font-bold bg-opacity-20 bg-slate-100 m-4 hover:text-white' onClick={() => setOpened(true)}>{info2.title}</Button>
      </Group>
    </div>
  );
}