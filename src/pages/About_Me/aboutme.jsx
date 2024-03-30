import React, { useEffect } from 'react';
import "./aboutme.css";
import Navigation from '../../components/Navigation/navigation'
import { BsFillMotherboardFill } from "react-icons/bs";
import { FaIcons, FaMedal, FaUserTie   } from "react-icons/fa";
import ScrollReveal from 'scrollreveal';
import { useNavigate } from 'react-router-dom';

function Aboutme() {
    const navigate = useNavigate()
    useEffect(() => {
        ScrollReveal({ reset: true}).reveal('.title-formacao-aboutme', { duration: 1000, distance: '150%', origin: 'left', opacity: 0   });
    })

    return (
        <>
            <Navigation item={'sobre'} />
            <section className='container-home'>
                <div className='linha-azul-aboutme'></div>
                <div className='container-conteudo-aboutme'>
                    <h1 className='title-aboutme'>{`<Mais Sobre Min/>`}</h1>
                    <div className='title-formacao-aboutme'>
                        <h1 className='title-formacao-card'><BsFillMotherboardFill style={{width:'70px', height:'auto'}}/> {`<Tecnologias e Ferramentas />`}</h1>
                        <h3>Aqui você verá mais sobre as Ferramentas e Tecnologias que já usei !</h3>
                        <button onClick={() => navigate('/tecnologias')}>Ir para Tecnologias e Ferramentas</button>
                    </div>

                    <div className='title-formacao-aboutme'>
                        <h1 className='title-formacao-card'><FaMedal  style={{width:'70px', height:'auto'}}/> {`<Formação />`}</h1>
                        <h3>Aqui você verá mais sobre as Ferramentas e Tecnologias que já usei !</h3>
                        <button onClick={() => navigate('/formacao')}>Ir para Formação</button>
                    </div>
                    
                    <div className='title-formacao-aboutme'>
                        <h1 className='title-formacao-card'><FaUserTie  style={{width:'70px', height:'auto'}}/> {`<Experiencias />`}</h1>
                        <h3>Aqui você verá mais sobre as Ferramentas e Tecnologias que já usei !</h3>
                        <button onClick={() => navigate('/experiencia')}>Ir para Experiencias</button>
                    </div>
                    
                    <div className='title-formacao-aboutme'>
                        <h1 className='title-formacao-card'><FaIcons style={{width:'70px', height:'auto'}}/> {`<Interesses />`}</h1>
                        <h3>Aqui você verá mais sobre as Ferramentas e Tecnologias que já usei !</h3>
                        <button onClick={() => navigate('/interesse')}>Ir para interesses</button>
                    </div>
                    
                </div>
            </section>

        </>
    )
}
export default Aboutme;