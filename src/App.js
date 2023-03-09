import React from 'react';
import AboutUs from './components/AboutUs/AboutUs';
import Chef from './components/Chef/Chef';
import FindUs from './components/FindUs/FindUs';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Laurels from './components/Laurels/Laurels';
import Navbar from './components/Navbar/Navbar';
import SpecialMenu from './components/SpecialMenu/SpecialMenu';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <AboutUs></AboutUs>
      <SpecialMenu></SpecialMenu>
      <Chef></Chef>
      <Intro></Intro>
      <Laurels></Laurels>
      <Gallery></Gallery>
      <FindUs></FindUs>
      <Footer></Footer>
    </div>
  );
};

export default App;


