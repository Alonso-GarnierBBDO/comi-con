import { useState, useRef, useEffect } from 'react';

import Header from '../components/header/header';
import background from '../assets/img/choys_background.png';
import Form from '../components/form/form';
import Game from '../components/game/game';
import ThanksComponent from '../components/thanks/thanks';

import Ligtning from '../helper/lightning/lightning';

function App() {

  const [removeHeader, setRemoveHeader] = useState(false);
  const [deleteHeader, setDeleteHeader] = useState(false);
  const [removeForm, setRemoveForm] = useState(false);
  const [deleteFooter, setDeleteFooter] = useState(false);
  const [removeQuiz, setRemoveQuiz] = useState(false);
  const [deleteQuiz, setDeleteQuiz] = useState(false);

  const canva = useRef(null);

  useEffect(() => {

      const canvaCurrent : HTMLCanvasElement | null = canva.current;

      if(canvaCurrent){
        Ligtning(canvaCurrent);
      }

  }, []);

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

  const showThanks = (show: boolean) => {
    setRemoveQuiz(show);

    setTimeout(()=>{
      setDeleteQuiz(true);
    }, 300);

  }

  return (
    <>
      <main className='application' style={{
          backgroundImage: `url(${background})`
        }}>

          <canvas ref={canva}></canvas>

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
            <section className={`application absolute game ${removeQuiz && 'remove'} ${deleteQuiz && 'delete'}`} style={{
              backgroundImage: `url(${background})`
            }}>
              <Game removeQuiz={showThanks}/>
            </section> 
          </>
        }

        {
          removeQuiz && 
          <>
            <section className={`application absolute`} style={{
              backgroundImage: `url(${background})`
            }}>
              <ThanksComponent/>
            </section> 
          </>
        }

      </main>
      
    </>
  )
}

export default App 
