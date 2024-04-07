type Props = {
    setItems: (value : string, questionNumber : string) => void
 };

function QuestionFour({ setItems }: Props){

    const question = (e : React.ChangeEvent<HTMLInputElement>, number: string) => {

        setItems(e.target.value, number);

    }

    return (
        <>
            <section className='option_1 options'>
                <label>
                    <input type="radio" name="option_1" value='A) armás un grupo de estudio con tus amigos para repasar más rápido y verla completa' onChange={e => question(e, 'question_four')}/>
                    <span>
                        <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.4111 11.5682C28.7445 13.4927 28.7445 18.304 25.4111 20.2285L7.59922 30.5122C4.26589 32.4367 0.0992263 30.0311 0.0992265 26.1821L0.0992274 5.61463C0.0992276 1.76563 4.26589 -0.639992 7.59923 1.28451L25.4111 11.5682Z" fill="#201978"/>
                        </svg>
                    </span>
                    <p>armás un grupo de estudio con tus amigos para repasar más rápido y verla completa</p>
                </label>
                <label>
                    <input type="radio" name="option_1" value='B) ¿estudiar? Hace dos semanas que tenés esa materia lista' onChange={e => question(e, 'question_four')}/>
                    <span>
                        <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.4111 11.5682C28.7445 13.4927 28.7445 18.304 25.4111 20.2285L7.59922 30.5122C4.26589 32.4367 0.0992263 30.0311 0.0992265 26.1821L0.0992274 5.61463C0.0992276 1.76563 4.26589 -0.639992 7.59923 1.28451L25.4111 11.5682Z" fill="#201978"/>
                        </svg>
                    </span>
                    <p>¿estudiar? Hace dos semanas que tenés esa materia lista</p>
                </label>
                <label>
                    <input type="radio" name="option_1" value='C) Dividís tu atención perfectamente para verla mientras repasás' onChange={e => question(e, 'question_four')}/>
                    <span>
                        <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.4111 11.5682C28.7445 13.4927 28.7445 18.304 25.4111 20.2285L7.59922 30.5122C4.26589 32.4367 0.0992263 30.0311 0.0992265 26.1821L0.0992274 5.61463C0.0992276 1.76563 4.26589 -0.639992 7.59923 1.28451L25.4111 11.5682Z" fill="#201978"/>
                        </svg>
                    </span>
                    <p>Dividís tu atención perfectamente para verla mientras repasás</p>
                </label>
            </section>
        </>
    )

}

export default QuestionFour;