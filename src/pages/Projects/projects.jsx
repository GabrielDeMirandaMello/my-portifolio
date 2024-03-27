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
                    description={'Pequena descrição das tecnologias usadas.'}
                    period={'Periodo: Janeiro de 2022 à Dezembro de 2023'}
                    github={'true'}
                    link={'https://github.com/GabrielDeMirandaMello/NewIndividualProjectFrontEnd'}
                    />
                    <Card 
                    title={'History Travels (Back-End)'}
                    description={'Pequena descrição das tecnologias usadas.'}
                    period={'Periodo: Janeiro de 2022 à Dezembro de 2023'}
                    github={'true'}
                    link={'https://github.com/GabrielDeMirandaMello/NewIndividualProjectBackEnd'}
                    />
                    <Card 
                    title={'Cross Game (Faculdade)'}
                    description={'Pequena descrição das tecnologias usadas.'}
                    period={'Periodo: Janeiro de 2022 à Dezembro de 2023'}
                    github={'true'}
                    link={'https://github.com/orgs/Cross-Game/repositories'}
                    />
                </div>
            </section>
        </>
    )
}
export default Projects;