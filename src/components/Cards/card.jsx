import React from 'react';
import "./card.css";
import { BsGithub } from "react-icons/bs";

function Card(props) {

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