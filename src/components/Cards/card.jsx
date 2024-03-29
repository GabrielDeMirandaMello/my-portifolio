import React, { useEffect } from 'react';
import "./card.css";
import { BsGithub } from "react-icons/bs";
import ScrollReveal from 'scrollreveal';

function Card(props) {

    useEffect(() => {
        ScrollReveal({ reset: true}).reveal('.card-formacao', { duration: 800, distance: '150%', origin: 'left', opacity: 0  });
        ScrollReveal({ reset: true}).reveal('.container-infomacao', { duration: 2000 });
        ScrollReveal({ reset: true}).reveal('.title', { duration: 2500 });
        ScrollReveal({ reset: true}).reveal('.description', { duration: 2500 });
        ScrollReveal({ reset: true}).reveal('.period', { duration: 2500 });
    })

    const abrirNovaAba = () => {
        window.location.href = props.link;
      };

    return (
        <>
            {props.github === 'false' &&
                <div className='card-formacao'>
                    <div className='linha-azul-card'></div>
                    <div className='container-infomacao'>
                        <h1 className='title'>{props.title}</h1>
                        <h4 className='description'>{props.description}</h4>
                        <h4 className='period'>{props.period}</h4>
                    </div>
                </div>}
            {props.github === 'true' &&
                <div className='card-formacao'>
                    <div className='linha-azul-card'></div>
                    <div className='container-infomacao'>
                        <h1 className='title'>{props.title}</h1>
                        <h4 className='description'>{props.description}</h4>
                        <h4 className='period'>{props.period}</h4>
                    </div>
                    <div>
                        <BsGithub className='icon-contato' onClick={abrirNovaAba}/>
                    </div>
                </div>}
        </>
    )
}
export default Card;