import React from 'react';
import Navigation from '../../components/Navigation/navigation'
import Speed from "../../components/Speed/speed"

function Projects() {

    return (
        <>
            <Navigation item={'projetos'} />
            <section className='container-home mb-20'>
                <div className='container-conteudo-aboutme '>
                    <div className="bg-transparent py-24">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl lg:mx-0">
                                <h2 className="text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl">Meus Projetos</h2>
                                <p className="mt-2 text-lg leading-8 text-white">
                                    Todos os meus projetos estão localizados no meu Github caso queira ver melhor os detalhes dos codigos.
                                </p>
                            </div>
                            <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                <div 
                                class="service-card rounded-xl w-4/4 shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-blue-500"
                                onClick={() => {window.location.href = 'https://github.com/Cross-Game/front-end'}}
                                >
                                    <svg
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="2"
                                        stroke="#000000"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        class="text-5xl h-12 w-12 stroke-black group-hover:stroke-white"

                                    >
                                        <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
                                        <line y2="21" x2="16" y1="21" x1="8"></line>
                                        <line y2="21" x2="12" y1="17" x1="12"></line>
                                    </svg>

                                    <p class="font-bold text-2xl group-hover:text-white text-black">
                                        Cross Game
                                    </p>
                                    <p class="text-black group-hover:text-white text-sm font-black">
                                        Website criado para ser um match making de jogadores e conseguir gerar mais conexão entre pessoas. <br />
                                        Tecnologias usadas no Front-End: React, HTML5 e CSS3. <br />
                                        Tecnologias usadas no Back-End: Java, Spring Boot, Docker, AWS EC2, Jenkins.
                                    </p>
                                    <p
                                        class="text-5xl text-black group-hover:text-white font-bold self-end"
                                    >
                                        01
                                    </p>
                                </div>
                                <div 
                                onClick={() => {window.location.href = 'https://github.com/GabrielDeMirandaMello/NewIndividualProjectFrontEnd'}}
                                class="service-card rounded-xl w-4/4 shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-blue-500">
                                    <svg
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="2"
                                        stroke="#000000"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        class="text-5xl h-12 w-12 stroke-black group-hover:stroke-white"

                                    >
                                        <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
                                        <line y2="21" x2="16" y1="21" x1="8"></line>
                                        <line y2="21" x2="12" y1="17" x1="12"></line>
                                    </svg>

                                    <p class="font-bold text-2xl group-hover:text-white text-black">
                                        History Travels (Front-End)
                                    </p>
                                    <p class="text-black group-hover:text-white text-sm font-black">
                                        Este projeto foi feito com o intuito de aprimorar meus conhecimentos, consiste em uma rede social para pessoas que gostam de viajar e compartilhar locais legais. Tecnologias usadas: React.js, HTML5, CSS3 e vercel.app.
                                    </p>
                                    <p
                                        class="text-5xl text-black group-hover:text-white font-bold self-end"
                                    >
                                        02
                                    </p>
                                </div>
                                <div 
                                onClick={() => {window.location.href = 'https://github.com/GabrielDeMirandaMello/NewIndividualProjectBackEnd'}}
                                class="service-card rounded-xl w-4/4 shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-blue-500">
                                    <svg
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="2"
                                        stroke="#000000"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        class="text-5xl h-12 w-12 stroke-black group-hover:stroke-white"

                                    >
                                        <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
                                        <line y2="21" x2="16" y1="21" x1="8"></line>
                                        <line y2="21" x2="12" y1="17" x1="12"></line>
                                    </svg>

                                    <p class="font-bold text-2xl group-hover:text-white text-black">
                                        History Travels (Back-End)
                                    </p>
                                    <p class="text-black group-hover:text-white text-sm font-bold">
                                        Este projeto foi feito com o intuito de aprimorar meus conhecimentos, consiste em uma rede social para pessoas que gostam de viajar e compartilhar locais legais. Tecnologias e Ferramentas do Back End: Java, Spring Boot, PostgreSQL, Docker, Maven, JUnit, Clean Architecture, JiraSoftware, Render.
                                    </p>
                                    <p
                                        class="text-5xl text-black group-hover:text-white font-bold self-end"
                                    >
                                        03
                                    </p>
                                </div>
                                <div 
                                onClick={() => {window.location.href = 'https://github.com/GabrielDeMirandaMello/book-catalogy'}}
                                class="service-card rounded-xl w-4/4 shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-blue-500">
                                    <svg
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="2"
                                        stroke="#000000"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        class="text-5xl h-12 w-12 stroke-black group-hover:stroke-white"

                                    >
                                        <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
                                        <line y2="21" x2="16" y1="21" x1="8"></line>
                                        <line y2="21" x2="12" y1="17" x1="12"></line>
                                    </svg>

                                    <p class="font-bold text-2xl group-hover:text-white text-black">
                                        Teste Book Catalogy
                                    </p>
                                    <p class="text-black group-hover:text-white text-sm font-bold">
                                        Este projeto foi feito para um teste tecnico em desenvolvimento back end, Realizado com java, spring boot, testes unitários e utilizando clean architecture.
                                    </p>
                                    <p
                                        class="text-5xl text-black group-hover:text-white font-bold self-end"
                                    >
                                        04
                                    </p>
                                </div>
                                <div 
                                onClick={() => {window.location.href = 'https://github.com/GabrielDeMirandaMello/book-catalogy'}}
                                class="service-card rounded-xl w-4/4 shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-blue-500">
                                    <svg
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="2"
                                        stroke="#000000"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        class="text-5xl h-12 w-12 stroke-black group-hover:stroke-white"

                                    >
                                        <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
                                        <line y2="21" x2="16" y1="21" x1="8"></line>
                                        <line y2="21" x2="12" y1="17" x1="12"></line>
                                    </svg>

                                    <p class="font-bold text-2xl group-hover:text-white text-black">
                                        Teste Book Catalogy
                                    </p>
                                    <p class="text-black group-hover:text-white text-sm font-bold">
                                        Este projeto foi feito para um teste tecnico em desenvolvimento back end, Realizado com java, spring boot, testes unitários e utilizando clean architecture.
                                    </p>
                                    <p
                                        class="text-5xl text-black group-hover:text-white font-bold self-end"
                                    >
                                        04
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Speed />
            <footer className='w-full flex justify-center'>
                <h4 className='font-black'>&copy; Gabriel Mello, 2024</h4>
            </footer>
        </>
    )
}
export default Projects;