import React from 'react'
import './landingPage.css'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import ContactUs from './components/ContactUs/ContactUs'

function LandingPage() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <ContactUs />
        </>
    )
}

export default LandingPage