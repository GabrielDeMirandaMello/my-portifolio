import React, { useEffect } from 'react';
import "./home.css";
import Navigation from '../../components/Navigation/navigation'
import FotoProfiddional from '../../assets/foto_formal_sem_fundo 1.png'
import ScrollReveal from 'scrollreveal';

function Home() {
    useEffect(() => {
        ScrollReveal().reveal('.img-home', { duration: 2000 });
        ScrollReveal({ reset: true}).reveal('.letra1', { delay: 100 });
        ScrollReveal().reveal('.letra2', { delay: 200 });
        ScrollReveal().reveal('.letra3', { delay: 300 });
        ScrollReveal().reveal('.letra4', { delay: 400 });
        ScrollReveal().reveal('.letra5', { delay: 500 });
        ScrollReveal().reveal('.letra6', { delay: 600 });
        ScrollReveal().reveal('.letra7', { delay: 700 });
        ScrollReveal().reveal('.letra8', { delay: 800 });
        ScrollReveal().reveal('.letra9', { delay: 900 });
        ScrollReveal().reveal('.letra10', { delay: 1000 });
        ScrollReveal().reveal('.letra11', { delay: 1100 });
        ScrollReveal().reveal('.letra12', { delay: 1200 });
        ScrollReveal().reveal('.letra13', { delay: 1300 });
        ScrollReveal().reveal('.letra14', { delay: 1400 });
        ScrollReveal().reveal('.letra15', { delay: 1500 });
        ScrollReveal().reveal('.letra16', { delay: 1600 });
        ScrollReveal().reveal('.letra17', { delay: 1700 });
        ScrollReveal().reveal('.letra18', { delay: 1800 });
        ScrollReveal().reveal('.letra19', { delay: 1900 });
        ScrollReveal().reveal('.letra20', { delay: 2000 });
        ScrollReveal().reveal('.letra21', { delay: 2100 });
        ScrollReveal().reveal('.letra22', { delay: 2200 });
        ScrollReveal().reveal('.letra23', { delay: 2300 });
        ScrollReveal().reveal('.letra24', { delay: 2400 });
    })

    return (
        <>
            <Navigation item={'pagina inicial'} />
            <section className='container-home'>
                <div className='linha-azul'></div>
                <div className='container-conteudo'>
                    <div className='texto-home'>
                        <p> Olá! Sou <span style={{ color: '#007FFF', fontWeight: 900 }}>
                        <span className='letra1'>G</span>
                        <span className='letra2'>a</span>
                        <span className='letra3'>b</span>
                        <span className='letra4'>r</span>
                        <span className='letra5'>i</span>
                        <span className='letra6'>e</span>
                        <span className='letra7'>l</span>
                        <span className='letra8'>_</span>
                        <span className='letra9'>D</span>
                        <span className='letra10'>e</span>
                        <span className='letra11'>_</span>
                        <span className='letra12'>M</span>
                        <span className='letra13'>i</span>
                        <span className='letra14'>r</span>
                        <span className='letra15'>a</span>
                        <span className='letra16'>n</span>
                        <span className='letra17'>d</span>
                        <span className='letra18'>a</span>
                        <span className='letra19'>_</span>
                        <span className='letra20'>M</span>
                        <span className='letra21'>e</span>
                        <span className='letra22'>l</span>
                        <span className='letra23'>l</span>
                        <span className='letra24'>o</span>

                        </span> , um profissional apaixonado por Tecnologia. Estou aqui para compartilhar um pouco sobre mim e minhas habilidades.
                        Desde jovem, sempre fui fascinado por Tecnologia. Ao longo dos anos, dediquei-me a aprimorar minhas habilidades e conhecimentos nesse campo, buscando constantemente novos desafios e oportunidades de crescimento.
                        Estou animado para compartilhar mais sobre meu trabalho e experiências. Convido você a explorar meu portfólio, onde você encontrará uma amostra dos projetos que realizei, as habilidades que possuo. Se você estiver interessado em colaborar ou tiver alguma pergunta, não hesite em entrar em contato. Estou ansioso para conectar-me.
                        </p>
                    </div>
                    <img className='img-home' src={FotoProfiddional} alt="" />
                </div>
            </section>

        </>
    )
}
export default Home;