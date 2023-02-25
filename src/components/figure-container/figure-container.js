import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import SceneInit from '../../lib/SceneInit';
import styles from './figure-container.module.css';
import Pic from '../../image/oleg.png';

const FigureContainer = () => {

  const [pic, setPic] = useState(Pic);
  const picRef = useRef(null);
/*
  useEffect(() => {

const loader = new THREE.CubeTextureLoader();
//  loader.setPath( 'textures/cube/pisa/' );

const textureCube = loader.load( [
pic, pic, pic, pic, pic, pic
] );

const material4 = new THREE.MeshBasicMaterial( { color: 0xff00ff, envMap: textureCube } );


    const texture = new THREE.TextureLoader().load( pic );
    
    const test = new SceneInit('pic', 300, 300, 10);
    test.initialize();
    test.animate();

    const colMat = [
      new THREE.MeshBasicMaterial( { map: texture }),
      new THREE.MeshBasicMaterial( { map: texture }),
      new THREE.MeshBasicMaterial( { color: 0x00ff0f }),
      new THREE.MeshBasicMaterial( { color: 0x00ff0f }),
//      new THREE.MeshBasicMaterial( { map: texture }),
      new THREE.MeshBasicMaterial( { map: texture }),
      new THREE.MeshBasicMaterial( { color: 0x02ff0f }),
      ];
    const geometry = new THREE.BoxGeometry( 5, 5, 5 );
//    const material = new THREE.MeshBasicMaterial( { envMap: texture } );
    const material = new THREE.MeshBasicMaterial( new THREE.Color(0x0ffff0) );
//    const cube = new THREE.Mesh( geometry, material );
//const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
  const cube = new THREE.Mesh( geometry, colMat);


    test.scene.add( cube );
   
    const test2 = new SceneInit('pic2', 300, 300, 10);
    test2.initialize();
    test2.animate();

    const cilMat = [
      new THREE.MeshBasicMaterial( { map: texture }),
      new THREE.MeshBasicMaterial( { color: 0x00ff0f }),
      ];
    //const geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
    const geometry2 = new THREE.CylinderGeometry( 2, 1, 4, 50 );
    const material2 = new THREE.MeshBasicMaterial( { map: texture } );
    const cube2 = new THREE.Mesh( geometry2, cilMat );
    test2.scene.add( cube2 );
   
  }, [pic]);

*/
  const addPicFileHandleer = (event) => {
    if(!event.target.files[0] && event.target.files.length === 0) {
      alert('inter file');
      return;
    } else {
      setPic(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className={styles.figure_container}>
      <canvas id='pic' className={styles.pic}/>
      <canvas id='pic2' className={styles.pic}/>
      <form>
        <fieldset>
          <legend>Add Pic</legend>
          <p>
            <input type='file' onChange={addPicFileHandleer}/>
            <label>file png</label>
          </p>
        </fieldset>
      </form>
      <img ref={picRef} alt={'picure'} src={pic} className={styles['img-pic']} ></img>
     </div>
  );
}
export default FigureContainer;