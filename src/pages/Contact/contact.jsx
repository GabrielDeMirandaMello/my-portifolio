import React, { useState } from 'react';
import "./contact.css";
import Navigation from '../../components/Navigation/navigation'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import ContactForm from "../../components/Contact/contact"
import { MdDownloadForOffline  } from "react-icons/md";

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
            <MdDownloadForOffline  className='fill-blue-500 fixed bottom-10 right-10 h-16 w-16 cursor-pointer'/>
            <section className='container-home mb-20'>
                <div className='container-conteudo-contato'>
                    <ContactForm />
                    {/* <div className='container-icon'>
                        <a href="https://github.com/GabrielDeMirandaMello">
                            <BsGithub className='icon-contato' href='' />
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-de-miranda-mello-652346118/">
                            <BsLinkedin className='icon-contato' />
                        </a>
                    </div> */}
                </div>
            </section>
        </>
    )
}
export default Contact;