"use client"
import { useEffect, useRef, useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import Button from "@/components/button"
import Card from "@/components/card"
import Contact from "@/components/contact";
import CardConhecimento from "@/components/card-conhecimento";
import { motion } from "motion/react"

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-screen h-fit flex flex-col">
        <header className="fixed top-0 left-0 w-screen h-fit p-5 flex justify-around bg-black border-b-[#0Ea2f9] border-b-2 lg:p-0 md:border-none">
          <nav className="flex flex-col justify-between lg:flex-row lg:justify-center lg:items-center lg:gap-50 lg:mt-5">
            <div className="mx-5 text-[#0EA2F9] font-extrabold lg:text-[20px]">
              Gabriel de Miranda
            </div>

            <div className="bg-black shadow-md hidden lg:flex lg:items-center lg:justify-center lg:gap-10">
              <a
                onClick={() => setIsOpen(false)}
                href="#Inicio"
                className="block text-white hover:text-[#0EA2F9] relative group"
              >
                Inicio
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0EA2F9] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                onClick={() => setIsOpen(false)}
                href="#Sobremim"
                className="block text-white hover:text-[#0EA2F9] relative group"
              >
                Sobre mim
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0EA2F9] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                onClick={() => setIsOpen(false)}
                href="#Projetos"
                className="block text-white hover:text-[#0EA2F9] relative group"
              >
                Projetos
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0EA2F9] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                onClick={() => setIsOpen(false)}
                href="#Conhecimentos"
                className="block text-white hover:text-[#0EA2F9] relative group"
              >
                Conhecimentos
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0EA2F9] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                onClick={() => setIsOpen(false)}
                href="#Contato"
                className="block text-white hover:text-[#0EA2F9] relative group"
              >
                Contato
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0EA2F9] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            {isOpen && (
              <div className="md:hidden bg-black shadow-md space-y-5 mt-5 ">
                <a
                  onClick={() => setIsOpen(false)}
                  href="#Inicio"
                  className="block px-4 py-2 text-white hover:text-[#0EA2F9] relative group"
                >
                  Inicio
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0EA2F9] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  onClick={() => setIsOpen(false)}
                  href="#Sobremim"
                  className="block px-4 py-2 text-white hover:text-[#0EA2F9] relative group"
                >
                  Sobre mim
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0EA2F9] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  onClick={() => setIsOpen(false)}
                  href="#Projetos"
                  className="block px-4 py-2 text-white hover:text-[#0EA2F9] relative group"
                >
                  Projetos
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0EA2F9] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  onClick={() => setIsOpen(false)}
                  href="#Conhecimentos"
                  className="block px-4 py-2 text-white hover:text-[#0EA2F9] relative group"
                >
                  Conhecimentos
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0EA2F9] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  onClick={() => setIsOpen(false)}
                  href="#Contato"
                  className="block px-4 py-2 text-white hover:text-[#0EA2F9] relative group"
                >
                  Contato
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0EA2F9] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            )}
          </nav>

          <div className="md:hidden lg:hidden xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiOutlineX size={24} color="white" style={{ marginRight: '20px' }} /> : <HiMenu size={24} color="white" style={{ marginRight: '20px' }} />}
            </button>
          </div>

        </header>
        <main className="w-screen h-screen">
          <section id="Inicio" className="w-screen lg:w-screen lg:gap-80 lg:px-100 h-screen flex flex-col lg:flex-row justify-center items-center bg-black">
            <div>
              <p>Olá, eu sou</p>
              <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="text-3xl text-[#0EA2F9] py-4">Gabriel de Miranda</motion.h1>
              <p className="mb-10 lg:mb-40">{`Desenvolvedor Full Stack`}</p>
              <Button text={`Acessar o LinkedIn`} url={`https://www.linkedin.com/in/gabriel-de-miranda-mello-652346118/`} />
            </div>
            <div className="pt-10 lg:pt-30">
              <Image src="/bro.svg" alt='Imagen de um notebook' width={200} height={100} className="lg:w-80 lg:h-auto drop-shadow-[0_0_200px_rgba(14,162,249,1)]"/>
            </div>
          </section>
          <section id="Sobremim" className="w-screen h-screen lg:w-screen lg:px-100">
            <div className="h-full flex flex-col justify-around items-center px-10">
              <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}
                className="text-3xl text-[#0EA2F9] self-start">Sobre mim</motion.h1>
              <p>Sou um desenvolvedor back-end júnior apaixonado por resolver problemas e criar soluções eficientes. Com formação técnica em Análise e Desenvolvivendo de Sistemas e experiência prática em projetos, estou sempre buscando oportunidades para aprimorar minhas habilidades e contribuir para o sucesso de equipes de desenvolvimento.</p>
              <p>Adoro enfrentar desafios técnicos e aprender novas tecnologias. Estou constantemente explorando novas ferramentas e técnicas para melhorar meu código e minha eficiência como desenvolvedor.</p>
              <Button text={`Baixar currículo`} url={`https://drive.usercontent.google.com/u/0/uc?id=1vZGB7_9f4v7kufSlqTwogy_lRDZ6oRJY&export=download`}></Button>
            </div>
          </section>
          <section id="Projetos" className="w-screen h-fit lg:w-screen lg:px-100">
            <div className="flex flex-col gap-10">
              <h1 className="mx-10 text-3xl text-[#0EA2F9] font-extrabold">Projetos</h1>
              <Card
                img={"/images-projetos/print-adega-black-jack.png"}
                alt={"Print do site black-jack-mp.vercell.app"}
                tittle={"Adega Black Jack"}
                descripstion={"Este projeto front end foi feito para uma adega com o intuito de aprimorar a expériencia com o cliente e deixar a adega com uma cara mais profissional"}
                tecnologies={"React.js, TailwindCSS e TypeScript"}
                url={"https://black-jack-mp.vercel.app"}
              />
              <Card
                img={"/images-projetos/projetos-back-end.png"}
                alt={"Print de codigo no Virtual studio code"}
                tittle={"Saga Orchestrator Microservice"}
                descripstion={"Um sistema com 5 microserviços para gerir todo o ciclo de um pedido até a confirmação do pagamento, foi utilizado o padrão saga com o kafka para troca de mensagens entre os serviços."}
                tecnologies={"Java 17, Spring Boot 3, Apache Kafka, PostgreSQL, MongoDB, Docker, Docker-Compose e Redpanda Console."}
                url={"https://github.com/GabrielDeMirandaMello/microservice-saga-orchestrator?tab=readme-ov-file"}
              />
              <Card
                img={"/images-projetos/projetos-back-end.png"}
                alt={"Print de codigo no Virtual studio code"}
                tittle={"Book Catalogy"}
                descripstion={"Desenvolvimento de uma API para gerenciar um sistema de catálogo de livros em uma biblioteca, criado para um teste técnico aplicando a uma vaga de desenvolvedor back end junior."}
                tecnologies={"Java 17, Spring Boot 3, Mockito, JUnit5 e Swagger"}
                url={""}
              />
              <Card
                img={"/images-projetos/projetos-back-end.png"}
                alt={"Print do site story-travels.vercell.app"}
                tittle={"History Travels"}
                descripstion={"Este projeto foi feito com o intuito de aprimorar meus conhecimentos, consiste em uma rede social para pessoas que gostam de viajar e compartilhar locais legais."}
                tecnologies={"Java, Spring e React.js"}
                url={""}
              />
              <Card
                img={"/images-projetos/p-i-.png"}
                alt={"imagem de uma bagagem amarela"}
                tittle={"Viagens App"}
                descripstion={"Este projeto foi feito com o intuito de formalizar meus conhecimentos adquiridos durante o 1° semestre da faculdade de Analise e Desenvolvimento de Sistemas, consiste em um mural onde todos que postarem poderam ver suas historias sem precisar fazer login na plataforma, juntamento com um dashboard com pontos importantes sobre as sua historias e a de toda a plataforma."}
                tecnologies={"HTML5, CSS3, JavaScript, Node.js e MySQL"}
                url={"https://github.com/GabrielDeMirandaMello/viagens-app"}
              />
            </div>
          </section>
          <section id="Conhecimentos" className="w-screen h-screen mt-10 lg:w-screen lg:px-100">
            <h1 className="mx-10 text-3xl text-[#0EA2F9] font-extrabold self-start">Conhecimentos</h1>
            <div className="h-4/5 overflow-hidden overflow-y-scroll flex flex-col items-center gap-10 mt-10">
              <CardConhecimento image={"/conhecimentos-icons/java-svgrepo-com.svg"} alt={"Imagen de um café"} technology={"Java"} />
              <CardConhecimento image={"/conhecimentos-icons/spring-boot-svgrepo-com.svg"} alt={"Imagen da logo do spring boot"} technology={"Spring Boot"} />
              <CardConhecimento image={"/conhecimentos-icons/javascript-155-svgrepo-com.svg"} alt={"Imagen da logo do JavaScript"} technology={"JavaScript"} />
              <CardConhecimento image={"/conhecimentos-icons/node-16-svgrepo-com.svg"} alt={"Imagen da logo do Node.js"} technology={"Node.js"} />
              <CardConhecimento image={"/conhecimentos-icons/react-svgrepo-com.svg"} alt={"Imagen da logo do React"} technology={"React"} />
              <CardConhecimento image={"/conhecimentos-icons/tailwind-css-svgrepo-com.svg"} alt={"Imagen da logo do TailwindCss"} technology={"TailwindCSS"} />
              <CardConhecimento image={"/conhecimentos-icons/git-svgrepo-com.svg"} alt={"Imagen da logo do Git"} technology={"Git"} />
              <CardConhecimento image={"/conhecimentos-icons/kotlin-svgrepo-com.svg"} alt={"Imagen da logo do Kotlin"} technology={"Kotlin"} />
              <CardConhecimento image={"/conhecimentos-icons/docker-svgrepo-com.svg"} alt={"Imagen da logo do Docker"} technology={"Docker"} />
              <CardConhecimento image={"/conhecimentos-icons/mysql-svgrepo-com.svg"} alt={"Imagen da logo do MySQL"} technology={"MySQL"} />
              <CardConhecimento image={"/conhecimentos-icons/postgresql-svgrepo-com.svg"} alt={"Imagen da logo do PostgreSQL"} technology={"PostgreSQL"} />
              <CardConhecimento image={"/conhecimentos-icons/kafka-icon-svgrepo-com.svg"} alt={"Imagen da logo do Kafka"} technology={"Kafka"} />
            </div>
          </section>
          <section id="Contato" className="w-screen h-fit mt-10 pt-10 border-t-2 border-[#0EA2F9] lg:w-screen lg:px-100">
            <div className="flex flex-col justify-center items-center gap-5">
              <Contact icon={"/user-svgrepo-com.svg"} title={"Nome"} description={"Gabriel de Miranda Mello"} />
              <Contact icon={"/mail-svgrepo-com.svg"} title={"E-mail"} description={"Gabrielmirandamello9@gmail.com"} />
              <Contact icon={"/maps-svgrepo-com.svg"} title={"Endereço"} description={"São Paulo - Brasil"} />
              <Contact icon={"/whatsapp-svgrepo-com.svg"} title={"WhatsApp"} description={"+55 11 97613-9421"} />
            </div>
          </section>
          <footer className="w-screen h-20 mt-10 flex justify-center items-center text-[#0EA2F9] bg-black">
            <img className="w-10 px-3" src="/copyright-svgrepo-com.svg" alt="icone de coryright" />
            Created By Gabriel De Miranda
          </footer>
        </main>
      </div>
    </>
  );
}
