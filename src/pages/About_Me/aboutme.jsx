import React, { useEffect } from 'react';
import "./aboutme.css";
import Navigation from '../../components/Navigation/navigation'
import { BsFillMotherboardFill } from "react-icons/bs";
import { FaIcons, FaMedal, FaUserTie   } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Aboutme() {
    const navigate = useNavigate()

    return (
        <>
            <Navigation item={'sobre'} />
            <section className='container-home mb-10 object-cover cursor-default'>
                <div className='container-conteudo-aboutme h-fit pl-6 flex justify-center'>
                    <div className='title-formacao-aboutme'>
                        <h1 className='title-formacao-card'><BsFillMotherboardFill className='icon-aboutme'/> {`<Tecnologias e Ferramentas />`}</h1>
                        <h3>Aqui você verá mais sobre as Ferramentas e Tecnologias que já usei !</h3>
                        <button onClick={() => navigate('/tecnologias')}>Ir para Tecnologias e Ferramentas</button>
                    </div>

                    <div className='title-formacao-aboutme'>
                        <h1 className='title-formacao-card'><FaMedal  className='icon-aboutme'/> {`<Formação />`}</h1>
                        <h3>Aqui você verá mais sobre meus diplomas e cursos !</h3>
                        <button onClick={() => navigate('/formacao')}>Ir para Formação</button>
                    </div>
                    
                    <div className='title-formacao-aboutme'>
                        <h1 className='title-formacao-card'><FaUserTie  className='icon-aboutme'/> {`<Experiencias />`}</h1>
                        <h3>Aqui irei falar sobre as experiencias profissionais que tive até o momento !</h3>
                        <button onClick={() => navigate('/experiencia')}>Ir para Experiencias</button>
                    </div>
                    
                    <div className='title-formacao-aboutme'>
                        <h1 className='title-formacao-card'><FaIcons className='icon-aboutme'/> {`<Interesses />`}</h1>
                        <h3>Aqui irei mostrar mais sobre os meus hobbys e o que faço no tempo livre ! </h3>
                        <button onClick={() => navigate('/interesse')}>Ir para interesses</button>
                    </div>
                    
                </div>
            </section>

        </>
    )
}
export default Aboutme;