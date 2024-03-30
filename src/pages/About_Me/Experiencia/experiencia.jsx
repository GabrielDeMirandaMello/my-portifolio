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
                        description={`Como desenvolvedor Back-End utilizei da minha criatividade, lógica de programação e 
                        Programação Orientada a Objetos para a resolução de problemas complexos com algoritmos 
                        em Java, implementei algumas soluções para gerar mais valor ao cliente da empresa, sempre 
                        aprimorando meu conhecimento com Spring boot, Java multi-modulos, Clean Architecture.`}
                        period={'Periodo: Dezembro de 2022 à Dezembro de 2023'}
                        github={'false'}
                        link={'none'}
                    />
                    <Card
                        title={'Alpe (Quality Assurance)'}
                        description={'Trabalhei pouco tempo porem tive uma boa percepção sobre a importancia de realizar os testes dentro de uma aplicação, trabalhei pouco com o Cypress que é uma ferramenta de autopmação de testes usada mais para Front end.'}
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