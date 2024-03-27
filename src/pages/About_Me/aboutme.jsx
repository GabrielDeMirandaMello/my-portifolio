import React from 'react';
import "./aboutme.css";
import Navigation from '../../components/Navigation/navigation'

function Aboutme() {
    return (
        <>
            <Navigation item={'sobre'} />
            <section className='container-home'>
                <div className='linha-azul'></div>
                <div className='container-conteudo'>
                    <div className='texto-home'>
                        <p>Olá! Sou <span style={{color:'#007FFF'}}>Gabriel De Miranda Mello</span>, um profissional apaixonado por Tecnologia. Estou aqui para compartilhar um pouco sobre mim e minhas habilidades.
                            Desde jovem, sempre fui fascinado por Tecnologia. Ao longo dos anos, dediquei-me a aprimorar minhas habilidades e conhecimentos nesse campo, buscando constantemente novos desafios e oportunidades de crescimento.
                        </p>
                        <p className='minhas-habilidades-home'>Minhas Habilidades:</p>
                        <ul className='lista-habilidades-home'>
                            <li><span style={{color:'#007FFF'}}>Java:</span> Foi a primeira linguagem fortimente tipada que aprendi na faculdade e uso até hoje.</li>
                            <li><span style={{color:'#007FFF'}}>Spring Boot:</span> Sempre trabalhei muito com java e acabei aprendendo bastante sobre e apliquei esses conhecimentos nos meus projetos criando APIs Restfull.</li>
                            <li><span style={{color:'#007FFF'}}>PostgreSQL:</span> Aprendi a utlizar em minha primeira experiencia profissional e ainda utilizo em meus projetos.</li>
                        </ul>
                        <p>
                            Estou animado para compartilhar mais sobre meu trabalho e experiências. Convido você a explorar meu portfólio, onde você encontrará uma amostra dos projetos que realizei, as habilidades que possuo. Se você estiver interessado em colaborar ou tiver alguma pergunta, não hesite em entrar em contato. Estou ansioso para conectar-me.
                        </p>
                    </div>
                </div>
            </section>
        
        </>
    )
}
export default Aboutme;