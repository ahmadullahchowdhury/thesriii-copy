'use client'
import { Fragment } from 'react'

import ContactSection from 'view/page/ContactSection'
import About from 'view/page/home/about'

import Hero from 'view/page/home/hero'



const PageBody = () => {

    return (
        <Fragment>
            <Hero />
            <About />
            {/* <MyResume /> 
            <ContactSection /> */}
        </Fragment>
    )
}

export default PageBody
