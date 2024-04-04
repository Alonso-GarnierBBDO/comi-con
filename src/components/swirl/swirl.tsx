import RemilinoImg from '../../assets/img/remolino.png';
import background from '../../assets/img/choys_background.png';

function Swirl() {

    return (
      <>
       <section className='swirls' style={{
        backgroundImage: `url(${background})`
      }}>
            <img src={RemilinoImg} alt="remolino_img" />
       </section>
      </>
    )

}
  
  export default Swirl;