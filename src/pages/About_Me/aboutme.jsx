import React from 'react';
import "./aboutme.css";
import Navigation from '../../components/Navigation/navigation'
import { BsShieldFillCheck, BsHourglassSplit } from "react-icons/bs";


function Aboutme() {
    const features = [
        {
          name: 'Push to deploy.',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          icon: BsShieldFillCheck,
        },
        {
          name: 'SSL certificates.',
          description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
          icon: BsHourglassSplit,
        },
        {
          name: 'Database backups.',
          description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
          icon: BsHourglassSplit,
        },
      ]

    return (
        <>
            <Navigation item={'sobre'} />
            <section className='container-home mb-10 object-cover cursor-default'>
                <div className='container-conteudo-aboutme h-fit pl-6 flex justify-center'>
                    <div className="overflow-hidden bg-transparent py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                <div className="lg:pr-8 lg:pt-4">
                                    <div className="lg:max-w-lg">
                                        <h2 className="text-base font-semibold leading-7 text-white">Estudos</h2>
                                        <p className="mt-2 text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl">Meus proximos estudos</p>
                                        <p className="mt-6 text-lg leading-8 text-white">
                                            Proximos itens que irei estudar para me aprofundar os meus conhecimentos em desenvolvimento backend. 
                                        </p>
                                        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                                            {features.map((feature) => (
                                                <div key={feature.name} className="relative pl-9">
                                                    <dt className="inline font-semibold text-white">
                                                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                                                        {feature.name}
                                                    </dt>{' '}
                                                    <dd className="inline">{feature.description}</dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                </div>
                                <img
                                    src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                                    alt="Product screenshot"
                                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
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