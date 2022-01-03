import './App.css';
import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TweenMax, Power3 } from 'gsap'
import Box from './components/Box.js';

function App() {
  return (
    <div className="App">
      <Canvas>
      
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>,
    </div>
  );
}

export default App;
