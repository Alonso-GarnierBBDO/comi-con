import { useState } from 'react';

import Header from '../components/header/header';
import background from '../assets/img/choys_background.png';
//import Swirl from '../components/swirl/swirl';
import Form from '../components/form/form';
import Game from '../components/game/game';

function App() {

  const [removeHeader, setRemoveHeader] = useState(false);
  const [deleteHeader, setDeleteHeader] = useState(false);
  const [removeForm, setRemoveForm] = useState(false);
  const [deleteFooter, setDeleteFooter] = useState(false);

  const showForm = (show: boolean) => {
    setRemoveHeader(show);

    setTimeout(()=>{
      setDeleteHeader(true);
    }, 300);

  }

  const showGame = (show : boolean) => {
    setRemoveForm(show);
    setTimeout(()=>{
      setDeleteFooter(true);
    }, 300);
  }

  return (
    <>
      <main className='application' style={{
          backgroundImage: `url(${background})`
        }}>

        {
          !deleteHeader && 
          <>
            <section className={`${removeHeader && 'remove'} application`} style={{
              backgroundImage: `url(${background})`
            }}>
              <Header removeHeader={(e) => showForm(e)}/>
            </section>
          </>
        }

        {
          removeHeader && 
          <>
            <section className={`application absolute ${removeForm && 'remove'} ${deleteFooter && 'delete'}`} style={{
              backgroundImage: `url(${background})`
            }}>
              <Form removeForm={showGame}/>
            </section> 
          </>
        }

        {
          removeForm && 
          <>
            <section className={`application absolute`} style={{
              backgroundImage: `url(${background})`
            }}>
              <Game/>
            </section> 
          </>
        }

      </main>
      
    </>
  )
}

export default App 
