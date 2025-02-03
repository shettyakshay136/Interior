import React from 'react';
import './styles.css'
import { GoArrowDown } from "react-icons/go";
import { HiOutlineArrowLongDown } from "react-icons/hi2";

import HowItsWorks from './HowItsWorks'
import Benefits from './Benefits'
import Location from './Location-H'

import Aboutus from '../AboutUs'

const Index = () => {

    
    return (
        <main style={{backgroundColor:'#f5f5f6'}}>
            <div className='main-bg'>
                <div className='home-container'>
                    <div className='home-container-text' style={{width:'100%',gap:5}}>
                        <div style={{width:'60%',marginLeft:'14rem'}}>
                            <h1 className='home-text'> Looking for Verified Initerior Leads?</h1>
                        </div>
                        <h1 className='home-text-1'>Let us amplify your ROI and drive exceptional growth.</h1>
                    </div>
                </div>
            </div>
            <HowItsWorks/>
            <Location/>
            <Benefits/>
            {/* <Aboutus/> */}

        </main>
    );
}

export default Index;
