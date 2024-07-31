import React from 'react';
import "./contact.css";
import Navigation from '../../components/Navigation/navigation'
import ContactForm from "../../components/Contact/contact"
import Speed from "../../components/Speed/speed"

function Contact() {


    return (
        <>
            <Navigation item={'contato'} />
            <section className='container-home mb-20'>
                <div className='container-conteudo-contato'>
                    <ContactForm />
                    <div className="flex items-center justify-center h-full">
                        <button
                            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            type="button"
                            onClick={() => {window.location.href = 'https://www.linkedin.com/in/gabriel-de-miranda-mello-652346118/'}}
                        >
                            Linkdin
                        </button>
                        <button
                            className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            type="button"
                            onClick={() => {window.location.href = 'mailto:Gabrielmirandamello9@gmail.com'}}
                        >
                            Google
                        </button>
                        <button
                            className="text-white bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-400/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            type="button"
                            onClick={() => {window.location.href = 'https://github.com/GabrielDeMirandaMello'}}
                        >
                            Github
                        </button>
                    </div>
                </div>
            </section>
            <Speed />
            <footer className='w-full flex justify-center'>
                <h4 className='font-black'>&copy; Gabriel Mello, 2024</h4>
            </footer>
        </>
    )
}
export default Contact;