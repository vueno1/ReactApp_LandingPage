//usamos el hook USESTATE para el responsive de la pagina
import React, { useState } from 'react';
import "./Navbar.css"


//importamos los iconos de react (Menu + X)
import { FiMenu, FiX} from "react-icons/fi"

/*
///Esto seria lo que viene por parametro desde App.js///
const navbarLinks = [
    { 
        url: "/home", 
        title: "Home"
    }
]
*/

const Navbar = ( {navbarLinks}) => {  
    
    //usamos el hook de esta forma:
    const [menuClicked, setMenuClicked] = useState (false)

    //creamos una funcion para activar el boton (FiMenu y FiX)
    const toggleMenuClick = () =>{
        //setea el estado a lo opuesto en que este menuClick
        //!menuClicked = diferente a menuClick
        setMenuClicked (!menuClicked)
    }

    return (
            <nav className='navbar'>
            <span className='navbar__logo'>travel</span>

            {/*al achicar la pantalla, tenemos que modificar la lista del navbar (ul) */}

            {/*si "menuClicked es true, se muestra el menu hamburguesa"
            y si hacemos click, cambia el estado al opuesto*/}
            {menuClicked ? (
            <FiMenu size={25} className="navbar__menu" onClick={toggleMenuClick}/>
            ):( 
            //sino, se mostrara el menu X, y al hacer click se cambia al estado opuesto.
            <FiX size={25} className="navbar__menu" onClick={toggleMenuClick} />
            )}

            {/*si el menuClicked es true, se muestra la clase navbar__list, 
            sino, se muestra la clase navbar__list + navbar__list-active */}
            <ul className={menuClicked ? "navbar__list" : "navbar__list navbar__list--active"}>

                {/*mapeamos lo que traemos de paremetro */}
                {navbarLinks.map ((item) =>{
                    return (
                        //cuando renderizamos una lista, tenemos que pasarle una key.
                        //le pasamos item.title suponiendo que son nombres unicos.
                        <li className='navbar__item' key={item.title}>
                            <a className='navbar__link' href={item.url}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}

            </ul>
        </nav>
    );
}

export default Navbar;
