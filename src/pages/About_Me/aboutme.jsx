import React from 'react';
import "./aboutme.css";
import Navigation from '../../components/Navigation/navigation'
import { BsBrowserChrome } from "react-icons/bs";
import Card from '../../components/Cards/card';

function Aboutme() {
    return (
        <>
            <Navigation item={'sobre'} />
            <section className='container-home'>
                <div className='linha-azul-aboutme'></div>
                <div className='container-conteudo-aboutme'>
                    <h1 className='title-aboutme'>{`<Mais Sobre Min/>`}</h1>
                    <div className='title-formacao'>
                        <h1 className='title-formacao'><BsBrowserChrome /> {`<Formação />`}</h1>
                    </div>
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
                    <div className='title-formacao'>
                        <h1 className='title-formacao'><BsBrowserChrome /> {`<Experiencia />`}</h1>
                    </div>
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
                    <div className='title-formacao'>
                        <h1 className='title-formacao'><BsBrowserChrome /> {`<Interesses />`}</h1>
                    </div>
                    <Card 
                    title={'Ler livros sobre Tecnologias'}
                    description={'Breve descrição.'}
                    period={'Normalmente 1 hr por dia'}
                    github={'false'}
                    link={'none'}
                    />
                    <Card 
                    title={'Jogos Online'}
                    description={'Breve descrição.'}
                    period={'Normalmente quando amigos me chaman para jogar'}
                    github={'false'}
                    link={'none'}
                    />
                </div>
            </section>

        </>
    )
}
export default Aboutme;