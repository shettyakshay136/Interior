import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/AboutUs';
import Blog from '../Pages/Blog';
import Contact from '../Pages/ContactUs';
import Location from '../Pages/Locations';
import MyAccount from '../Pages/MyAccount';
import Privacypolicy from '../Pages/privacyPolicy';
import RefundPolicy from '../Pages/RefundPolicy';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/location" element={<Location />} />
    <Route path="/contactus" element={<Contact />} />
    <Route path="/MyAccount" element={<MyAccount />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/Privacypolicy" element={<Privacypolicy />} />
    <Route path="/RefundPolicy" element={<RefundPolicy />} />
  </Routes>
);

export default AppRoutes;
