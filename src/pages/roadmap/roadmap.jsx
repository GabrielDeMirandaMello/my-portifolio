import React from 'react';
import "./roadmap.css";
import Navigation from '../../components/Navigation/navigation'
import { BsFillMortarboardFill } from "react-icons/bs";
import { MdCheckCircle, MdOutlineLens } from "react-icons/md";

function Aboutme() {
    
    const features = [
        {
          name: 'Java Avançado:',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          icon: MdCheckCircle,
        },
        {
            name: 'Docker:',
            description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
            icon: MdCheckCircle,
        },
        {
          name: 'Banco de Dados:',
          description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
          icon: MdOutlineLens,
        },
        {
          name: 'Arquitetura de Software:',
          description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
          icon: MdOutlineLens,
        },
        {
            name: 'Arquitetura de Software:',
            description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
            icon: MdOutlineLens,
          },
          {
            name: 'Arquitetura de Software:',
            description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
            icon: MdOutlineLens,
          },
          {
            name: 'Arquitetura de Software:',
            description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
            icon: MdOutlineLens,
          },
          {
            name: 'Arquitetura de Software:',
            description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
            icon: MdOutlineLens,
          },
      ]

    return (
        <>
            <Navigation item={'sobre'} />
            <section className='container-home mb-10 object-cover cursor-default'>
                <div className='container-conteudo-aboutme h-fit pl-6 flex justify-center'>
                    <div className="overflow-hidden bg-transparent sm:py-8">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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
                                        </dl>
                                    </div>
                                </div>
                                <BsFillMortarboardFill
                                    alt="Product screenshot"
                                    className="w-[10rem] h-auto max-w-none rounded-xl sm:w-[30rem] md:-ml-4 lg:-ml-0"
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