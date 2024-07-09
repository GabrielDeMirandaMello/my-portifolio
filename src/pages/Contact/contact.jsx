import React, { useState } from 'react';
import "./contact.css";
import Navigation from '../../components/Navigation/navigation'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import ContactForm from "../../components/Contact/contact"
import { MdDownloadForOffline } from "react-icons/md";

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
            <section className='container-home mb-20'>
                <div className='container-conteudo-contato'>
                    <ContactForm />
                    <div class="flex items-center justify-center h-full">
                        <button
                            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            type="button"
                        >
                            Linkdin
                        </button>
                        <button
                            class="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            type="button"
                        >
                            Google
                        </button>
                        <button
                            class="text-white bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-400/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            type="button"
                        >
                            Github
                        </button>
                    </div>
                </div>
            </section>
            <MdDownloadForOffline onClick={() => { window.location.href = 'https://drive.usercontent.google.com/u/0/uc?id=1vZGB7_9f4v7kufSlqTwogy_lRDZ6oRJY&export=download' }} className='fill-blue-500 fixed bottom-10 right-10 h-16 w-16 cursor-pointer' />
            <footer className='w-full flex justify-center'>
                <h4 className='font-black'>Criado por Gabriel Mello, 2024</h4>
            </footer>
        </>
    )
}
export default Contact;