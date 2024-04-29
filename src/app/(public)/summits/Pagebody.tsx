'use client';
import { Fragment } from 'react';
import ContactUs from 'view/page/Contact';
import KeyNoteSpeaker from 'view/page/home/KeyNoteSpeaker';
import About from 'view/page/home/about';

import Hero from 'view/page/home/hero';
import Members from 'view/page/home/members';
import Summits from 'view/page/home/summits';
import SummitsSlider from 'view/ui/shared-component/component/summitSlider';

const PageBody = () => {
  return (
    <Fragment>
      <div className='hidden'>
        <KeyNoteSpeaker />
      </div>
      <SummitsSlider />
    </Fragment>
  );
};

export default PageBody;
