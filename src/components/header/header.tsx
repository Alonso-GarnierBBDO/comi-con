import { useState } from 'react';
import ChoysLogo from '../../assets/img/choys_logo.png';
import TicketImg from '../../assets/img/golden_ticket.png';
import Remolino from '../../assets/img/remolino.png';
import AudioSound from '../../helper/audio/audio';

type Props = {
    removeHeader: (show : boolean) => void
 };
  

function Header({ removeHeader }: Props) {

    const [ startText, setStartText ] = useState('Empecemos');

    const showForm = () => {

        AudioSound();

        removeHeader(true);

        setTimeout(() => {
            setStartText('Continuar');
        }, 300)

    }

    return (
      <>
        <header className='responsive-box'>
            <section className="logo">
                <img src={ChoysLogo} alt="Logo Choys" width={200} height={200}/>
            </section>
            <section className="content">
                <section className='power'>
                    <section className='title'>
                        <h1 title="¡Descubrí tu poder y participá por un golden ticket!">
                            <span className='big translate'>
                                <strong>¡Descubrí</strong>
                            </span>
                            <span className='big tu_poder'>
                                <strong>Tu poder</strong>
                            </span>
                            <span className='small participa'>
                                <strong>Y participá por un</strong>
                            </span>
                            <span className='small golden'>
                                <strong>Golden ticket!</strong>
                            </span>
                        </h1>
                    </section>
                    <button title={startText} onClick={showForm}>
                        <span className='title'>{startText}</span>
                        <span className='top_bottom'></span>
                    </button>
                </section>
                <section className='ticket'>
                    <section className='container_remolino'>
                        <img className='remolino' src={Remolino} alt="Remolino dan vueltas" />
                    </section>
                    <img className='ticket_img' src={TicketImg} alt="Golden Ticket" width={300} height={300}/>
                </section>
            </section>

            <section className="description">
                <p>Antes de empezar, recordá...</p>
                <h2>Un gran poder conlleva una gran responsabilidad</h2>
            </section>
            
        </header>
      </>
    )

}
  
  export default Header;