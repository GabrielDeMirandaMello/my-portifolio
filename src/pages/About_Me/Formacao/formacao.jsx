import React, { useEffect } from 'react';
import "./formacao.css";
import Navigation from '../../../components/Navigation/navigation';
import Card from '../../../components/Cards/card';
import ScrollReveal from 'scrollreveal';

function Formacao() {
    useEffect(() => {
        ScrollReveal({ reset: true}).reveal('.title-formacao', { duration: 1000 });
    })

    return (
        <>
            <Navigation item={'sobre'} />
            <section className='container-home'>
                <div className='linha-azul-formacao'></div>
                <div className='container-conteudo-aboutme'>
                    <h1 className='title-aboutme'>{`<Formação />`}</h1>
                    <Card
                        title={'Graduação em Administração (Concluido)'}
                        description={'Aonde pude aprender sobre varias coisas relacionadas a criação, manutenção entre outras formas de lidar com empreendimento de uma empresa.'}
                        period={'Periodo: Janeiro de 2015 à Dezembro de 2019'}
                        github={'false'}
                        link={'none'}
                    />
                    <Card
                        title={'Análise e Desenvolvimento de Sistemas (Concluido)'}
                        description={'Aonde pude aprender sobre Logica de programação, Modelo Agil(Scrum), como trabalhar em uma equipe em pró do projeto, Programação Orientada a Objeto, Desenvolvimento de Apps com Kotlin e saber mais sobre como funciona a nuvem e o Hardware de um computador.'}
                        period={'Periodo: Janeiro de 2022 à Dezembro de 2023'}
                        github={'false'}
                        link={'none'}
                    />
                </div>
            </section>

        </>
    )
}
export default Formacao;