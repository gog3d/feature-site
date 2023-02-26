import { useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import styles from './app.module.css'; 

import CanvasContainer from '../canvas-container/canvas-container';
import Cup from '../cup/cup';
import { MeshStandardMaterial } from 'three'

const App = () => {
  console.log("in app")
  const ColorGreen = new MeshStandardMaterial({color: 0x40E0DF});
  const [color, setColor]= useState(ColorGreen)

  const colorHandler = (e) => {
    console.log(e.target.value);
    const color = new MeshStandardMaterial({color: e.target.value});
    setColor(color);
  };
  
  return (
    <div className={styles.app}>
      <p>Cups</p>
      <div className={styles.canvas_container}>
        <CanvasContainer>
          <Cup colorBody={color} />
        </CanvasContainer>
        <input type='color' onChange={colorHandler}/>
        <label>Color</label>
      </div>
    </div>
  )
}

export default App;
