import React from 'react';
import "./home.css";
import Navigation from '../../components/Navigation/navigation'

function Home() {

    return (
        <>
            <Navigation item={'pagina inicial'} />
            <section className='container-home mb-10 object-cover'>
                <div className='container-conteudo h-fit flex justify-center items-center'>
                    <h1 className='text-5xl pb-3 mx-5 my-5 text-blue-500 font-black'>Gabriel De Miranda Mello</h1>
                    <div className='texto-home mx-5 text-lg text-justify w-3/4'>
                        <p> Olá! Sou <span className='text-blue-500 font-black'>Desenvolvedor Back-End</span> apaixonado por Tecnologia. Estou aqui para compartilhar um pouco sobre mim e as tecnologias que utilizo.
                            Ao longo dos anos, dediquei-me a aprimorar minhas habilidades e conhecimentos nesse campo, buscando constantemente novos desafios e oportunidades de crescimento.
                            Convido você a explorar meu portfólio, onde você encontrará uma amostra dos projetos que realizei e das habilidades que possuo.
                        </p>
                    </div>
                    <hr className='w-3/4 mt-5 mb-5' />
                    <h1 className='text-3xl pb-3 mx-5 text-blue-500 font-black'> Habilidades Tecnicas e Ferramentas</h1>

                    <div className='flex flex-wrap w-auto'>
                        <div className='flex flex-wrap w-auto'>
                            <div
                                class="bg-gradient-to-r m-5 from-blue-400 to-indigo-500 rounded-lg overflow-hidden shadow-xl max-w-xs"
                            >
                                <div class="p-4">
                                    <h2 class="text-lg font-semibold mb-2 text-white">Java</h2>
                                    <p class="text-sm mb-4 text-white">
                                        Sintaxe Básica, Estruturas de Controle, Classes e Objetos, Herança e Polimorfismo, Encapsulamento, Tratamento de Exceções, Coleções e Generics.
                                    </p>
                                    <div class="flex justify-end space-x-4">
                                        <button
                                            class="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded cursor-default"
                                        >
                                            Nivel Avançado
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-wrap w-auto'>
                            <div
                                class="bg-gradient-to-r m-5 from-blue-400 to-indigo-500 rounded-lg overflow-hidden shadow-xl max-w-xs"
                            >
                                <div class="p-4">
                                    <h2 class="text-lg font-semibold mb-2 text-white">Docker</h2>
                                    <p class="text-sm mb-4 text-white">
                                    Conceitos Básicos(Contêineres, Imagens), Comandos Básicos( docker run, docker pull, docker build, docker ps, docker rm e docker rmi), Dockerfile e Docker Compose.
                                    </p>
                                    <div class="flex justify-end space-x-4">
                                        <button
                                            class="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded cursor-default"
                                        >
                                            Nivel Intermediario
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-wrap w-auto'>
                            <div
                                class="bg-gradient-to-r m-5 from-blue-400 to-indigo-500 rounded-lg overflow-hidden shadow-xl max-w-xs"
                            >
                                <div class="p-4">
                                    <h2 class="text-lg font-semibold mb-2 text-white">Spring Boot</h2>
                                    <p class="text-sm mb-4 text-white">
                                    Inversão de Controle (IoC) e Injeção de Dependências (DI), Configuração do Spring, Spring Beans, Spring Data Access, Spring MVC, Spring Security, Spring REST e Spring Testing.
                                    </p>
                                    <div class="flex justify-end space-x-4">
                                        <button
                                            class="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded cursor-default"
                                        >
                                            Nivel Avançado
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='w-3/4  mt-5 mb-5' />
                    <h1 className='text-3xl pb-3 mx-5 text-blue-500 font-black'>Formação e Cursos</h1>
                    <div className='flex flex-wrap w-auto'>
                        <div className='flex flex-wrap w-auto'>
                            <div
                                class="bg-gradient-to-r m-5 from-blue-400 to-indigo-500 rounded-lg overflow-hidden shadow-xl max-w-xs"
                            >
                                <div class="p-4">
                                    <h2 class="text-lg font-semibold mb-2 text-white">Administração</h2>
                                    <p class="text-sm mb-4 text-white">
                                    Planejamento, Organização, Direção, Controle, Gestão de Pessoas (Recursos Humanos), Gestão Financeira, Marketing, Gestão da Produção e Operações, Tecnologia da Informação (TI), Ética e Responsabilidade Social.
                                    </p>
                                    <div class="flex justify-end space-x-4">
                                        <button
                                            class="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded cursor-default"
                                        >
                                            Bacharel Concluido
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-wrap w-auto'>
                            <div
                                class="bg-gradient-to-r m-5 from-blue-400 to-indigo-500 rounded-lg overflow-hidden shadow-xl max-w-xs"
                            >
                                <div class="p-4">
                                    <h2 class="text-lg font-semibold mb-2 text-white">Análise e Desenvolvimento de Sistemas</h2>
                                    <p class="text-sm mb-4 text-white">
                                        ...
                                    </p>
                                    <div class="flex justify-end space-x-4">
                                        <button
                                            class="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded cursor-default"
                                        >
                                            Bacharel Concluido
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <footer className='w-full flex justify-center'> 
                <h4 className='font-black'>Criado por Gabriel Mello, 2024</h4>
            </footer>

        </>
    )
}
export default Home;