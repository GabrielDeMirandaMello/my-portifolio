import React from 'react';
import "./navigation.css";
import { useNavigate } from 'react-router-dom';
import { BsFillHouseFill, BsFillMortarboardFill, BsFillDisplayFill, BsFillEnvelopePaperFill } from "react-icons/bs";

function Navigation(props) {
    const navigate = useNavigate()

    return (
        <>
            <nav className='container-navigation flex justify-center mx-50 my-14 w-full'>
                <ul className={`lista-navigation px-1 py-1 gap-16 rounded-xl text-2xl w-fit bg-blue-900 shadow-2xl`}>
                    <li className={(props.item === 'pagina inicial' ? 'active flex items-center gap-5' : ' flex items-center gap-5 ')} onClick={() => navigate('/')}>
                    <BsFillHouseFill /> <span className='hidden sm:hidden md:flex lg:flex xl:flex'>Inicio</span> 
                    </li>
                    <li className={props.item === 'sobre' ? 'active flex items-center gap-5' : 'flex items-center gap-5'} onClick={() => navigate('/roadmap')}>
                    <BsFillMortarboardFill /> <span className='hidden sm:hidden md:flex lg:flex xl:flex'>Estudos</span> 
                    </li>
                    <li className={props.item === 'projetos' ? 'active flex items-center gap-5' : 'flex items-center gap-5'} onClick={() => navigate('/projects')}>
                    <BsFillDisplayFill /> <span className='hidden sm:hidden md:flex lg:flex xl:flex'>Projetos</span> 
                    </li>
                    <li className={props.item === 'contato' ? 'active flex items-center gap-5' : 'flex items-center gap-5'} onClick={() => navigate('/contact')}>
                    <BsFillEnvelopePaperFill /> <span className='hidden sm:hidden md:flex lg:flex xl:flex'>Contato</span> 
                    </li>
                </ul>
            </nav>

        </>
    )
}
export default Navigation;