import React from 'react';
import "./navigation.css";
import { useNavigate } from 'react-router-dom';

function Navigation(props) {
    const navigate = useNavigate()

    
    return (
        <>

            <nav className='container-navigation'>
                <h1 className='logo-navigation' onClick={() => navigate('/')}>{`<Gabriel Mello/>`}</h1>
                <ul className='lista-navigation'>
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
            </nav>

        </>
    )
}
export default Navigation;