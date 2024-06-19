import React, { useState } from 'react';
import styles from "./navigation.css";
import { useNavigate } from 'react-router-dom';

function Navigation(props) {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className='container-navigation'>

                <h1 className='logo-navigation' onClick={() => navigate('/')}>{`<Gabriel Mello/>`}</h1>
                <ul className={`lista-navigation ${isOpen ? 'active' : ''}`}>
                    <li className={props.item === 'pagina inicial' ? 'active' : ''} onClick={() => navigate('/')}>
                        Pagina Inicial
                    </li>
                    <li className={props.item === 'sobre' ? 'active' : ''} onClick={() => navigate('/aboutme')}>
                        Sobre
                    </li>
                    <li className={props.item === 'projetos' ? 'active' : ''} onClick={() => navigate('/projects')}>
                        Projetos
                    </li>
                    <li className={props.item === 'contato' ? 'active' : ''} onClick={() => navigate('/contact')}>
                        Contato
                    </li>
                </ul>
                <div class="menu-hamburguer" id="menu-hamburguer" onClick={toggleMenu}>
                    <div class="linha"></div>
                    <div class="linha"></div>
                    <div class="linha"></div>
                </div>
            </nav>

        </>
    )
}
export default Navigation;