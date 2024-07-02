import React from 'react';
import Navigation from '../../components/Navigation/navigation'
import { MdDownloadForOffline  } from "react-icons/md";

function Projects() {

    const posts = [
        {
          id: 1,
          title: 'History Travels (Front-End)',
          href: '#',
          description:
            'Este projeto foi feito com o intuito de aprimorar meus conhecimentos, consiste em uma rede social para pessoas que gostam de viajar e poder compartilhar locais com as pessoas e somente compartilhar as viajens. Tecnologias e Ferramentas usadas no Front End: JavaScript, React.js, HTML 5, CSS3 e Node.js.',
          date: 'Periodo: Janeiro de 2024 à Março de 2024',
          datetime: '2020-03-16',
          category: { title: 'Github', href: 'https://github.com/GabrielDeMirandaMello/NewIndividualProjectFrontEnd' },
        },
        // More posts...
      ]

    return (
        <>
            <Navigation item={'projetos'} />
            <MdDownloadForOffline  className='fill-blue-500 fixed bottom-10 right-10 h-16 w-16 cursor-pointer'/>
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
                                {posts.map((post) => (
                                    <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <time dateTime={post.datetime} className="text-white">
                                                {post.date}
                                            </time>
                                            <a
                                                href={post.category.href}
                                                className="relative z-10 rounded-full bg-blue-500 px-3 py-1.5 font-medium text-white hover:bg-gray-100 hover:text-blue-500"
                                            >
                                                {post.category.title}
                                            </a>
                                        </div>
                                        <div className="group relative p-2 mt-5 border-2 border-blue-500 rounded-xl hover:bg-white bg-blue-500">
                                            <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-blue-500 text-white ">
                                                <a href={post.href}>
                                                    <span className="absolute inset-0" />
                                                    {post.title}
                                                </a>
                                            </h3>
                                            <p className="mt-5 line-clamp-3 text-sm font-bold leading-6 group-hover:text-blue-500 text-white">{post.description}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* <Card 
                    title={'History Travels (Front-End)'}
                    description={''}
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
                    /> */}
                </div>
            </section>
        </>
    )
}
export default Projects;