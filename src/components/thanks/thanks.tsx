import ChoysLogo from '../../assets/img/choys_logo.png';
import CuboIMG from '../../assets/img/cubo.png';
import RemolinoIMG from '../../assets/img/remolino.png';

const ThanksComponent = () => {

    return (
        <>
            <footer className='responsive-box'>
                <section className="logo">
                    <img src={ChoysLogo} alt="Logo Choys" width={200} height={200}/>
                </section>
                <section className="content">
                    <section className='header'>
                        <h2>
                            <span className='white'>La fuente del poder indica que</span>
                            <span className='purple'>El tuyo es ser...</span>
                        </h2>
                        <h3>LÍDER PODEROSO</h3>
                        <p>Sabés guiar y convencer a los demás y si alguien tiene que tomar una decisión en segundos… ese sos vos</p>
                        <p className='tabletMD'>¡Ya estás participando para llevar tu poder al próximo nivel en la comic con con tu Golden ticket!</p>
                    </section>
                    <section className='imgs'>
                        <section className='container_remolino'>
                            <img src={RemolinoIMG} alt="Remolino Imagen" className='remolino' />
                        </section>
                        <img src={CuboIMG} alt="Cubo de imagenes" className='cubo'/>
                    </section>
                    <section className='footer'>
                        <p>¡Ya estás participando para llevar tu poder al próximo nivel en la comic con con tu Golden ticket!</p>
                    </section>
                </section>
                <section className='space'></section>
            </footer>
        </>
    )

}

export default ThanksComponent;