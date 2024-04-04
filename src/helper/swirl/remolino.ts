let ejecutado = false;

const Remolino = (tag : HTMLElement) => {

    /*tag.innerHTML = '';

    if(ejecutado){

        tag.insertAdjacentElement('beforeend', newElement('big'));

    }

    ejecutado = true;*/

}

const newElement =  (classList: string) => {

    const element = document.createElement('div');
    element.classList.add(classList);

    return element;

}

export default Remolino;