import React from 'react';
import "./contact.css";
import Navigation from '../../components/Navigation/navigation'
import { BsGoogle, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

function Contact() {
    return (
        <>
            <Navigation item={'contato'} />
            <section className='container-home'>
                <div className='linha-azul'></div>
                <div className='container-conteudo-contato'>
                    <div>
                        <p className='texto-top'>Caso tenha se interresado em me contratar ou em compartilhar informações, entre em contato:</p>
                    </div>
                    <div className='container-card-formulario'>
                        <div className='card-formulario'>
                            <div>
                                <p style={{margin:'5px 0 30px 0'}}>Assunto:</p>
                                <p style={{margin:'5px 0 30px 0'}}>Email:</p>
                                <p style={{margin:'10px 0 20px 0'}}>Mensagem: </p>
                            </div>
                            <div style={{width:'80%'}}>
                                <input type="text"  />
                                <input type="text" />
                                <input className='input-mensagem' type="text" />
                            </div>
                        </div>
                        <button className='btn-enviar-mensagem'>Enviar Mensagem</button>
                    </div>
                    <p style={{ marginTop: '5%' }}>ou</p>
                    <div className='container-icon'>
                        <BsGithub className='icon-contato' />
                        <BsLinkedin className='icon-contato' />
                        <BsWhatsapp className='icon-contato' />
                        <BsGoogle className='icon-contato' />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;