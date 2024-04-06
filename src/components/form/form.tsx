import ChoysChocolateImage from '../../assets/img/choys_chocolate.png';

const Form = () => {

    return (
        <>
            <section className="form_item responsive-box">
                <section className='content'>
                    <h2>¡PRIMERO, VAMOS A CONOCER EL PERFIL DE TU PERSONAJE!</h2>
                    <img src={ChoysChocolateImage} alt="Chocolate Imagen" />
                </section>
                <section className='form'>
                    <p>Compartinos tus datos para contactarte si sos el ganador, y para enviarte sorpresas o nuevas promociones en el futuro</p>
                    <form action="">
                        <section>
                            <label htmlFor="">
                                <input type="text" placeholder='Nombre'/>
                                <span>Error Nombre</span>
                            </label>
                            <label htmlFor="">
                                <input type="text" placeholder='Apellido'/>
                                <span>Error Apellido</span>
                            </label>
                        </section>
                        <section>
                            <label htmlFor="">
                                <select name="" id="">
                                    <option value="">Género</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="otro">Otro</option>
                                </select>
                                <span>Error Nombre</span>
                            </label>
                            <label htmlFor="">
                                <input type="email" placeholder='CORREO ELECTRÓNICO'/>
                                <span>Error correo electrónico</span>
                            </label>
                        </section>
                        <section>
                            <label htmlFor="">
                                <input type="number" name="" id="" placeholder='TELÉFONO'/>
                                <span>Error Nombre</span>
                            </label>
                            <label htmlFor="">
                                <input type="number" placeholder='EDAD'/>
                                <span>Error Edad</span>
                            </label>
                        </section>
                        <section>
                            <label htmlFor="">
                                <select name="" id="">
                                    <option value="">Provincia</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="otro">Otro</option>
                                </select>
                                <span>Error Select</span>
                            </label>
                        </section>
                    </form>
                    <section className='send_form'>
                        <button type='submit'>
                            <span className='title'>Todo listo</span>
                            <span className='top_bottom'></span>
                        </button>
                    </section>
                </section>
            </section>
        </>
    )

}

export default Form;