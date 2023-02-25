import { useEffect, useRef, useState } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { loadGLTFModel, easeOutCirc}  from '../../utils/three-js-utils';

import styles from './figure-3dx.module.css';

const Figure3dx = () => {
  const refContainer = useRef();
  const [renderer, setRenderer] = useState();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
    //Renderer
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      const renderer = new THREE.WebGLRenderer({
        antialis: true,
        alpha: true
      });
      renderer.setPixelRatio(window.devicePixelRtion);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);
    //The controls and scene
      const scene = new THREE.Scene();
      const scale = 5.6;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.001,
        50000
      );
      const target = new THREE.Vector3(-0.5, 1.2, 0);
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      );
      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

      let req = null;
      let frame = 0;


      const animate = () => {
        req = requestAnimationFrame(animate);
        frame = frame <= 100 ? frame + 1 : frame;
        
        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
        
          camera.position.y = 10;
          camera.position.x = 
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z = 
            p.z * Math.cos(rotSpeed) + p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

      loadGLTFModel(scene, '/Dinosaur.glb', {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate();
        setLoading(false);
      });
      
        
        renderer.render(scene, camera);
      };
      
      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      }
    }
    
  }, []);
/*
  return (
    <div className={styles.figure_container}>
      <div className={styles.img} ref={refContainer}>
        hello
      </div>
     </div>
  );
  */
    return (
    <div
      style={{ height: "540px", width: "540px", position: "relative" }}
      ref={refContainer}
    >
      {loading && (
        <span style={{ position: "absolute", left: "50%", top: "50%" }}>
          Loading...
        </span>
      )}
    </div>
  );
  
  
}

export default Figure3dx;