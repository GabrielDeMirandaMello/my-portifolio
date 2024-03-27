import React from 'react';
import "./projects.css";
import Navigation from '../../components/Navigation/navigation'
import Card from '../../components/Cards/card';

function Projects() {
    return (
        <>
            <Navigation item={'projetos'} />
            <section className='container-home'>
                <div className='linha-azul-project'></div>
                <div className='container-conteudo-aboutme'>
                    <h1 className='title-aboutme'>{`<Meus Projetos />`}</h1>
                    <Card 
                    title={'History Travels (Front-End)'}
                    description={'Aonde pude aprender sobre varias coisas relacionadas a criação, manutenção entre outras formas de lidar com empreendimento de uma empresa.'}
                    period={'Periodo: Janeiro de 2015 à Dezembro de 2019'}
                    github={'true'}
                    link={'https://github.com/GabrielDeMirandaMello/NewIndividualProjectFrontEnd'}
                    />
                    <Card 
                    title={'History Travels (Back-End)'}
                    description={'Aonde pude aprender sobre varias coisas relacionadas a criação, manutenção entre outras formas de lidar com empreendimento de uma empresa.'}
                    period={'Periodo: Janeiro de 2015 à Dezembro de 2019'}
                    github={'true'}
                    link={'https://github.com/GabrielDeMirandaMello/NewIndividualProjectBackEnd'}
                    />
                    <Card 
                    title={'Cross Game (Faculdade)'}
                    description={'Aonde pude aprender sobre Logica de programação, Modelo Agil(Scrum), como trabalhar em uma equipe em pró do projeto, Programação Orientada a Objeto, Desenvolvimento de Apps com Kotlin e saber mais sobre como funciona a nuvem e o Hardware de um computador.'}
                    period={'Periodo: Janeiro de 2022 à Dezembro de 2023'}
                    github={'true'}
                    link={'none'}
                    />
                </div>
            </section>
        </>
    )
}
export default Projects;