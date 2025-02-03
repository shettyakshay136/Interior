import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import Navbar from '../NavBar'

const Index = () => {

    const styles = {
        // NavBar: {
        //   borderRadius:16,
        //   position:'absolute',
        //   paddingTop:5,
        //   paddingBottom:5,
        //   width:'99.2vw',
        //   paddingLeft:5,
        //   paddingRight:5,
        //   overflow:'hidden'
    
        // }
      };
    return (
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.1)',borderRadius:8,backdropFilter: 'blur(20px)',paddingLeft:8 , paddingRight:8}}>
            <div style={{justifyContent:'space-between',flexDirection:'row',display:'flex',alignItems:'center',}}>
                <div>
                    <h1 style={{ fontWeight:'400',color:'#3A3A3A'}}>Buy Interiors</h1>
                </div>
                <div style={{flexDirection:'row',display:'flex',alignItems:'center',gap:20 }}>
                    <FaRegHeart size={24}/>
                    <div>
                        <input
                            type="text"
                            placeholder="Search products"
                            // value={searchTerm}
                            // onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                            width: "90%",
                            padding: "10px",
                            fontSize: "14px",
                            border: "1px solid #666",
                            borderRadius:24,
                            backgroundColor:'transparent',
                            placeholderColor: 'black',
                            color: 'black',
                            }}
                        />
                    </div>
                    {/* <IoSearchOutline size={24}/> */}
                </div>
            </div>
            <div style={{justifyContent:'center',display:'flex',top:32,position:'absolute',left:0,right:0,paddingBottom:5}}>
                <Navbar/>
            </div>
            
        </div>
    );
}

export default Index;
