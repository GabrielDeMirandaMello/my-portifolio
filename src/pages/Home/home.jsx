import React from 'react';
import "./home.css";
import Navigation from '../../components/Navigation/navigation'
import { MdDownloadForOffline } from "react-icons/md";

function Home() {

    const languages = [
        {
            title: "Java",
            description: "Sintaxe Básica, Estruturas de Controle, Classes e Objetos, Herança e Polimorfismo, Encapsulamento, Tratamento de Exceções, Coleções e Generics.",
            levelOfExperience: "Nivel Avançado"
        },
        {
            title: "JavaScript",
            description: "Variáveis e Tipos de Dados, Funções, Objetos e Protótipos, Escopo, Closure, Eventos, Assincronia e Manipulação do DOM",
            levelOfExperience: "Nivel Intermediario"
        }
    ]

    const backEndTecnologies = [
        {
            title: "Spring Boot",
            description: "Inversão de Controle (IoC) e Injeção de Dependências (DI), Configuração do Spring, Spring Beans, Spring Data Access, Spring MVC, Spring Security, Spring REST e Spring Testing.",
            levelOfExperience: "Nivel Avançado"
        },
        {
            title: "JWT",
            description: "",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "JUnit",
            description: "",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "MySql",
            description: "",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "PostgreSql",
            description: "",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "Swagger",
            description: "",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "React",
            description: "Performace, otimização, useState, useEfect, Axios, React icons e React Tailwind.",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "Tailwind CSS",
            description: "",
            levelOfExperience: "Nivel Intermediario"
        }
    ]
    const tools = [
        {
            title: "Docker",
            description: "Docker é uma plataforma popular para desenvolver, enviar e executar aplicativos usando containerização. Conceitos Básicos(Contêineres, Imagens), Comandos Básicos( docker run, docker pull, docker build, docker ps, docker rm e docker rmi), Dockerfile e Docker Compose.",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "AWS",
            description: "AWS, ou Amazon Web Services, é uma plataforma de computação em nuvem abrangente e amplamente usada oferecida pela Amazon. Ela fornece uma ampla gama de serviços em nuvem, incluindo poder de computação, armazenamento, bancos de dados, aprendizado de máquina, análise, rede e muito mais. Criação de maquinas EC2 e atraves desta maquina conseguir subir uma aplicação completa.",
            levelOfExperience: "Nivel Basico"
        },
        {
            title: "Apache Kafka",
            description: "Apache Kafka é uma plataforma de software de processamento de fluxo de código aberto desenvolvida pela Apache Software Foundation, escrita em Scala e Java. Ela visa fornecer uma plataforma unificada, de alto rendimento e baixa latência para lidar com feeds de dados em tempo real.",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "Minio",
            description: "O MinIO é um sistema de armazenamento de objetos de alto desempenho e código aberto. Ele é compatível com o serviço de armazenamento em nuvem Amazon S3 e foi projetado para aplicativos nativos da nuvem, oferecendo recursos como escalabilidade, multilocação e resiliência.",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "DBeaver",
            description: "O DBeaver é uma ferramenta de banco de dados universal gratuita e de código aberto para desenvolvedores, programadores SQL, administradores de banco de dados e analistas. Ele suporta vários bancos de dados, incluindo MySQL, PostgreSQL, SQLite, Oracle, DB2, SQL Server, Sybase, MS Access, Teradata, Firebird, Apache Hive, Phoenix e muitos mais.",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "GitFlow",
            description: "Tags, Master, Hotfix, Release Branch, develop e Feature Branch.",
            levelOfExperience: "Nivel Avançado"
        }
    ]
    const others = [
        {
            title: "Jira",
            description: "",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "Bitbucket",
            description: "",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "Confluence",
            description: "",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "Metodologias Ágeis (Scrum, Kanban)",
            description: "",
            levelOfExperience: "Nivel Intermediario"
        }
    ]

    return (
        <>
            <Navigation item={'pagina inicial'} />

            <section className='container-home static mb-10 object-cover'>
                <div className='container-conteudo h-fit flex justify-start items-start pl-10'>
                    <h1 className='text-5xl pb-3 mx-5 my-5 text-blue-500 font-black'>Gabriel De Miranda Mello</h1>
                    <div className='texto-home mx-5 text-lg text-justify w-3/4'>
                        <p> Olá! Sou <span className='text-blue-500 font-black'>Desenvolvedor Back-End</span> apaixonado por Tecnologia. Estou aqui para compartilhar um pouco sobre mim e as tecnologias que utilizo.
                            Ao longo dos anos, dediquei-me a aprimorar minhas habilidades e conhecimentos nesse campo, buscando constantemente novos desafios e oportunidades de crescimento.
                            Convido você a explorar meu portfólio, onde você encontrará uma amostra dos projetos que realizei e das habilidades que possuo.
                        </p>
                    </div>
                    <hr className='w-11/12 mt-5 mb-5' />
                    <h1 className='text-3xl pb-3 mx-5 text-blue-500 font-black'> Linguagens que aprendi em minha carreira como Dev</h1>

                    <div className='flex flex-wrap w-3/4'>
                        {languages.map((language) => (
                            <div className='flex flex-wrap w-auto'>
                                <div
                                    className="bg-gradient-to-r m-5 from-blue-400 to-indigo-500 rounded-lg overflow-hidden shadow-xl max-w-xs"
                                >
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold mb-2 text-white">{language.title}</h2>
                                        <p className="text-sm mb-4 text-white">
                                            {language.description}
                                        </p>
                                        <div className="flex justify-end space-x-4">
                                            <button
                                                className="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded cursor-default"
                                            >
                                                {language.levelOfExperience}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                    <hr className='w-11/12  mt-5 mb-5' />
                    <h1 className='text-3xl pb-3 mx-5 text-blue-500 font-black'>Tecnologias de Back End Aprendidas</h1>
                    <div className='flex flex-wrap w-11/12'>
                        {tools.map((language) => (
                            <div className='flex flex-wrap w-auto'>
                                <div
                                    className="bg-gradient-to-r m-5 from-blue-400 to-indigo-500 rounded-lg overflow-hidden shadow-xl max-w-xs"
                                >
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold mb-2 text-white">{language.title}</h2>
                                        <p className="text-sm mb-4 text-white">
                                            {language.description}
                                        </p>
                                        <div className="flex justify-end space-x-4">
                                            <button
                                                className="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded cursor-default"
                                            >
                                                {language.levelOfExperience}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr className='w-11/12  mt-5 mb-5' />
                    <h1 className='text-3xl pb-3 mx-5 text-blue-500 font-black'>Outras Ferramentas</h1>
                    <div className='flex flex-wrap w-auto'>
                        {others.map((language) => (
                            <div className='flex flex-wrap w-auto'>
                                <div
                                    className="bg-gradient-to-r m-5 from-blue-400 to-indigo-500 rounded-lg overflow-hidden shadow-xl max-w-xs"
                                >
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold mb-2 text-white">{language.title}</h2>
                                        <p className="text-sm mb-4 text-white">
                                            {language.description}
                                        </p>
                                        <div className="flex justify-end space-x-4">
                                            <button
                                                className="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded cursor-default"
                                            >
                                                {language.levelOfExperience}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <MdDownloadForOffline onClick={() => { window.location.href = 'https://drive.usercontent.google.com/u/0/uc?id=1vZGB7_9f4v7kufSlqTwogy_lRDZ6oRJY&export=download' }} className='fill-blue-500 fixed bottom-10 right-10 h-16 w-16 cursor-pointer' />
            <footer className='w-full flex justify-center'>
                <h4 className='font-black'>Criado por Gabriel Mello, 2024</h4>
            </footer>
        </>
    )
}
export default Home;