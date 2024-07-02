import React from 'react';
import "./roadmap.css";
import Navigation from '../../components/Navigation/navigation'
import { MdCheckCircle, MdOutlineLens } from "react-icons/md";
import { MdDownloadForOffline } from "react-icons/md";
import ImagemEstudando from '../../assets/close-up-homem-trabalhando-com-laptop.jpg'
import { useNavigate } from 'react-router-dom';

function Aboutme() {
    const navigate = useNavigate()
    const features = [
        {
            name: 'Java Avançado:',
            description:
                'Threads, Generics, Serialization, Spring Cloud, Spring Batch, Hibernate, SLF4J, JDBC Template e Rest Assured.',
            icon: MdCheckCircle,
        },
        {
            name: 'AWS:',
            description: 'Fundamentos de AWS, Lambda, S3 (Simple Storage Service), Aurora, Microservices with AWS.',
            icon: MdCheckCircle,
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
    return (
        <>
            <Navigation item={'sobre'} />
            <MdDownloadForOffline onClick={() => { window.location.href = 'https://drive.usercontent.google.com/u/0/uc?id=1vZGB7_9f4v7kufSlqTwogy_lRDZ6oRJY&export=download' }} className='fill-blue-500 fixed bottom-10 right-10 h-16 w-16 cursor-pointer' />
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
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Aboutme;