/**
 * Creamos el canva y el context con sus repectivos parametros
 */

import { canvaReturn } from "../../types";


const newCanva = ( width: number, height: number ) : canvaReturn => {

    const canvaTag : HTMLCanvasElement = document.createElement('canvas');
    const context : CanvasRenderingContext2D = canvaTag.getContext('2d') as CanvasRenderingContext2D;

    context.globalCompositeOperation = 'multiply';

    canvaTag.width = width;
    canvaTag.height = height;

    return {
        canvaTag,
        context
    }

}

export default newCanva;