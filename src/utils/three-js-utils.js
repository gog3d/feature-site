import * as Three from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export const loadGLTFModel = (scene, glbPath, options) => {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject)=>{
    const loader = new GLTFLoader();
    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = 'dinosaur';
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);
      
        obj.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
      
        resolve(obj);
      },
      undefined,
      (error) => {
        console.log(error);
        reject(error);
      }
    )
  });
};

export const  easeOutCirc = (x) => {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

