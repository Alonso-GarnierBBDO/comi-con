import { useState } from 'react';

import Header from '../components/header/header';
import background from '../assets/img/choys_background.png';
//import Swirl from '../components/swirl/swirl';
import Form from '../components/form/form';

function App() {

  const [removeHeader, setRemoveHeader] = useState(false);

  const showForm = (show: boolean) => {
    setRemoveHeader(show);
  }

  return (
    <>
      <main className='application' style={{
          backgroundImage: `url(${background})`
        }}>

        <section className={`${removeHeader && 'remove'} application`} style={{
          backgroundImage: `url(${background})`
        }}>
          <Header removeHeader={(e) => showForm(e)}/>
        </section>

        {
          removeHeader && 
          <>
            <section className={`application absolute`} style={{
              backgroundImage: `url(${background})`
            }}>
              <Form/>
            </section> 
          </>
        }

      </main>
      
    </>
  )
}

export default App 
