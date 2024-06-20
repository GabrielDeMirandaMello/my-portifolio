import React, { useState } from 'react';
import "./contact.css";
import Navigation from '../../components/Navigation/navigation'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

function Contact() {
    const [toEmail, setToEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const sendEmail = (e) => {
        e.preventDefault();
        const serviceId = 'service_xownue3';
        const templateId = 'template_g7r0cbi';
        const userId = 'hxMhd5xnStIDc_3xG';
        const templateParams = {
            from_name: toEmail,
            assunto: subject,
            message: message
        };
        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(() => {
                Toast.fire({
                    icon: "success",
                    title: "E-mail Enviado !"
                });
                setToEmail('');
                setSubject('');
                setMessage('');
            }, (error) => {
                console.error('Erro ao enviar o email:', error);
            });
    };

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
                                <p style={{ margin: '5px 0 30px 0' }}>Assunto:</p>
                                <p style={{ margin: '5px 0 30px 0' }}>Email:</p>
                                <p style={{ margin: '10px 0 20px 0' }}>Mensagem: </p>
                            </div>
                            <div className='inputs-forms'>
                                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                <input type="text" value={toEmail} onChange={(e) => setToEmail(e.target.value)} />
                                <input className='input-mensagem' type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                        </div>
                        <button className='btn-enviar-mensagem' onClick={sendEmail}>Enviar Mensagem</button>
                    </div>
                    <p>ou</p>
                    <div className='container-icon'>
                        <a href="https://github.com/GabrielDeMirandaMello">
                            <BsGithub className='icon-contato' href='' />
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-de-miranda-mello-652346118/">
                            <BsLinkedin className='icon-contato' />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;