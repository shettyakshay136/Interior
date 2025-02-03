import React from 'react';
import './NavBar.css'
const Index = () => {
    // const styles = {
    //     ul: {
    //         fle
    //     }
    //   };

    return (
        <div style={{}}>
            <ul style={{flexDirection:'row',display:'flex',textDecoration:'none',listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginRight: '20px' }}>
                <a className='name' href="#home" style={{
                    textDecoration: 'none', 
                    color: 'inherit', 
                }}>Home</a>
            </li>
            <li style={{ marginRight: '20px' }}>
                <a className='name' href="#about" style={{
                    textDecoration: 'none',
                    color: 'inherit'
                }}>About</a>
            </li>
            <li style={{ marginRight: '20px' }}>
                <a className='name' href="#services" style={{
                    textDecoration: 'none',
                    color: 'inherit'
                }}>Locations</a>
            </li>
            <li style={{ marginRight: '20px' }}>
                <a className='name' href="#contact" style={{
                    textDecoration: 'none',
                    color: 'inherit'
                }}>Refund Policy</a>
            </li>
            {/* <li style={{ marginRight: '20px' }}>
                <a href="#contact" style={{
                    textDecoration: 'none',
                    color: 'inherit'
                }}>My Account</a>
            </li> */}
            <li style={{ marginRight: '20px' }}>
                <a className='name' href="#contact" style={{
                    textDecoration: 'none',
                    color: 'inherit'
                }}>Privacy Policy</a>
            </li>
            {/* <li style={{ marginRight: '20px' }}>
                <a href="#contact" style={{
                    textDecoration: 'none',
                    color: 'inherit'
                }}>Contact Us</a>
            </li> */}
            {/* <li>
                <a href="#contact" style={{
                    textDecoration: 'none',
                    color: 'inherit'
                }}>Refund Policy</a>
            </li> */}
            </ul>
            
        </div>
    );
}

export default Index;
