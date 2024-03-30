import React, { useEffect } from 'react';
import "./interesse.css";
import Navigation from '../../../components/Navigation/navigation'
import Card from '../../../components/Cards/card';
import ScrollReveal from 'scrollreveal';

function Interesse() {
    useEffect(() => {
        ScrollReveal({ reset: true}).reveal('.title-formacao', { duration: 1000 });
    })

    return (
        <>
            <Navigation item={'sobre'} />
            <section className='container-home'>
                <div className='linha-azul-interesse'></div>
                <div className='container-conteudo-aboutme'>
                    <h1 className='title-aboutme'>{`<Interesses />`}</h1>
                    <Card
                        title={'Ler Livros'}
                        description={'Acabei lendo o famoso livro Clean Code de Robert C. Martin, pretendo ler muitos outros ainda como Clean Architecture, Entendendo Algoritmos, Lean Startup entre outros.'}
                        period={'Normalmente 1 hr por dia, Segunda a Sexta.'}
                        github={'false'}
                        link={'none'}
                    />
                    <Card
                        title={'Jogos Online e Estratégia em Tempo Real'}
                        description={'Ultimamente jogo Fortnite, Valorant e gosto muito de Jogos de estratégia em tempo real, como a saga Total War.'}
                        period={'Normalmente quando amigos me chaman para jogar e para me divertir.'}
                        github={'false'}
                        link={'none'}
                    />
                </div>
            </section>

        </>
    )
}
export default Interesse;