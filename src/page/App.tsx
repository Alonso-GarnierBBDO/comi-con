import Header from '../components/header/header';
import background from '../assets/img/choys_background.png';
//import Swirl from '../components/swirl/swirl';
//import Form from '../components/form/form';

function App() {

  return (
    <>

      {/*<section className="swirl_component">
        <Swirl/>
      </section>*/}

      <main className='application' style={{
        backgroundImage: `url(${background})`
      }}>
        <Header/>
      </main>
      
    </>
  )
}

export default App 
