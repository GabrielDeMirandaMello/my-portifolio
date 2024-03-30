import React, { useEffect } from 'react';
import "./tecnologia.css";
import Navigation from '../../../components/Navigation/navigation'
import ScrollReveal from 'scrollreveal';

function Tecnologia() {
    useEffect(() => {
        ScrollReveal({ reset: true}).reveal('.title-formacao', { duration: 1000 });
    })

    return (
        <>
            <Navigation item={'sobre'} />
            <section className='container-home'>
                <div className='linha-azul-tecnologia'></div>
                <div className='container-conteudo-aboutme'>
                    <h1 className='title-aboutme'>{`<Tecnologias e Ferramenats />`}</h1>
                    
                </div>
            </section>

        </>
    )
}
export default Tecnologia;