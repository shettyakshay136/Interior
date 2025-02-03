import React from 'react';
import './index.css'


const Index = () => {
    return (
        <div className='main'>
            <h1 className='Header'>How its Works</h1>
            <div className='Container'>
                <div className='paragraph'>
                    <p className='Ptext'>The brightest consultants were once exclusive to a few major firms, making their expertise hard to access. Now, their community is open to you, providing direct access to top-tier talent and insights.</p>
                    <button className='button'>Buy Leads</button>
                </div>
                <div className='container-item'>
                    <div className='item'>
                        <h2 className='item-number'>1</h2>
                        <div>
                            <h2 className='item-h2'>Lead Generation & Verification</h2>
                            <div className='item-para'>
                                <p className='item-p-text'>We connect interior professionals with verified leads, helping designers grow their business.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{paddingTop:30}} className='item'>
                        <h2 className='item-number'>2</h2>
                        <div>
                            <h2 className='item-h2'>Lead Publishing For Sales </h2>
                            <div className='item-para'>
                                <p className='item-p-text'>Verified leads are limited to three interior designers, ensuring exclusive access to quality clients.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{paddingTop:30}} className='item'>
                        <h2 className='item-number'>3</h2>
                        <div>
                            <h2 className='item-h2'>Order Confirmation</h2>
                            <div className='item-para'>
                                <p className='item-p-text'>
                                Customers select the best design and estimate, while we provide top-quality interior leads.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
