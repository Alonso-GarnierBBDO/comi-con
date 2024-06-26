import { useState } from 'react';

import AudioSound from '../../helper/audio/audio';

import ChoysLogo from '../../assets/img/choys_logo.png';
import RemolinoImg from '../../assets/img/remolino.png';
import GameImg from '../../assets/img/game_mobile.png';
import QuestionOne from './questions/question_one';
import QuestionTwo from './questions/question_two';
import QuestionThree from './questions/question_three';
import QuestionFour from './questions/question_four';
import QuestionFive from './questions/question_five';
import QuestionSix from './questions/question_six';

import LoadingComponent from './load';

type Props = {
    removeQuiz: (show : boolean) => void
 };

function Game({ removeQuiz } : Props){

    const [questionText, setQuestionText] = useState('Llegás a la clase y el profe decide hacer un quiz sorpresa… entonces vos:');
    const [animationText, setAnimationText] = useState(false);
    const [optionsOne, setOptionsOne] = useState(true);
    const [optionsTwo, setOptionsTwo] = useState(false);
    const [optionsThree, setOptionsThree] = useState(false);
    const [optionsFour, setOptionsFour] = useState(false);
    const [optionsFive, setOptionsFive] = useState(false);
    const [optionsSix, setOptionsSix] = useState(false);
    const [loading, setLoading] = useState(false);

    const saveQuestion = (value : string, questionNumber : string) => {
        localStorage.setItem(questionNumber, value);

        AudioSound();

        if(questionNumber == 'question_one'){
            setAnimationText(true);
            animationForm('Estás jugando online y te piden que saqués YA la basura… vos:');
            setOptionsOne(false);
            setOptionsTwo(true);
        }else if(questionNumber == 'question_two'){
            setAnimationText(true);
            animationForm('vas con el tiempo justo a tu primera entrevista de trabajo y te encontrás con tu vecina que habla mucho… vos decidís:');
            setOptionsTwo(false);
            setOptionsThree(true);
        }else if(questionNumber == 'question_three'){
            setAnimationText(true);
            animationForm('sale una nueva temporada de tu serie favorita el día antes de tu examen final… vos:');
            setOptionsThree(false);
            setOptionsFour(true);
        }else if(questionNumber == 'question_four'){
            setAnimationText(true);
            animationForm('Tu crush se acerca a tu grupo de amigos… entonces vos:');
            setOptionsFour(false);
            setOptionsFive(true);
        }else if(questionNumber == 'question_five'){
            setAnimationText(true);
            animationForm('Ya viene tu festival de música preferido pero no has ahorrado lo suficiente… entonces:');
            setOptionsFive(false);
            setOptionsSix(true);
        }else if(questionNumber == 'question_six'){
            setAnimationText(true);
            animationForm('GUARDANDO DATOS...');
            setOptionsSix(false);
            setLoading(true);

            setTimeout(()=> {
                removeQuiz(true);
            }, 3000)
            
        }

    }

    const animationForm = (text: string) => {
        setTimeout(() => {
            setQuestionText(text);
            setAnimationText(false);
        }, 300)
    }


    return (
        <>
            <section className="game">
                
                <section className='logo'>
                    <img src={ChoysLogo} alt="Logo Choys" width={200} height={200}/>
                </section>
                <section className='content_items'>
                    <section className='container_remolino'>
                        <img src={RemolinoImg} alt="Remolino" className='remolino'/>
                    </section>
                    <img src={GameImg} alt="Fondo del videojuego" className='game_img'/>
                    
                    <section className='content responsive-box'>

                        <section className='title'>
                            <h2 className={`${animationText && 'animate'}`}>{questionText}</h2>
                        </section>

                        <section className='text'>
                            <form className={`${animationText && 'animate'}`}>
                                {
                                    optionsOne && <QuestionOne setItems={saveQuestion}/>
                                }

                                {
                                    optionsTwo && <QuestionTwo setItems={saveQuestion}/>
                                }

                                {
                                    optionsThree && <QuestionThree setItems={saveQuestion}/>
                                }

                                {
                                    optionsFour && <QuestionFour setItems={saveQuestion}/>
                                }

                                {
                                    optionsFive && <QuestionFive setItems={saveQuestion}/>
                                }

                                {
                                    optionsSix && <QuestionSix setItems={saveQuestion}/>
                                }

                                {
                                    loading && <LoadingComponent/>
                                }


                            </form>
                        </section>

                        <hr />

                    </section>

                </section>

            </section>
        </>
    )

}

export default Game;