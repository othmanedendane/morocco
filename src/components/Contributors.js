import React from 'react';

import { contributors } from '../data';

const Contributors = () => {
  return (
  <section className='section' id='sponsors'>
    <div className='container mx-auto'>
      <h2 className='section-title'>
        {contributors.title} <span className='dot'></span></h2>
      <p className='section-subtitle'>{contributors.subtitle}</p>
      <div className='flex flex-col gap-10 items-center lg:flex-row lg:gap-20 lg:flex-wrap lg:justify-center lg:px-[204px]'>
        {contributors.brands.map((brand, index)=> {
          return (
          <div className='max-w-[260px] h-24 flex items-center'>
            <img src={brand.image} alt='' />
          </div>
          );
        })}
      </div>
    </div>
    </section>
  );
};

export default Contributors;
