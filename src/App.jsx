import React from 'react';
import './app.css';

import { Feature, Navbar, Cta, Brand  } from './components'
import { Blog,Footer, Header, Possibility, WhatGPT3 } from './conatiner'

export default function App() {
  return (
    <div className='App'>
      <div className="gradient">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Feature/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/> 
    </div>
  )
}
