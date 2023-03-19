import React, { useState, useMemo, useRef, useEffect } from 'react';
import styles from './app.module.css';
import * as THREE from 'three';
import { Canvas, useThree } from '@react-three/fiber';
import "cropperjs/dist/cropper.css";
import Cropper from 'cropperjs';
import {Rnd} from 'react-rnd';


import CameraController from '../camera-controller/camera-controller';
import ModelContainer from '../model-container/model-container';
import PaperCup from '../geometry/paper-cup/paper-cup';
//import PaperCupRegroup from '../geometry/paper-cup-regroup/paper-cup-regroup';

//import * as htmlToImage from 'html-to-image';
//import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

import html2canvas from 'html2canvas';

import pic from  '../../media/oleg.png';
import pic2 from  '../../media/photo.png';

import RndComponent from '../rnd-component/rnd-component';

const App = () => {
  const imageElement = useRef();
  const imageCropped = useRef();
  const imageCropper = useRef();
  const imageHtml = useRef();

  const [imgDestination, setImageDistination]  = useState('');

  const [imgUrl, setImgUrl] = useState(null);
  const [src, setSrc] = useState(pic);

  const [rotate, setRotate] = useState(true);
  const [controlPanel, setControlPanel] = useState(false);

  const [mouseUp, setMouseUp] = useState(true)


  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [positionZ, setPositionZ] = useState(-0.7);

  const [rotationX, setRotationX] = useState(-0.5);
  const [rotationY, setRotationY] = useState(0);
  const [rotationZ, setRotationZ] = useState(0);

//  const [scale, setScale] = useState(0);
  const [scaleX, setScaleX] = useState(0.3);
  const [scaleY, setScaleY] = useState(0.3);
  const [scaleZ, setScaleZ] = useState(0.3);

  const [positionCameraX, setPositionCameraX] = useState(0);
  const [positionCameraY, setPositionCameraY] = useState(0);
//  const [positionCameraZ, setPositionCameraZ] = useState(32);

  const [positionCameraZ, setPositionCameraZ] = useState(5);
  const [fovCamera, setFovCamera] =useState(75);
  const [nearCamera, setNearFovCamera] =useState(0.1);
  const [farCamera, setFarCamera] =useState(1000);


  const onDown = () => {
//    console.log('down');
    setMouseUp(false)
  };

  const onUp= () => {
//    console.log('down');
    setMouseUp(true)
  };



  const rotateControl = () => {
    rotate ? setRotate(false) : setRotate(true);
  }

  const controlPanelViewer = () => {
    controlPanel ? setControlPanel(false) : setControlPanel(true);
  }


//  const src = require('../../media/oleg.png');

  const addPicture = (e) => {
    if(!e.target.files[0] && e.target.files.length === 0) {
      alert('inter file');
    } else {
      setSrc(URL.createObjectURL(e.target.files[0]));
    }
  }
  useEffect(() => {
    if (imageElement.current?.cropper && typeof src !== 'undefined') {
      imageElement.current.cropper.reset().clear().replace(src);
    }
  }, [src]);

  useEffect(() => {
    const cropper = new Cropper(imageElement.current, {
      aspectRatio: 1,
      crop: () => {
        const canvas = cropper.getCroppedCanvas();
        setImageDistination(canvas.toDataURL('image/png'));
      }
    });
  }, [])

  useEffect(() => {
    imageCropped.current.ondragstart = () => {return false};
  }, []);

  const addImage = async () => {
    const element = imageCropper.current;
    const canvas = await html2canvas(element);
//    canvas.rotate((45 * Math.PI) / 180);
    const data = canvas.toDataURL('image/jpg');
    setImgUrl(data);
}

//
  const position = useMemo(() => {
    return [positionX, positionY, positionZ];
  }, [positionX, positionY, positionZ]);

  const positionCamera = useMemo(() => {
//    return { fov: fovCamera, nearCamera: 0.1, farCamera: 1000, position: [positionCameraX, positionCameraY, positionCameraZ]}
    return { fov: fovCamera, nearCamera: 0.1, farCamera: 1000, position: [positionCameraX, positionCameraY, positionCameraZ]}
  }, [fovCamera, farCamera, nearCamera, positionCameraX, positionCameraY, positionCameraZ]);


  const scale = useMemo(() => {
    return [scaleX, scaleY, scaleZ];
  }, [scaleX, scaleY, scaleZ]);


  const rotation = useMemo(() => {
    const factor = Math.PI;
    return [rotationX * factor, rotationY * factor, rotationZ * factor];
  }, [rotationX, rotationY, rotationZ]);

//

  return (
    <div className={styles.app}>
      <div className={styles.model}>
        <Canvas 
          onPointerDown={onDown} 
          onPointerUp={onUp} 
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5]}}
        >
          <ambientLight />
          <spotLight intensity={0.3} position={[5, 10, 50]} />
          <CameraController />
          <primitive object={new THREE.AxesHelper(10)} />
          <ModelContainer rotate={false} >
            <PaperCup
              positionCamera={positionCamera} 
              position={position} 
              rotation={rotation}
              scale={scale}
              imgUrl={imgUrl}
              />
          </ModelContainer>
        </Canvas>
      </div>
      <button onClick={addImage} className={styles.input_file_btn}>add picture</button>
{/* <div ref={imageHtml}><img src={pic2} alt='image'/> </div>*/}
      <div className={styles.cropper}>
        <div 
          ref={imageCropper} 
          className={styles.img_preview_container}
        >
          <Rnd
            size={{ width: 'auto',  height: 'auto' }}
            bounds="parent"
            onDrag={e => {
              e.stopImmediatePropagation();
            }}
          >
            <img ref={imageCropped} 
              className={styles.img_preview}
              src={imgDestination}
              alt='imageDestination'
            />
          </Rnd>
        </div>
      </div>
      
      <div className={styles.img_container}>
        <img ref={imageElement} src={src} alt='Sourse' />
      </div>

      <label className={styles.input_file}>
        <input type='file'
           onChange={addPicture}
           accept='image/png'
        />
        <span className={styles.input_file_btn}>add image</span>
        <span className={styles.input_file_text}>image type .png</span>
      </label>
    </div>
  );
};

export default App;
