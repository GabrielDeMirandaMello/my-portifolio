import React from 'react';
import "./home.css";
import Navigation from '../../components/Navigation/navigation'

function Home() {

    return (
        <>
            <Navigation item={'pagina inicial'} />
            <section className='container-home mb-10 object-cover cursor-default'>
                <div className='container-conteudo h-fit flex justify-center items-center'>
                    <h1 className='text-5xl pb-3 mx-5 text-blue-500 font-black'>Gabriel De Miranda Mello</h1>
                    <div className='texto-home mx-5 text-base'>
                        <p> Olá! Sou um profissional apaixonado por Tecnologia. Estou aqui para compartilhar um pouco sobre mim e minhas habilidades.
                            Desde jovem, sempre fui fascinado por Tecnologia. Ao longo dos anos, dediquei-me a aprimorar minhas habilidades e conhecimentos nesse campo, buscando constantemente novos desafios e oportunidades de crescimento.
                            <br />
                            Estou animado para compartilhar mais sobre meu trabalho e experiências. Convido você a explorar meu portfólio, onde você encontrará uma amostra dos projetos que realizei, as habilidades que possuo. Se você estiver interessado em colaborar ou tiver alguma pergunta, não hesite em entrar em contato. Estou ansioso para conectar-me.
                        </p>
                    </div>
                    <hr className='mt-10 mb-10' />
                    <h1 className='text-3xl pb-3 mx-5 text-blue-500 font-bold'> Habilidades Tecnicas e Ferramentas</h1>

                    <div className='flex flex-wrap w-auto'>
                        <div className='flex flex-wrap w-auto'>
                            <div
                                class="bg-gradient-to-r m-5 from-blue-400 to-indigo-500 rounded-lg overflow-hidden shadow-xl max-w-xs"
                            >
                                <div class="p-4">
                                    <h2 class="text-lg font-semibold mb-2 text-white">Formação</h2>
                                    <p class="text-sm mb-4 text-white">
                                        Aqui você verá as faculdades e cursos que tenho concluido e em andamento.
                                    </p>
                                    <div class="flex justify-end space-x-4">
                                        <button
                                            class="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Ir Para Formação
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
                                    <h2 class="text-lg font-semibold mb-2 text-white">Experiencias</h2>
                                    <p class="text-sm mb-4 text-white">
                                        Aqui você verá as faculdades e cursos que tenho concluido e em andamento.
                                    </p>
                                    <div class="flex justify-end space-x-4">
                                        <button
                                            class="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Ir Para Experiencias
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
                                    <h2 class="text-lg font-semibold mb-2 text-white">Tecnologias</h2>
                                    <p class="text-sm mb-4 text-white">
                                        Aqui você verá as faculdades e cursos que tenho concluido e em andamento.
                                    </p>
                                    <div class="flex justify-end space-x-4">
                                        <button
                                            class="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Ir Para Tecnologias
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-10 mb-10' />
                    <h1 className='text-3xl pb-3 mx-5 text-blue-500 font-bold'>Formação e Cursos</h1>
                    <div className='flex flex-wrap w-auto'>
                        <div className='flex flex-wrap w-auto'>
                            <div
                                class="bg-gradient-to-r m-5 from-blue-400 to-indigo-500 rounded-lg overflow-hidden shadow-xl max-w-xs"
                            >
                                <div class="p-4">
                                    <h2 class="text-lg font-semibold mb-2 text-white">Formação</h2>
                                    <p class="text-sm mb-4 text-white">
                                        Aqui você verá as faculdades e cursos que tenho concluido e em andamento.
                                    </p>
                                    <div class="flex justify-end space-x-4">
                                        <button
                                            class="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Ir Para Formação
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
                                    <h2 class="text-lg font-semibold mb-2 text-white">Experiencias</h2>
                                    <p class="text-sm mb-4 text-white">
                                        Aqui você verá as faculdades e cursos que tenho concluido e em andamento.
                                    </p>
                                    <div class="flex justify-end space-x-4">
                                        <button
                                            class="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Ir Para Experiencias
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
                                    <h2 class="text-lg font-semibold mb-2 text-white">Tecnologias</h2>
                                    <p class="text-sm mb-4 text-white">
                                        Aqui você verá as faculdades e cursos que tenho concluido e em andamento.
                                    </p>
                                    <div class="flex justify-end space-x-4">
                                        <span
                                            class="duration-300 bg-black/0 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Ir Para Tecnologias
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Home;