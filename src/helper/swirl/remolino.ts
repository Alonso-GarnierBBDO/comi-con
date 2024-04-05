let ejecutado : boolean = false; // Evitamos que se ejecute mas de una vez el codigo
let ticketTag : HTMLElement | null;
let remolinoHeight: number;
let header: HTMLElement | null;
let ticketHeight: number;
let windowHeight: number;
let windowWidth: number;

const Remolino = (remolinoTag : HTMLElement) : void => {

    if(!ejecutado){

        ticketTag = document.querySelector('header .ticket img');
        header = document.querySelector('header');

        if(ticketTag && header){
            
            header.style.height =  `${window.innerHeight}px`;

            remolinoHeight = remolinoTag.offsetHeight;
            ticketHeight = ticketTag.clientHeight / 2;
            windowWidth = window.innerWidth;


            ticketTag.addEventListener('load', () => {
                elementoEjecutar(remolinoTag);
            })
    
            window.addEventListener('scroll', () => {
                elementoEjecutar(remolinoTag);
            });

        }

    }

    ejecutado = true;

}

const mediaQuery = (px : number) : boolean => {
    return window.matchMedia(`(min-width: ${px}px)`).matches;
}

const elementoEjecutar = (remolinoTag : HTMLElement) => {

    if(ticketTag){

        windowHeight = window.innerHeight;

        const ticket : {
            top: number,
            left: number
        } = ScrollPosition(ticketTag);

        const ticketTop : number = ticket.top;
        const ticketLeft : number = ticket.left;
        let stringTopStyle : string = `calc(${ticketTop}% - ${(remolinoHeight / 2) - (ticketHeight) - 35}px)`;
        let stringLeftStyle : string = '';

        if(mediaQuery(1220)){
            stringTopStyle = `calc(${ticketTop}% - ${(remolinoHeight / 2) - (ticketHeight / 2 ) - 35}px)`;
            stringLeftStyle = `calc(${ticketLeft}% - ${(remolinoHeight / 2) - (ticketHeight) - 15}px)`;
        }else if(mediaQuery(700)){
            stringTopStyle = `calc(${ticketTop}% - ${(remolinoHeight / 2) - (ticketHeight / 2 ) - 25}px)`;
            stringLeftStyle = `calc(${ticketLeft}% - ${(remolinoHeight / 2) - (ticketHeight) - 15}px)`;
        }

        remolinoTag.style.top = stringTopStyle;

        if(stringLeftStyle.length){
            remolinoTag.style.left = stringLeftStyle;
        }

        if(ticketTop < 0){
            if(mediaQuery(700)){
                console.log('Agregar remolino')
            }else{
                remolinoTag.classList.add('remove');
            }
        }else{
            remolinoTag.classList.remove('remove');
        }
    }

}

const ScrollPosition = (element: HTMLElement) : { top: number, left: number } => {
    const elementParams : DOMRect = element.getBoundingClientRect();
    const topPosition : number = elementParams.top;
    const leftPosition : number = elementParams.left;

    const percentajeTop : number = (topPosition / windowHeight) * 100;
    const percentajeLeft : number = (leftPosition / windowWidth) * 100;

    return {
        top: percentajeTop,
        left: percentajeLeft
    };
}

export default Remolino;