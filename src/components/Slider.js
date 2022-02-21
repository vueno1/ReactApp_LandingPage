import React from 'react';
import "./Slider.css"

//hacemos uso de este HOOK
import InView, { useInView } from 'react-intersection-observer';

//componente para las imagenes de abajo al hacer slider.

const Slider = ( {imageSrc, title, subtitle, flipped}) => {
    //parametros flipped, es para mostrar si la imagen la quiero a la derecha o izquierda.

    //utilizamos REACT-INTERSECTION-OBSERVER//
    //solo usaremos REF e INVIEW
    //ref = ???
    //inview = ???
    const { ref, inView } = useInView({
        /* Optional options */

        //esto es qué % de la imagen debe verse antes de hacer la instruccion
        //en este caso 40% = 0.4
        //la variacion del theshold va de 0 → 1
        threshold: 0.4,
    });

    //creo una funcion donde indico la posicion de mi slider.
    const renderContent = () => {

        //aca le digo, si es flipped, ponga la imagen primero y despues titulo y subtitulo
        if (!flipped) {
            return<>
                    <img src={imageSrc} alt="Travel" className='slider__image' />
                    <div className='slider__content'>
                        <h1 className='slider__title'>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </>
        }
         
        //sino, que ponga primero titulo y subtitulo y despues imagen.
        else {
            return <>
                <div className='slider__content'>
                    <h1 className='slider__title'>{title}</h1>
                    <p>{subtitle}</p>
                </div>
                <img src={imageSrc} alt="Travel" className='slider__image' />                    
            </>
        }
    }

    return (
        <div 
            //si es inview, entonces que tenga la clase slider + slider--zoom
            //sino que tenga solo la clase slider
            //escribir bien la palabra de los hooks!
            className={inView ? "slider slider--zoom": "slider"} 

            //hacemos uso del ref
            ref={ref}>

            {renderContent ()}

        </div>
    );
}

export default Slider;
