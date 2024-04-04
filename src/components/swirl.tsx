import { useCallback, useEffect, useRef} from 'react';
import SwirlCanvas from '../helper/header/swirlsCanvas.ts';

const Swirl = () => {

    const canvaContainer = useRef(null);

    /**
     * Creamos la scena del canva
     * El parametro contentTag contiene la etiqueta en donde se agregar el canvas
     * @param contentTag 
     */
    
    const createScene = useCallback(
        (contentTag : HTMLElement) => {

            SwirlCanvas(contentTag);
        }, 
        []
    );

    useEffect(() => {
        const container : HTMLElement | null = canvaContainer.current;

        if(container){
            createScene(container);
        }

    }, [createScene]);

    return(
        <>
            <section className="swirl" ref={canvaContainer}></section>
        </>
    )

}

export default Swirl;