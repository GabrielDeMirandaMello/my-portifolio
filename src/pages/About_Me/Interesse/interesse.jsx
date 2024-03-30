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
                        title={'Ler livros sobre Tecnologias'}
                        description={'Breve descrição.'}
                        period={'Normalmente 1 hr por dia'}
                        github={'false'}
                        link={'none'}
                    />
                    <Card
                        title={'Jogos Online'}
                        description={'Breve descrição.'}
                        period={'Normalmente quando amigos me chaman para jogar'}
                        github={'false'}
                        link={'none'}
                    />
                </div>
            </section>

        </>
    )
}
export default Interesse;