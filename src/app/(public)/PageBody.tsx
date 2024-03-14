'use client'
import { Fragment } from 'react'

import ContactSection from 'view/page/ContactSection'
import Conference from 'view/page/home/Conference'
import Slider from 'view/page/home/Slider'
import About from 'view/page/home/about'

import Hero from 'view/page/home/hero'
import Members from 'view/page/home/members'




const PageBody = () => {

    return (
        <Fragment>
            <Hero />
            <About />
            <Conference />
            <Members />
            
            {/* <MyResume /> 
            <ContactSection /> */}
        </Fragment>
    )
}

export default PageBody
