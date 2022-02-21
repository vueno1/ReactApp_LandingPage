import React from 'react';
import "./Hero.css"

const Hero = ({imageSrc}) => {

    return (
        <div className='hero'> {/*////MAIN//// → posicion relaviva */}
            <img src={imageSrc} alt="Travel" className='hero__image' /> {/*posicion absoluta */}
            <h1 className='hero__title'>Travel made simple.</h1> {/*posicion absoluta */}        
        </div>
    );

}

export default Hero;
