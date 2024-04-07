type Props = {
    setItems: (value : string, questionNumber : string) => void
 };

function QuestionTwo({ setItems }: Props){

    const question = (e : React.ChangeEvent<HTMLInputElement>, number: string) => {

        setItems(e.target.value, number);

    }

    return (
        <>
            <section className='option_1 options'>
                <label>
                    <input type="radio" name="option_1" value='A) convencés a alguien más para que lo haga a cambio de un favor en el futuro' onChange={e => question(e, 'question_two')}/>
                    <span>
                        <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.4111 11.5682C28.7445 13.4927 28.7445 18.304 25.4111 20.2285L7.59922 30.5122C4.26589 32.4367 0.0992263 30.0311 0.0992265 26.1821L0.0992274 5.61463C0.0992276 1.76563 4.26589 -0.639992 7.59923 1.28451L25.4111 11.5682Z" fill="#201978"/>
                        </svg>
                    </span>
                    <p>convencés a alguien más para que lo haga a cambio de un favor en el futuro</p>
                </label>
                <label>
                    <input type="radio" name="option_1" value='B) seguís jugando mientras das argumentos de por qué es mejor sacar la basura más tarde' onChange={e => question(e, 'question_two')}/>
                    <span>
                        <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.4111 11.5682C28.7445 13.4927 28.7445 18.304 25.4111 20.2285L7.59922 30.5122C4.26589 32.4367 0.0992263 30.0311 0.0992265 26.1821L0.0992274 5.61463C0.0992276 1.76563 4.26589 -0.639992 7.59923 1.28451L25.4111 11.5682Z" fill="#201978"/>
                        </svg>
                    </span>
                    <p>seguís jugando mientras das argumentos de por qué es mejor sacar la basura más tarde</p>
                </label>
                <label>
                    <input type="radio" name="option_1" value='C) Calculás el tiempo exacto que dura la pantalla de búsqueda para sacar la basura y volver a tiempo' onChange={e => question(e, 'question_two')}/>
                    <span>
                        <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.4111 11.5682C28.7445 13.4927 28.7445 18.304 25.4111 20.2285L7.59922 30.5122C4.26589 32.4367 0.0992263 30.0311 0.0992265 26.1821L0.0992274 5.61463C0.0992276 1.76563 4.26589 -0.639992 7.59923 1.28451L25.4111 11.5682Z" fill="#201978"/>
                        </svg>
                    </span>
                    <p>Calculás el tiempo exacto que dura la pantalla de búsqueda para sacar la basura y volver a tiempo</p>
                </label>
            </section>
        </>
    )

}

export default QuestionTwo;