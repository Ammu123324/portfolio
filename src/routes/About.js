import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import Aboutcontact from '../components/Aboutcontact';

const about = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2  heading="ABOUT" text="I'm  a  friendly  Front- End  Developer"/>
      <Aboutcontact />
      <Footer />
    </div>
  )
}

export default about;
