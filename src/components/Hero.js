import React from 'react';

import Social from './Social';
import Man from '../assets/img/man_banner.png';
import log from '../assets/img/fed.png';


const Hero = () => {
  return (
  <section className='pt-[100px] bg-heroText bg-contain bg-center lg:bg-top'
  id='home'>
    <div className='container mx-auto xl:px-[100px]'>
      <div className='lg:flex text-center lg:text-left'>
        {/* hero left side */}
        <div className='flex-1 lg:max-w-[558px] mt-12'>
        <span className='w-3 h-3 md:w-5 md:h-5 inline-block bg-accent rounded-full ml-2'></span> <span className='w-3 h-3 md:w-5 md:h-5 inline-block bg-accent rounded-full ml-2'></span>
          
          <h2 className='text-[24px] lg:text-[32px] font-semibold text-accent mb-4 lg:mb-5'>FRMF</h2>
          <h1 className='text-[60px] md:text-[80px] lg:text-[100px] leading-none font-semibold mb-6'>Équipe <br/> 
          <span className='lg:pl-[70px]'>Nationale</span>
          
          </h1>
          <p className='mb-[35px] text-lg lg:text-xl text-center lg:text-left'>
          l'équipe nationale de football qui représente le Royaume du Maroc dans les compétitions et les tournois internationaux. 
          L'équipe nationale marocaine est organisée et supervisée par la Fédération Royale Marocaine de Football.</p>
            <div className='mx-auto max-w-min lg:m-0 relative z-10'>
              <Social />
            </div>
            
        </div>
        {/* hero right side */}
        <div className='flex-1 flex justify-center lg:justify-end relative xl:after:content-arrow xl:after:w-96 xl:after:h-96 xl:after:block
        xl:after:absolute xl:after:top-2/4 xl:after:-left-96'>
          <img className='z-20' src={log} alt='' />
          <div className='w-[350px] h-[400px] sm:w-[553px] sm:h-[753px] bg-blob bg-contain bg-no-repeat mx-auto absolute top-[85px] z-10'></div>
        </div>
      </div>
    </div>
    </section>
    );
};

export default Hero;
