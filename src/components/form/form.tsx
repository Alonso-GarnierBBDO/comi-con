//import ChoysChocolateImage from '../../assets/img/choys_chocolate.png';
import ChoysLogo from '../../assets/img/choys_logo.png';
import RemolinoImg from '../../assets/img/remolino.png';
import AudioSound from '../../helper/audio/audio';


type Props = {
    removeForm: (show : boolean) => void
 };

const Form = ({ removeForm }: Props) => {

    const validateEmail = (email : string) : RegExpMatchArray | null => {
        return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };

    const save_form = (e : React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const form : HTMLFormElement = e.target as HTMLFormElement;
        const inputsSelectsTags : NodeListOf<HTMLInputElement | HTMLSelectElement> = form.querySelectorAll('input, select');
        let errorNumber : number = 0;

        inputsSelectsTags.forEach( (e : HTMLInputElement | HTMLSelectElement) => {

            const nameInput : string = e.name;
            const valueInput : string = e.value;
            const placeholderInput : string | null = e.getAttribute('placeholder');
            const typeInput : string | null = e.getAttribute('type');
            const tagStringError: string = `.${nameInput}`;
            const error : HTMLSpanElement | null = form.querySelector(tagStringError);
            let firstLetter : string = 'El';
            let required : string = 'REQUERIDO';
            const letter : string = `${nameInput.charAt(0)}${nameInput.charAt(1)}${nameInput.charAt(2)}`;

            if(letter == 'la_'){
                firstLetter = 'La';
                required = 'REQUERIDA'
            }


            if(nameInput && !valueInput && error){

                error.classList.add('show');

                if(placeholderInput){
                    error.textContent = `${firstLetter} ${placeholderInput} es ${required}`;
                }else if(e instanceof HTMLSelectElement){
                    const selectedIndex : number = e.selectedIndex;
                    const selectedItem : HTMLOptionElement = e.selectedOptions[selectedIndex];
                    const selectedText : string | null = selectedItem.textContent;

                    if(selectedText){
                        error.textContent = `${firstLetter} ${selectedText} es ${required}`;
                    }
                    

                }

                errorNumber += 1;

            } else if(typeInput == 'email' && error){

                if(!validateEmail(valueInput)){
                    console.log('Hoa')
                    error.classList.add('show');
                    error.innerHTML = `${firstLetter} ${placeholderInput} no es válido`;
                    errorNumber += 1;
                }else{
                    error.classList.remove('show');
                }

            }else if(nameInput && error){
                error.classList.remove('show');
                error.textContent = ''
            }            

        });

        if(errorNumber == 0){

            AudioSound();

            inputsSelectsTags.forEach( (e : HTMLInputElement | HTMLSelectElement) => {
                localStorage.setItem(e.name, e.value);
            });

            removeForm(true);
        }

    }

    return (
        <>
            <section className="form_item responsive-box">
                <section className='logo'>
                    <img src={ChoysLogo} alt="Logo Choys" width={200} height={200}/>
                </section>
                <section className='content_items'>
                    <section className='content'>
                        <h2>¡PRIMERO, VAMOS A CONOCER EL PERFIL DE TU PERSONAJE!</h2>
                        <section className='image'>
                            <section className='container_remolino'>
                                <img className='remolino' src={RemolinoImg} alt="Remolino dan vueltas" />
                            </section>
                            
                        </section>
                    </section>
                    <form onSubmit={ (e) => save_form(e) }>
                        <p>Compartinos tus datos para contactarte si sos el ganador, y para enviarte sorpresas o nuevas promociones en el futuro</p>
                        <section className='form'>
                            <section>
                                <label htmlFor="">
                                    <input type="text" placeholder='Nombre' name='name'/>
                                    <span className='name'></span>
                                </label>
                                <label htmlFor="">
                                    <input type="text" placeholder='Apellido' name='last_name'/>
                                    <span className='last_name'></span>
                                </label>
                            </section>
                            <section>
                                <label htmlFor="">
                                    <select name="genero">
                                        <option value="">Género</option>
                                        <option value="femenino">Femenino</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                    <span className='genero'></span>
                                </label>
                                <label htmlFor="">
                                    <input type="email" placeholder='CORREO ELECTRÓNICO' name='correo_electrónico'/>
                                    <span className='correo_electrónico'>Error correo electrónico</span>
                                </label>
                            </section>
                            <section>
                                <label htmlFor="">
                                    <input type="number" name="phone" id="" placeholder='TELÉFONO' min='11111111'/>
                                    <span className='phone'>Error Nombre</span>
                                </label>
                                <label htmlFor="">
                                    <input type="number" max={100} min={0} placeholder='EDAD' name='la_year'/>
                                    <span className='la_year'>Error Edad</span>
                                </label>
                            </section>
                            <section>
                                <label htmlFor="">
                                    <select name="la_provincia">
                                        <option value="">Provincia</option>
                                        <option value="Alajuela">Alajuela</option>
                                        <option value="Cartago">Cartago</option>
                                        <option value="Guanacaste">Guanacaste</option>
                                        <option value="Heredia">Heredia</option>
                                        <option value="Limón">Limón</option>
                                        <option value="Puntarenas">Puntarenas</option>
                                        <option value="San José">San José</option>
                                    </select>
                                    <span className='la_provincia'>Error Select</span>
                                </label>
                            </section>
                        </section>
                        <section className='send_form'>
                            <button type='submit' className='submit_button'>
                                <span className='title'>¡EMPEZÁ EL QUIZ AQUÍ!</span>
                                <span className='top_bottom'></span>
                            </button>
                        </section>
                    </form>
                </section>
                <section></section>
            </section>
        </>
    )

}

export default Form;