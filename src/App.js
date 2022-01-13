import './App.scss';
import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TweenMax, Power3, Bounce,Back } from 'gsap'
import im4 from './assets/im4.jpg'
import im1 from './assets/im1.jpg'
import im2 from './assets/im2.jpg'
import im3 from './assets/im3.jpg'
import im5 from './assets/im5.jfif'

import Box from './components/Box.js';
import { RGB_PVRTC_2BPPV1_Format } from 'three';

function App() {
  let logoItem = useRef(null)
  let b1 = useRef(null)
  useEffect(() => {
    TweenMax.from(logoItem,
      2, {
      height: 0,
      width: 0,
      opacity: 0,
      marginLeft: 0,
      ease: Back.easeInOut,
      scale : 2,
      y: -500
    })
  }, [])
  return (
    <div>
      <div className="App">
        <img ref={el => { logoItem = el }} src={im3} />
        <Canvas>
          <ambientLight />
          {/* add space */}
          <pointLight position={[10, 10, 4]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
      </div>
    </div>

  );
}

export default App;
