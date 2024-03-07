import React from 'react';
import style from '../Styles/navbar.module.css';
function Headerpart() {
  return (
    <div className=' absolute top-[10%] left-0 right-0 mb-20 mt-28 '>
      <h3 className='introductiontext text-[2.75rem] leading-[119%] font-shojumaru text-crimson '>
        Introduction
      </h3>
      <div className={style.contextcontainer}>
        <div className=' headercontainer text-[1.5rem] leading-[119%] w-[33.688rem]    text-snow-100'>
          <p className='m-0'>{`We've all been in the mud once, and now we've decided to fight it out. `}</p>
          <p className='m-0'>{`Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future! `}</p>
          <p className='m-0'>{`Our mission is to empower everyone to share wealth and succeed. `}</p>
          <p className='m-0 text-snow-400'>read more...</p>
          <p className='m-0'>&nbsp;</p>
        </div>

        <img
          className=' headerimg w-[45%] h-fit object-cover'
          alt=''
          src='/brick-matrix-generate-a-logo-concept-that-visually-represents-t-9df3d56e2aaa42b8add901ba1b656499-2@2x.png'
        />
      </div>

      <div className='contentdocument absolute top-[69%] left-[10%] rounded-[21.92px] [background:linear-gradient(93.73deg,_#d51b46_11.92%,_#ee6910_83.65%)] overflow-hidden flex flex-row items-center justify-center py-[1.065rem] px-[1.331rem] gap-[0rem_0.709rem] w-fit '>
        Documents
      </div>
    </div>
  );
}

export default Headerpart;
