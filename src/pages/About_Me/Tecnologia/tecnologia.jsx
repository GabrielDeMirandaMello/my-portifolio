import React, { useEffect } from 'react';
import "./tecnologia.css";
import Navigation from '../../../components/Navigation/navigation'
import ScrollReveal from 'scrollreveal';
import { FaJava, FaStar } from "react-icons/fa6";

function Tecnologia() {
    useEffect(() => {
        ScrollReveal({ reset: true }).reveal('.title-formacao', { duration: 1000 });
    })

    return (
        <>
            <Navigation item={'sobre'} />
            <section className='container-home'>
                <div className='linha-azul-tecnologia'></div>
                <div className='container-conteudo-aboutme'>
                    <h1 className='title-tecnologia'>{`<Tecnologias e Ferramenats />`}</h1>
                    <section className='container-cards'>
                        <div className='card-tecnologia'>
                            <div className='container-icon-tecnologia'>
                                <FaJava className='icon-tecnologia' />
                            </div>
                            <h3 className='name-tecnologia'>Java</h3>
                            <div className='nivel-conhecimento-tecnologia'>
                                <h4>Conhecimento</h4>
                                <div>
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className='card-tecnologia'>
                            <div className='container-icon-tecnologia'>
                                <svg className='icon-tecnologia' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#007FFF" d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"></path><path fill="#fff" d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"></path>
                                </svg>
                            </div>
                            <h3 className='name-tecnologia'>Spring Boot</h3>
                            <div className='nivel-conhecimento-tecnologia'>
                                <h4>Conhecimento</h4>
                                <div>
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className='card-tecnologia'>
                            <div className='container-icon-tecnologia'>
                                <svg className='icon-tecnologia' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path fill="#007FFF" d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z"></path>
                                </svg>
                            </div>
                            <h3 className='name-tecnologia'>JavaScript</h3>
                            <div className='nivel-conhecimento-tecnologia'>
                                <h4>Conhecimento</h4>
                                <div>
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className='card-tecnologia'>
                            <div className='container-icon-tecnologia'>
                                <svg className='icon-tecnologia' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path fill="#007FFF" d="M 35.199219 2.101563 C 33.699219 2.101563 32.398438 2.398438 31.199219 2.699219 C 33.300781 3.597656 34.601563 4.699219 35.300781 5.199219 C 36.902344 6.597656 37.800781 8 39.402344 10.300781 C 39.699219 10.800781 40.199219 11.5 40.5 12.597656 C 40.800781 13.597656 40.800781 14.398438 40.800781 15.199219 C 40.800781 16.300781 40.699219 17.199219 40.597656 18.097656 C 40.5 18.800781 40.5 19.101563 40.402344 19.300781 C 40.402344 19.402344 40.402344 19.5 40.300781 19.699219 C 40.300781 20.199219 40.300781 20.402344 40.402344 20.800781 C 40.402344 21.199219 40.5 21.601563 40.5 22.300781 C 40.601563 23.601563 40.601563 24.5 40.402344 25.597656 L 40.402344 26 C 40.199219 26.898438 40 27.800781 39.5 28.597656 C 39.601563 28.800781 39.699219 28.898438 39.800781 29.097656 C 40.300781 28.398438 40.699219 27.699219 41.097656 26.902344 C 42.300781 24.699219 43 22.800781 43.5 21.402344 C 44.398438 18.800781 44.898438 16.898438 45.199219 15.5 C 45.898438 12.5 46 11.101563 45.699219 9.5 C 45.699219 9 45.5 8.097656 45 7.199219 C 43.898438 5.199219 42.199219 4.300781 41 3.699219 C 40.199219 3.300781 38.097656 2.199219 35.199219 2.101563 Z M 13.535156 2.542969 C 12.382813 2.519531 10.976563 2.648438 9.398438 3.398438 C 8.898438 3.601563 7.398438 4.300781 6.199219 5.898438 C 5.398438 6.898438 4.800781 8.398438 4.5 10.097656 C 4.199219 11.597656 4.097656 13.402344 4.699219 16.800781 C 5.097656 19.199219 5.5 20.800781 6.300781 24.097656 C 6.402344 24.5 7 26.300781 8.300781 30.300781 L 8.398438 30.5 C 8.601563 31.199219 9.199219 32.699219 10.5 34.199219 C 11.398438 35.199219 12.199219 35.800781 12.902344 35.800781 L 13.097656 35.800781 C 14.398438 35.800781 15.300781 34.800781 16.097656 34 C 16.097656 33.898438 18 31.601563 18.699219 30.800781 C 18.597656 30.699219 18.402344 30.699219 18.300781 30.597656 C 17.101563 29.898438 16.199219 28.800781 15.5 27.597656 C 14.300781 25.398438 14.398438 23.199219 14.597656 22.097656 L 14.699219 20.402344 C 14.300781 17.699219 14.402344 15.101563 14.902344 12.5 C 15.300781 10.300781 15.800781 8.101563 17.597656 5.800781 C 18.199219 5 18.898438 4.300781 19.597656 3.800781 C 18 3.101563 16.300781 2.699219 14.597656 2.601563 C 14.273438 2.574219 13.917969 2.550781 13.535156 2.542969 Z M 26.097656 3.398438 C 25.597656 3.398438 25.097656 3.398438 24.597656 3.5 C 22.597656 3.898438 20.699219 5 19.199219 6.898438 C 17.699219 8.800781 17.300781 10.597656 16.902344 12.699219 C 16.699219 13.5 16.699219 14.199219 16.597656 15 C 17.199219 14.5 18 13.898438 19.199219 13.597656 C 19.898438 13.398438 21.699219 12.800781 23.199219 13.699219 C 23.699219 14 24.398438 14.601563 25.097656 16.300781 C 26.597656 20.5 25.101563 24.800781 24.902344 25.199219 C 24.800781 25.597656 24.601563 25.898438 24.5 26.097656 C 24.300781 26.597656 24.101563 27 23.902344 27.800781 C 23.800781 28.5 23.699219 29.101563 23.699219 29.800781 C 24 29.800781 24.300781 29.898438 24.597656 30.097656 C 25.097656 30.597656 25.199219 31.300781 25.300781 31.597656 C 25.5 33.199219 25.5 35.199219 25.5 37.199219 C 25.5 38.800781 25.5 40.300781 25.597656 41.300781 C 25.800781 43.601563 26.5 45.199219 27.5 46 C 28.199219 46.601563 29.097656 46.597656 29.597656 46.699219 L 29.800781 46.699219 C 31.300781 46.699219 33.699219 45.699219 34.597656 44.300781 C 35.097656 43.5 35.300781 42.800781 35.5 41.800781 C 35.601563 41.199219 35.597656 40.902344 35.699219 40.300781 C 35.699219 40 35.800781 39.5 35.800781 38.902344 C 35.800781 38.402344 35.898438 37.800781 36 37.097656 C 36.101563 35.398438 36.398438 33.402344 36.5 32.300781 C 36.601563 31 37.199219 29.898438 37.699219 29.199219 C 37 29.097656 36.300781 28.5 35.902344 27.5 C 35.300781 26.398438 35.199219 26.097656 35.097656 25.597656 C 35 25.199219 34.800781 24.699219 34.097656 23.199219 C 32.597656 19.800781 32.402344 18.800781 32.402344 18 C 32.300781 16.898438 32.199219 15.402344 33.402344 14.402344 C 35.199219 12.800781 37.5 12.902344 38.699219 13.300781 L 38.699219 13.097656 C 38.5 12.300781 38.101563 11.699219 37.800781 11.300781 C 36.300781 9 35.5 7.800781 34.097656 6.601563 C 33.5 6.101563 32 4.898438 29.800781 4.101563 C 28.800781 3.800781 27.597656 3.398438 26.097656 3.398438 Z M 37.152344 15.125 C 36.425781 15.074219 35.5 15.199219 34.699219 15.902344 C 34.300781 16.300781 34.300781 17.101563 34.402344 17.800781 C 34.402344 18.300781 34.5 19 36 22.402344 C 36.699219 24 36.898438 24.5 37 24.902344 C 37.101563 25.300781 37.199219 25.5 37.800781 26.597656 C 37.902344 26.800781 38 27 38.199219 27.199219 C 38.398438 26.898438 38.5 26.398438 38.597656 25.597656 L 38.699219 25.300781 C 38.898438 24.402344 38.800781 23.699219 38.800781 22.5 C 38.800781 21.898438 38.699219 21.5 38.699219 21.199219 C 38.597656 20.699219 38.597656 20.300781 38.597656 19.699219 C 38.398438 19.398438 38.398438 19.300781 38.5 19.097656 C 38.5 18.898438 38.597656 18.601563 38.699219 18 C 38.800781 17.199219 38.902344 16.5 38.902344 15.699219 C 38.699219 15.597656 38.601563 15.5 38.402344 15.402344 C 38.402344 15.402344 37.875 15.175781 37.152344 15.125 Z M 21.515625 15.519531 C 20.878906 15.445313 20.148438 15.652344 19.699219 15.800781 C 18.597656 16.101563 17.902344 16.800781 17.402344 17.199219 C 17.101563 17.5 16.800781 17.800781 16.5 18.199219 C 16.5 18.898438 16.597656 19.601563 16.699219 20.300781 L 16.699219 20.402344 L 16.5 22.402344 C 16.300781 23.300781 16.199219 25 17.199219 26.699219 C 17.699219 27.699219 18.402344 28.5 19.300781 29 C 19.902344 29.398438 20.699219 29.699219 21.597656 29.902344 C 21.597656 29.199219 21.699219 28.398438 21.800781 27.699219 C 22 26.699219 22.199219 26.199219 22.5 25.597656 C 22.601563 25.300781 22.699219 25.101563 22.902344 24.800781 C 23 24.5 24.398438 20.699219 23.097656 17.199219 C 22.800781 16.398438 22.5 15.898438 22.097656 15.699219 C 21.925781 15.597656 21.722656 15.542969 21.515625 15.519531 Z M 36.1875 16.089844 C 36.449219 16.074219 36.699219 16.097656 36.800781 16.199219 C 37.101563 16.398438 36.699219 16.898438 36.597656 17 C 36.5 17.101563 36.300781 17.300781 36 17.402344 C 35.601563 17.5 35.300781 17.199219 35.199219 17.199219 C 35.097656 17.097656 34.800781 16.800781 34.902344 16.5 C 35 16.300781 35.101563 16.300781 35.5 16.199219 C 35.648438 16.148438 35.925781 16.101563 36.1875 16.089844 Z M 21.15625 16.917969 C 21.492188 16.894531 21.773438 17.023438 22 17.097656 C 22.300781 17.199219 22.597656 17.300781 22.597656 17.5 C 22.699219 17.800781 22.402344 18 22.300781 18.097656 C 22 18.398438 21.5 18.402344 21.5 18.402344 C 21 18.402344 20.699219 18.101563 20.5 17.800781 C 20.398438 17.699219 20.300781 17.5 20.402344 17.300781 C 20.5 17.101563 20.699219 17 20.800781 17 C 20.925781 16.949219 21.042969 16.925781 21.15625 16.917969 Z M 39.5 30 C 39 30.699219 38.300781 31.601563 38.199219 32.800781 C 38.199219 33 38.199219 33.101563 38.097656 33.300781 C 38.898438 33.5 39.601563 33.5 40.300781 33.402344 C 41.902344 33.199219 43 32.398438 43.199219 32.199219 C 43.898438 31.699219 44.800781 30.699219 44.597656 30.300781 C 44.5 30.101563 44.199219 30.199219 42.597656 30.300781 C 42.199219 30.300781 41 30.601563 40.199219 30.402344 L 40 30.402344 C 39.800781 30.300781 39.601563 30.199219 39.5 30 Z M 22.097656 32 C 21.898438 32.300781 21.601563 32.5 21.402344 32.699219 C 20.601563 33.199219 19.597656 33.601563 18.597656 33.800781 C 17.699219 34.101563 17.199219 34.101563 17.199219 34.402344 C 17.097656 34.800781 18.097656 35.300781 18.597656 35.5 C 20.300781 36.199219 22 35.800781 22.300781 35.699219 C 22.5 35.597656 23 35.398438 23.5 35.097656 C 23.5 34 23.402344 33 23.300781 32.199219 L 23.300781 32.097656 L 23.199219 32.097656 C 22.898438 32.097656 22.5 32.101563 22.097656 32 Z"></path>
                                </svg>
                            </div>
                            <h3 className='name-tecnologia'>PostgreSQL</h3>
                            <div className='nivel-conhecimento-tecnologia'>
                                <h4>Conhecimento</h4>
                                <div>
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className='card-tecnologia'>
                            <div className='container-icon-tecnologia'>
                                <img className='icon-tecnologia' src="data:image/png;base64,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"></img>
                            </div>
                            <h3 className='name-tecnologia'>MYSQL</h3>
                            <div className='nivel-conhecimento-tecnologia'>
                                <h4>Conhecimento</h4>
                                <div>
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className='card-tecnologia'>
                            <div className='container-icon-tecnologia'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40.343 42">
                                    <g data-name="Ð¡Ð»Ð¾Ð¹ 2"><path fill="#2684ff" d="M20.172,27.858,13.314,21l6.858-6.858V0L.586,19.586a2,2,0,0,0,0,2.828L20.172,42s3-2,3-7A11.639,11.639,0,0,0,20.172,27.858Z"></path><path fill="#1d78f2" d="M14.385,19.667l.131.131,5.656-5.656V0L9.571,10.6A20.2,20.2,0,0,0,14.385,19.667Z"></path><path fill="#126ae5" d="M15.832,18.285l.1.1,4.242-4.242V0L11.306,8.866A18.21,18.21,0,0,0,15.832,18.285Z"></path><path fill="#0b60da" d="M20.172,14.142V0l-7,7a15.546,15.546,0,0,0,4.171,9.97Z"></path><path fill="#0154ce" d="M15.172,7c0,4.746,3.407,8.371,3.585,8.556l1.415-1.414V0L15.35,4.822A13.161,13.161,0,0,0,15.172,7Z"></path><path fill="#2482fd" d="M20.172,14.142,27.029,21l-6.857,6.858V42L39.757,22.414a2,2,0,0,0,0-2.828L20.172,0s-3,2-3,7A11.639,11.639,0,0,0,20.172,14.142Z"></path><path fill="#1d78f2" d="M25.958,22.333l-.131-.131-5.655,5.656V42l10.6-10.6A20.2,20.2,0,0,0,25.958,22.333Z"></path><path fill="#126ae5" d="M24.511,23.715l-.1-.1-4.241,4.242V42l8.866-8.866A18.216,18.216,0,0,0,24.511,23.715Z"></path><path fill="#0b60da" d="M20.172,27.858V42l7-7A15.545,15.545,0,0,0,23,25.03Z"></path><path fill="#0154ce" d="M25.172,35c0-4.746-3.407-8.371-3.586-8.556l-1.414,1.414V42l4.822-4.822A13.27,13.27,0,0,0,25.172,35Z"></path><path fill="#2684ff" d="M20.172,27.858,13.314,21H2.172v3l18,18s3-2,3-7A11.639,11.639,0,0,0,20.172,27.858Z"></path></g>
                                </svg>
                            </div>
                            <h3 className='name-tecnologia'>Jira Software</h3>
                            <div className='nivel-conhecimento-tecnologia'>
                                <h4>Conhecimento</h4>
                                <div>
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className='card-tecnologia'>
                            <div className='container-icon-tecnologia'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#03A9F4" d="M40,20c0.391-1.735-0.092-3.78-2.5-6c-3.914,3.543-2.795,7.227-1.5,9c0,0-0.166,1-4,1S2,24,2,24S0.167,40,18,40c15.593,0,19.973-12.003,20.828-15.076C39.182,24.972,39.579,25.003,40,25c2.147-0.017,4.93-1.171,6-5.484C43.162,18.533,41.339,18.978,40,20z"></path><path fill="#0288D1" d="M2.165,28C2.9,32.739,5.983,40,18,40c12.185,0,17.523-7.33,19.682-12H2.165z"></path><path fill="#81D4FA" d="M19.812,39.938C18.892,39.616,14.74,38.848,14,33c-4.209,1.863-7.938,1.375-9.579,1.008C6.583,37.237,10.591,40,18,40C18.623,40,19.224,39.976,19.812,39.938z"></path><path fill="#FFF" d="M18 30A2 2 0 1 0 18 34A2 2 0 1 0 18 30Z"></path><path fill="#37474F" d="M14.914,33.597c0.224,0.505,0.02,1.162-0.51,1.318c-3.301,0.973-6.146,1.102-8.297,1.102c-0.644-0.619-1.194-1.279-1.656-1.963c2.585,0,6.71-0.12,9.144-0.966C14.117,32.906,14.69,33.09,14.914,33.597z M2,27c0,0,1.875,0.125,3-1c1.875,1.688,5.94,1.088,7,0c1.063,1.688,6.938,1.375,8,0c1.25,1.438,6.625,1.75,8,0c0.479,1.461,6.819,1.874,8,0c1.061,1.088,5.063,1.938,7.311,0C43.875,27.188,46,27,46,27v1H2 M17,32c0,0.552,0.448,1,1,1s1-0.448,1-1s-0.448-1-1-1S17,31.448,17,32z"></path><path fill="#01579B" d="M11,24H6v-5h5V24z M21,19h-5v5h5V19z M31,19h-5v5h5V19z M16,14h-5v5h5V14z M26,14h-5v5h5V14z"></path><path fill="#0288D1" d="M16,24h-5v-5h5V24z M26,19h-5v5h5V19z M26,9h-5v5h5V9z M21,14h-5v5h5V14z"></path>
                                </svg>
                            </div>
                            <h3 className='name-tecnologia'>Docker</h3>
                            <div className='nivel-conhecimento-tecnologia'>
                                <h4>Conhecimento</h4>
                                <div>
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className='card-tecnologia'>
                            <div className='container-icon-tecnologia'>
                                <img width="100" height="100" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-apache-a-free-and-open-source-cross-platform-web-server-software-logo-color-tal-revivo.png" alt="external-apache-a-free-and-open-source-cross-platform-web-server-software-logo-color-tal-revivo" />
                            </div>
                            <h3 className='name-tecnologia'>Maven</h3>
                            <div className='nivel-conhecimento-tecnologia'>
                                <h4>Conhecimento</h4>
                                <div>
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className='card-tecnologia'>
                            <div className='container-icon-tecnologia'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <polygon fill="#0d91d6" points="24,6 17.99,12.35 11.97,18.69 6,25 6,6"></polygon><polygon fill="#f88909" points="24,6 23.96,6 17.97,12.33 11.96,18.68 6,24.97 6,25 6,25.09 6,42 14.69,33.31 20.87,27.13 27.06,20.94 33.25,14.75 42,6"></polygon><polygon fill="#c757bc" points="14.69,33.31 6,42 6,25.09"></polygon><polygon fill="#d3638f" points="20.87,27.13 14.69,33.31 6,25.09 6,25 11.97,18.69"></polygon><polygon fill="#e07063" points="27.06,20.94 20.87,27.13 11.97,18.69 17.99,12.35"></polygon><polygon fill="#ec7d36" points="33.25,14.75 27.06,20.94 17.99,12.35 24,6"></polygon><polygon fill="#f88909" points="42,6 33.25,14.75 24,6"></polygon><polygon fill="#0095d5" points="11.51,19.15 7.99,22.88 6,21 6,13.94"></polygon><polygon fill="#2b88da" points="15.03,15.42 11.51,19.15 6,13.94 6,6.87"></polygon><polygon fill="#557bde" points="18.56,11.7 15.03,15.42 6,6.87 6,6 12.53,6"></polygon><polygon fill="#806ee3" points="22.08,7.97 18.56,11.7 12.53,6 24,6"></polygon><polygon fill="#0095d5" points="23,25 6,42 9.35,42 17.52,42 40,42"></polygon><polygon fill="#2b88da" points="25.68,42 17.52,42 11.76,36.25 15.84,32.17"></polygon><polygon fill="#557bde" points="33.86,42 25.68,42 15.84,32.17 19.92,28.09"></polygon><polygon fill="#806ee3" points="42,42 33.86,42 19.92,28.09 24,24"></polygon>
                                </svg>
                            </div>
                            <h3 className='name-tecnologia'>Kotlin</h3>
                            <div className='nivel-conhecimento-tecnologia'>
                                <h4>Conhecimento</h4>
                                <div>
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className='card-tecnologia'>
                            <div className='container-icon-tecnologia'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                                </svg>
                            </div>
                            <h3 className='name-tecnologia'>HTML 5</h3>
                            <div className='nivel-conhecimento-tecnologia'>
                                <h4>Conhecimento</h4>
                                <div>
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className='card-tecnologia'>
                            <div className='container-icon-tecnologia'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                                </svg>
                            </div>
                            <h3 className='name-tecnologia'>CSS 3</h3>
                            <div className='nivel-conhecimento-tecnologia'>
                                <h4>Conhecimento</h4>
                                <div>
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar className='star-icon-tecnologia' />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

        </>
    )
}
export default Tecnologia;