import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'

import styles from './canvas-container.module.css'; 

const CanvasContainer = ({children}) => {
  console.log("in app")
  return (
    <Canvas shadows camera={{ position: [-1, 0.7, 0.5], fov: 80, far: 1000, near: 0.5 }}>
      <Environment preset="forest" />
      {children}
      <OrbitControls  autoRotate/>
    </Canvas>
  )
}

export default CanvasContainer;

