import React from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App