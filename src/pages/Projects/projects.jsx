import React from 'react';
import "./projects.css";
import Navigation from '../../components/Navigation/navigation'
import Card from '../../components/Cards/card';

function Projects() {
    return (
        <>
            <Navigation item={'projetos'} />
            <section className='container-home'>
                <div className='linha-azul'></div>
                <div className='container-conteudo-aboutme'>
                    <h1 className='title-aboutme'>{`<Meus Projetos />`}</h1>
                    <Card 
                    title={'History Travels (Front-End)'}
                    description={'Este projeto foi feito com o intuito de aprimorar meus conhecimentos, consiste em uma rede social para pessoas que gostam de viajar e poder compartilhar locais com as pessoas e somente compartilhar as viajens. Tecnologias e Ferramentas usadas no Front End: JavaScript, React.js, HTML 5, CSS3 e Node.js.'}
                    period={'Periodo: Janeiro de 2024 à Março de 2024'}
                    github={'true'}
                    link={'https://github.com/GabrielDeMirandaMello/NewIndividualProjectFrontEnd'}
                    />
                    <Card 
                    title={'History Travels (Back-End)'}
                    description={'Este projeto foi feito com o intuito de aprimorar meus conhecimentos, consiste em uma rede social para pessoas que gostam de viajar e poder compartilhar locais com as pessoas e somente compartilhar as viajens. Tecnologias e Ferramentas usadas no Back End: Java, Spring Boot, PostgreSQL, Docker, Maven, JUnit, Clean Architecture, JiraSoftware, Render.'}
                    period={'Periodo: Periodo: Janeiro de 2024 à Março de 2024'}
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