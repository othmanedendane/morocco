import React from 'react';

import { contact } from '../data';
import Logo from '../assets/img/mor.svg';
import Social from './Social';
import audio from '../assets/img/five.mp3'

const Contact = () => {
  return (
  <section className='section before:content-ornament before:flex before:justify-center
  lg:before:mb-[44px]' id='appréciation'>
    <div className='container mx-auto'>
      <h2 className='section-title text-accent'>
        {contact.title}</h2>
      <p className='section-subtitle'>{contact.subtitle}</p>
      <div className='max-w-[200px] lg:max-w-xs mx-auto mb-28'>
        <img className='w-full' src={Logo} alt='' />
      </div>
      <div className='flex justify-center max-w-[200px] lg:max-w-xs mx-auto mb-28'>
      <audio src={audio} controls></audio>
      </div>
      <div className='flex justify-center'>
        <Social />
      </div>
    </div>
  </section>
  );
};

export default Contact;
