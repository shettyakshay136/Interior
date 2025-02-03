import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import AppRoutes from './Approutes/index';
import './App.css'

const App = () => {
  const styles = {
    NavBar: {
      position:'absolute',
      paddingTop:5,
      paddingBottom:5,
      width:'99.2vw',
      paddingLeft:5,

    }
  };
  return (
  <Router>
    <div style={{height:'100%'}}>   
      <div style={styles.NavBar} >
        <Header/>
      </div>
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  </Router>
)};

export default App;
