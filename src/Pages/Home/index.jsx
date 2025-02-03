import React from 'react';
import './styles.css'
import { GoArrowDown } from "react-icons/go";
import { HiOutlineArrowLongDown } from "react-icons/hi2";

import HowItsWorks from './HowItsWorks'
import Benefits from './Benefits'

import Aboutus from '../AboutUs'

const Index = () => {

    
    return (
        <main style={{backgroundColor:'#f5f5f6'}}>
            {/* <div className='home-container'>
                <div style={{width:'60%',gap:5}}>
                    <h1 className='home-text'>Looking for verified interior leads?</h1>
                    <h1 className='home-text'>Let us boost your ROI</h1>
                </div>
            </div>
            <HowItsWorks/>
            <Benefits/> */}
            <Aboutus/>

        </main>
    );
}

export default Index;
