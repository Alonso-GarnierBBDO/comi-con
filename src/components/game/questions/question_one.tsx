type Props = {
    setItems: (value : string, questionNumber : string) => void
 };

function QuestionOne({ setItems }: Props){

    const question = (e : React.ChangeEvent<HTMLInputElement>, number: string) => {

        setItems(e.target.value, number);

    }

    return (
        <>
            <section className='option_1 options'>
                <label>
                    <input type="radio" name="option_1" value='A) te unís con varios compañeros para convencer al profe de que lo posponga' onChange={e => question(e, 'question_one')}/>
                    <span>
                        <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.4111 11.5682C28.7445 13.4927 28.7445 18.304 25.4111 20.2285L7.59922 30.5122C4.26589 32.4367 0.0992263 30.0311 0.0992265 26.1821L0.0992274 5.61463C0.0992276 1.76563 4.26589 -0.639992 7.59923 1.28451L25.4111 11.5682Z" fill="#201978"/>
                        </svg>
                    </span>
                    <p>te unís con varios compañeros para convencer al profe de que lo posponga</p>
                </label>
                <label>
                    <input type="radio" name="option_1" value='B) No te preocupás porque con leer dos veces tus apuntes… la vas a romper' onChange={e => question(e, 'question_one')}/>
                    <span>
                        <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.4111 11.5682C28.7445 13.4927 28.7445 18.304 25.4111 20.2285L7.59922 30.5122C4.26589 32.4367 0.0992263 30.0311 0.0992265 26.1821L0.0992274 5.61463C0.0992276 1.76563 4.26589 -0.639992 7.59923 1.28451L25.4111 11.5682Z" fill="#201978"/>
                        </svg>
                    </span>
                    <p>No te preocupás porque con leer dos veces tus apuntes… la vas a romper</p>
                </label>
                <label>
                    <input type="radio" name="option_1" value='C) Te escapás de la clase sin que el profe te vea y llegás con una justificación la clase siguiente' onChange={e => question(e, 'question_one')}/>
                    <span>
                        <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.4111 11.5682C28.7445 13.4927 28.7445 18.304 25.4111 20.2285L7.59922 30.5122C4.26589 32.4367 0.0992263 30.0311 0.0992265 26.1821L0.0992274 5.61463C0.0992276 1.76563 4.26589 -0.639992 7.59923 1.28451L25.4111 11.5682Z" fill="#201978"/>
                        </svg>
                    </span>
                    <p>Te escapás de la clase sin que el profe te vea y llegás con una justificación la clase siguiente</p>
                </label>
            </section>
        </>
    )

}

export default QuestionOne;