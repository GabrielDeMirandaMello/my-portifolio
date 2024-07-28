import React from 'react';
import "./home.css";
import Navigation from '../../components/Navigation/navigation'
import { MdDownloadForOffline } from "react-icons/md";
import SpeedDial from "../../components/SpeedDial/speeddial"
import JavaImage from "../../assets/tecnologies/img_java.jpeg"
import SpringBoot from "../../assets/tecnologies/springBoot.png"
import JasonWebToken from "../../assets/tecnologies/jwt_icon.png"
import JUnit from "../../assets/tecnologies/JUnit5.png"
import Mysql from "../../assets/tecnologies/mysql.webp"
import PostgreSQL from "../../assets/tecnologies/postgresql.webp"
import Swagger from "../../assets/tecnologies/swagger.jpeg"
import Docker from "../../assets/tecnologies/docker.webp"
import ApacheKafka from "../../assets/tecnologies/apache_kafka.webp"
import AWSEC2 from "../../assets/tecnologies/aws_ec2.png"

function Home() {

    const backEndTecnologies = [
        {
            title: "MySql",
            description: "Utilizado para gerir bancos de dados, realizar modelagens de dados.",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "PostgreSql",
            description: "O PostgreSQL é um poderoso sistema de gerenciamento de banco de dados relacional (RDBMS) de código aberto, conhecido por sua confiabilidade, robustez e conjunto de recursos. ",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "Swagger",
            description: "Utilizado pela comunidade para realizar a documentação de suas 'Apis' de uma forma mais interressante de visualizar.",
            levelOfExperience: "Nivel Intermediario"
        }
    ]
    const tools = [
        {
            title: "Docker",
            description: "Docker é uma plataforma popular para desenvolver, enviar e executar aplicativos usando containerização. Conceitos Básicos(Contêineres, Imagens), Comandos Básicos( docker run, docker pull, docker build, docker ps, docker rm e docker rmi), Dockerfile e Docker Compose.",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "AWS",
            description: "AWS, ou Amazon Web Services, é uma plataforma de computação em nuvem abrangente e amplamente usada oferecida pela Amazon. Ela fornece uma ampla gama de serviços em nuvem, incluindo poder de computação, armazenamento, bancos de dados, aprendizado de máquina, análise, rede e muito mais. Criação de maquinas EC2 e atraves desta maquina conseguir subir uma aplicação completa.",
            levelOfExperience: "Nivel Basico"
        },
        {
            title: "Apache Kafka",
            description: "Apache Kafka é uma plataforma de software de processamento de fluxo de código aberto desenvolvida pela Apache Software Foundation, escrita em Scala e Java. Ela visa fornecer uma plataforma unificada, de alto rendimento e baixa latência para lidar com feeds de dados em tempo real.",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "Minio",
            description: "O MinIO é um sistema de armazenamento de objetos de alto desempenho e código aberto. Ele é compatível com o serviço de armazenamento em nuvem Amazon S3 e foi projetado para aplicativos nativos da nuvem, oferecendo recursos como escalabilidade, multilocação e resiliência.",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "DBeaver",
            description: "O DBeaver é uma ferramenta de banco de dados universal gratuita e de código aberto para desenvolvedores, programadores SQL, administradores de banco de dados e analistas. Ele suporta vários bancos de dados, incluindo MySQL, PostgreSQL, SQLite, Oracle, DB2, SQL Server, Sybase, MS Access, Teradata, Firebird, Apache Hive, Phoenix e muitos mais.",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "GitFlow",
            description: "Gitflow é um modelo alternativo de ramificação do Git que consiste no uso de ramificações de recursos e várias ramificações primárias. Exenplo: 'Tags, Master, Hotfix, Release Branch, develop e Feature Branch'.",
            levelOfExperience: "Nivel Avançado"
        }
    ]
    const others = [
        {
            title: "Jira",
            description: "Jira é um software popular de gerenciamento de projetos e rastreamento de problemas desenvolvido pela Atlassian. Ele é amplamente usado por equipes de desenvolvimento de software para rastrear bugs, problemas e tarefas ao longo do ciclo de vida do desenvolvimento",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "Bitbucket",
            description: "Bitbucket é uma plataforma baseada na web para hospedar e gerenciar repositórios Git. Ele fornece controle de versão usando Git e Mercurial, tornando-se uma escolha popular para equipes de desenvolvimento de software colaborarem em código.",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "Confluence",
            description: "O Confluence é uma plataforma de colaboração desenvolvida pela Atlassian, projetada para ajudar equipes a colaborarem e compartilharem conhecimento de maneira eficiente. Ele é usado principalmente para criar e gerenciar documentação, páginas wiki, manuais, e outras formas de conteúdo colaborativo dentro de uma organização.",
            levelOfExperience: "Nivel Intermediario"
        },
        {
            title: "Metodologias Ágeis (Scrum, Kanban)",
            description: "Scrum e Kanban são duas metodologias ágeis amplamente utilizadas no desenvolvimento de software e gerenciamento de projetos.",
            levelOfExperience: "Nivel Intermediario"
        }
    ]

    return (
        <>
            <Navigation item={'pagina inicial'} />
            <section className='container-home static mb-10 object-cover'>
                <div className='container-conteudo h-fit px-10'>
                    <div class="bg-transparent w-fit">
                        <div class="mx-2 py-20 sm:px-6 sm:py-32 lg:px-8">
                            <div class="w-full justify-center items-center relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                                <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                                    <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
                                    <defs>
                                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                            <stop stop-color="#7775D6" />
                                            <stop offset="1" stop-color="#E935C1" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                                <div class="mx-auto flex flex-col items-center  text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                                    <img src="" alt="" />
                                    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Gabriel De Miranda Mello<br /></h2>
                                    <p class="mt-6 text-lg leading-8 text-gray-300">
                                        Olá! Sou <span className='text-blue-500 font-black'>Desenvolvedor Back-End</span> apaixonado por Tecnologia. Estou aqui para compartilhar um pouco sobre mim e as tecnologias que utilizo.
                                        Ao longo dos anos, dediquei-me a aprimorar minhas habilidades e conhecimentos nesse campo, buscando constantemente novos desafios e oportunidades de crescimento.
                                        Convido você a explorar meu portfólio, onde você encontrará uma amostra dos projetos que realizei e das habilidades que possuo.
                                    </p>
                                    <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                        <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Tecnologias</a>
                                        <a href="#" class="text-sm font-semibold leading-6 text-white">Projetos <span aria-hidden="true">→</span></a>
                                    </div>
                                    <hr className='w-11/12 mt-5 mb-5' />
                                    <h1 className='text-3xl pb-3 my-10 text-blue-500 font-black'> Linguagens que aprendi como Desenvolvedor Back-End</h1>

                                    <div className='flex flex-wrap w-full' />

                                    <section className='flex flex-wrap gap-8 pl-3 w-full h-96 overflow-y-auto rounded-2xl scroll-smooth'>
                                        <SpeedDial
                                            img={JavaImage}
                                            name="Java 11 e 17"
                                            description="Nivel Intermediario"
                                        />
                                        <SpeedDial
                                            img={SpringBoot}
                                            name="Spring Boot"
                                            description="Nivel Avançado"
                                        />
                                        <SpeedDial
                                            img={JUnit}
                                            name="JUnit"
                                            description="Nivel Intermediario"
                                        />
                                        <SpeedDial
                                            img={JasonWebToken}
                                            name="Jason Web Token"
                                            description="Nivel Avançado"
                                        />
                                        <SpeedDial
                                            img={Mysql}
                                            name="MySQL"
                                            description="Nivel Avançado"
                                        />
                                        <SpeedDial
                                            img={PostgreSQL}
                                            name="PostgreSql"
                                            description="Nivel Avançado"
                                        />
                                        <SpeedDial
                                            img={Swagger}
                                            name="Swagger"
                                            description="Nivel Intermediario"
                                        />
                                        <SpeedDial
                                            img={Docker}
                                            name="Docker"
                                            description="Nivel Avançado"
                                        />
                                        <SpeedDial
                                            img={ApacheKafka}
                                            name="Apache Kafka"
                                            description="Nivel Basico"
                                        />
                                        <SpeedDial
                                            img={AWSEC2}
                                            name="AWS EC2"
                                            description="Nivel Intermediario"
                                        />
                                    </section>

                                </div>
                            </div>
                        </div>
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
export default Home;