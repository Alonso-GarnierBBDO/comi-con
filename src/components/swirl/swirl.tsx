import { useRef, useEffect } from 'react';

import Remolino from '../../helper/swirl/remolino';

import RemilinoImg from '../../assets/img/remolino.png';
import background from '../../assets/img/choys_background.png';

function Swirl() {

  const image = useRef(null);

  useEffect(()=> {

    const imageCurrent : HTMLElement | null = image.current;

    if(imageCurrent){
      Remolino(imageCurrent);
    }

  }, [])

  return (
    <>
      <section className='swirls' style={{
      backgroundImage: `url(${background})`
    }}>
          <img ref={image} src={RemilinoImg} alt="remolino_img"/>
      </section>
    </>
  );

}
  
  export default Swirl;