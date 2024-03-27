'use client';
import { Fragment } from 'react';

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
      {/* <Conference /> */}
      <KeyNoteSpeaker />
      <Summits />
      <Members />

      {/* <MyResume /> 
            <ContactSection /> */}
    </Fragment>
  );
};

export default PageBody;
