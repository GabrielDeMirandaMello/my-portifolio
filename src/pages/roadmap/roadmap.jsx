import React from 'react';
import "./roadmap.css";
import Navigation from '../../components/Navigation/navigation'
import { MdCheckCircle, MdOutlineLens, MdAccessTimeFilled } from "react-icons/md";
import ImagemEstudando from '../../assets/close-up-homem-trabalhando-com-laptop.jpg'
import ImagemFormacao from '../../assets/books-with-graduation-cap-digital-art-style-education-day.jpg'
import { useNavigate } from 'react-router-dom';
import Speed from "../../components/Speed/speed"

function Aboutme() {
    const navigate = useNavigate()
    const features = [
        {
            name: 'Java Avançado:',
            description:
                'Threads, Generics, Serialization, Spring Cloud, Spring Batch, Hibernate, SLF4J, JDBC Template e Rest Assured.',
            icon: MdAccessTimeFilled,
        },
        {
            name: 'AWS:',
            description: 'Fundamentos de AWS, Lambda, S3 (Simple Storage Service), Aurora, Microservices with AWS.',
            icon: MdOutlineLens,
        },
        {
            name: 'Architectural Patterns:',
            description: 'Monolithic Apps, Microservices, Service-Oriented Architecture.',
            icon: MdOutlineLens,
        },
        {
            name: 'Design Patterns:',
            description: 'MVC (Model-View-Controller), Microservices, Producer-Consumer, Observer.',
            icon: MdOutlineLens,
        }
    ]

    const studies = [
        {
            name: 'Administração de empresas',
            description:
                '',
            icon: MdCheckCircle,
        },
        {
            name: 'Analise e Desenvolvimento de Sistemas',
            description: '',
            icon: MdCheckCircle,
        },
        {
            name: 'Curso de Java na Udemy',
            description: '',
            icon: MdCheckCircle,
        },
        {
            name: 'Curso de Spring Boot na Udemy',
            description: '',
            icon: MdCheckCircle,
        },
        {
            name: 'Aumente sua Produtividade com Spring Boot e Lombok na DIO',
            description: '',
            icon: MdCheckCircle,
        }
    ]

    return (
        <>
            <Navigation item={'sobre'} />
            <section className='container-home mb-10 object-cover cursor-default'>
                <div className='container-conteudo-aboutme h-fit pl-6 flex justify-center'>
                    <div className="overflow-hidden bg-transparent sm:py-8">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl my-5 grid-cols-1 gap-x-20 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                <div className="lg:pr-8 lg:pt-4">
                                    <div className="lg:max-w-lg">
                                        <p className="text-3xl tracking-tight text-blue-500 font-black sm:text-4xl">Meus proximos estudos</p>
                                        <p className="mt-6 text-lg leading-8 text-white">
                                            Proximos itens que irei estudar para me aprofundar os meus conhecimentos em desenvolvimento backend.
                                        </p>
                                        <dl className="mt-10 max-w-xl space-y-8 text-base leading-6 text-white lg:max-w-none">
                                            {features.map((feature) => (
                                                <div key={feature.name} className="relative pl-9 text-white">
                                                    <dt className="inline font-semibold text-white">
                                                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                                                        <span className='text-blue-500'>{feature.name}</span>
                                                    </dt>{' '}
                                                    <dd className="inline">{feature.description}</dd>
                                                </div>
                                            ))}
                                            <button onClick={() => navigate('/contact')} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full animate-pulse">
                                                Mande Dicas sobre o que estudar
                                            </button>
                                        </dl>
                                    </div>
                                </div>
                                <img
                                    src={ImagemEstudando}
                                    alt="Product screenshot"
                                    className="hidden sm:flex h-auto max-w-none rounded-xl sm:w-[30rem] md:-ml-4 lg:-ml-0"
                                />
                            </div>
                            <hr />
                            <div className="mx-auto grid max-w-2xl my-5 justify-center grid-cols-1 gap-x-20 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                <img
                                    src={ImagemFormacao}
                                    alt="Product screenshot"
                                    loading="lazy"
                                    className="hidden sm:flex h-auto max-w-none rounded-xl sm:w-[30rem] md:-ml-4 lg:-ml-0"
                                />
                                <div className="lg:pr-8 lg:pt-4">
                                    <div className="lg:max-w-lg">
                                        <p className="text-3xl tracking-tight text-blue-500 font-black sm:text-4xl">Meus diplomas e cursos</p>
                                        <p className="mt-6 text-lg leading-8 text-white">
                                            Proximos itens que irei estudar para me aprofundar os meus conhecimentos em desenvolvimento backend.
                                        </p>
                                        <dl className="mt-10 max-w-xl space-y-4 text-base leading-6 text-white lg:max-w-none">
                                            {studies.map((feature) => (
                                                <div key={feature.name} className="relative pl-9 text-white">
                                                    <dt className="inline font-semibold text-white">
                                                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                                                        <span className='text-blue-500'>{feature.name}</span>
                                                    </dt>{' '}
                                                    <dd className="inline ">{feature.description}</dd>
                                                </div>
                                            ))}
                                            <button onClick={() => navigate('/contact')} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full animate-pulse">
                                                Mande Dicas sobre o que estudar
                                            </button>
                                        </dl>
                                    </div>
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
export default Aboutme;