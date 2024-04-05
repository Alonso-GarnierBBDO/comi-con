import ChoysLogo from '../../assets/img/choys_logo.png';
import TicketImg from '../../assets/img/golden_ticket.png';

function Header() {

    return (
      <>
        <header className='responsive-box'>
            <section className="logo">
                <img src={ChoysLogo} alt="Logo Choys" width={200} height={200}/>
            </section>
            
            <section className="content">
                <section className='power'>
                    <h1 title="¡Descubrí tu poder y participá por un golden ticket!">
                        <span className='big'>
                            <strong>¡Descubrí</strong>
                        </span>
                        <span className='big'>
                            <strong>Tu poder</strong>
                        </span>
                        <span className='small'>
                            <strong>Y participá por un</strong>
                        </span>
                        <span className='small'>
                            <strong>Golden ticket!</strong>
                        </span>
                    </h1>
                    <button title='Empecémos'>
                        <span className='title'>Empecémos</span>
                        <span className='top_bottom'></span>
                    </button>
                </section>
                <section className='ticket'>
                    <img src={TicketImg} alt="Golden Ticket" width={300} height={300}/>
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