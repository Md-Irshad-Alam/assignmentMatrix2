import React, { useState } from 'react';
import style from '../Styles/navbar.module.css';
import '../Styles/common.css';

function Navbar() {
  const [state, setstate] = useState(false);
  const clickfunction = () => {
    setstate(!state);
  };
  return (
    <div>
      <div className={style.smallscreen}>Y.Y</div>
      <div className='logotext absolute  top-[3.5rem] left-[12.375rem] text-[2rem] text-center'>
        Saviour
      </div>
      <img
        className=' logoimg absolute top-[1.688rem] left-[5.5rem] w-[6.625rem] h-[7.313rem] object-cover'
        alt=''
        src='/logo-savior-red-copy-1@2x.png'
      />
      <div className=' navtab absolute top-[2.875rem] left-[calc(50%_-_258px)] rounded-xl bg-gray-100 w-fit pr-5 pl-5 flex flex-row items-start justify-start py-[1rem] px-[1.5rem] box-border gap-[0rem_1.5rem] text-center'>
        <div className='relative z-[0]'>Home</div>
        <div className='relative z-[1]'>IDO</div>
        <div className='relative z-[2]'>Tokenomics</div>
        <div className='relative z-[3]'>Roadmap</div>
        <div className='relative z-[4]'>Coming Soon</div>
      </div>
      <div className='leftbuttonconnect absolute top-[3.375rem] left-[90%] font-semibold rounded-[15.44px] [background:linear-gradient(93.73deg,_#ed0137_20.07%,_#f05734_75.59%)] w-[7.938rem] h-[2.375rem] overflow-hidden text-[0.75rem] font-poppins text-center '>
        <p className='t mt-[9px] '> Connect Wallet</p>
      </div>
    </div>
  );
}

export default Navbar;
