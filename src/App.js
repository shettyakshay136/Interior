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
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        <Header />
      </div>

      <main className='main-app'>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  </Router>
)};

export default App;
