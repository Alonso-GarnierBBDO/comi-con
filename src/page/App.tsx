import Swirl from "../components/swirl"
import background from '../assets/img/choys_background.png';

function App() {

  console.log(background);

  return (
    <>

      <section className="swirl_component" style={{
        //backgroundImage: `url(${background})`
      }}>
        <section className="swirl_relative">
          <Swirl/>
        </section>
      </section>

      <header>

      </header>
    </>
  )
}

export default App 
