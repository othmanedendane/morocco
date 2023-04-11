import React from 'react';
import { useState, useEffect } from 'react';

import { RiArrowUpSLine } from 'react-icons/ri';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(()=> {
    window.addEventListener('scroll', () => {
      return window.scrollY > 200 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
        <button onClick={()=> scrollToTop()} className='btn bg-accent w-14 h-14 fixed bottom-[10%] right-[10%] z-50 transition-all'>
    <div className='text-3xl'>
      <RiArrowUpSLine />
    </div>
  </button>
    )
  );
};

export default ScrollToTop;
