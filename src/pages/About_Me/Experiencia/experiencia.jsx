import React, { useEffect } from 'react';
import "./experiencia.css";
import Navigation from '../../../components/Navigation/navigation'
import Card from '../../../components/Cards/card';
import ScrollReveal from 'scrollreveal';

function Experiencia() {
    useEffect(() => {
        ScrollReveal({ reset: true}).reveal('.title-formacao', { duration: 1000 });
    })

    return (
        <>
            <Navigation item={'sobre'} />
            <section className='container-home'>
                <div className='linha-azul-experiencia'></div>
                <div className='container-conteudo-aboutme'>
                    <h1 className='title-aboutme'>{`<Experiencia />`}</h1>
                    <Card
                        title={'Alpe (Desenvolvedor Back-End)'}
                        description={'Breve descrição.'}
                        period={'Periodo: Dezembro de 2022 à Dezembro de 2023'}
                        github={'false'}
                        link={'none'}
                    />
                    <Card
                        title={'Alpe (Quality Assurance)'}
                        description={'Breve descrição.'}
                        period={'Periodo: Agosto de 2022 à Dezembro de 2022'}
                        github={'false'}
                        link={'none'}
                    />
                </div>
            </section>

        </>
    )
}
export default Experiencia;