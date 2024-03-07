import React from 'react';

function Test() {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/2'>
        <img
          src='/rectangle-18@2x.png'
          alt=''
          className='w-full md:w-96 object-fill'
        />
      </div>
      <div className='md:w-1/2 md:pl-4'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          neque. Asperiores, libero!
        </p>
      </div>
    </div>
  );
}

export default Test;
