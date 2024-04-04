import background from '../assets/img/choys_background.png';
import Header from '../components/header/header';

function App() {

  console.log(background);

  return (
    <>

      <section className="swirl_component" style={{
        backgroundImage: `url(${background})`
      }}>
      </section>

      <Header/>
      
    </>
  )
}

export default App 
