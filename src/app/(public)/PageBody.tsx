'use client';
import { Fragment } from 'react';
import ContactUs from 'view/page/Contact';

import KeyNoteSpeaker from 'view/page/home/KeyNoteSpeaker';

import About from 'view/page/home/about';

import Hero from 'view/page/home/hero';
import Members from 'view/page/home/members';
import Summits from 'view/page/home/summits';

const PageBody = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <KeyNoteSpeaker />
      <Summits />
      <Members />
      <ContactUs bg_color={'#F5F5F5'}/>
    </Fragment>
  );
};

export default PageBody;
