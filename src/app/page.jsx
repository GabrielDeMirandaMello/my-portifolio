"use client"
import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import Button from "@/components/button"
import Card from "@/components/card"
import Contact from "@/components/contact";
import CardConhecimento from "@/components/card-conhecimento";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-screen h-fit flex flex-col">
        <header className="fixed top-0 left-0 w-screen h-fit p-5 flex justify-around bg-black border-b-[#0Ea2f9] border-b-2 md:border-none">
          <nav className="flex flex-col justify-between md:flex-row md:justify-around">
            <div className="mx-5 text-[#0EA2F9] font-extrabold">
              Gabriel de Miranda
            </div>

            <div className="hidden md:flex md:gap-5 lg:gap-10 xl:gap-20 lg:w-[350px] md:w-[200px]">
              <a
                href="#Bebidas"
                className="text-white hover:text-[#0EA2F9] lg:text-2xl relative group"
              >
                Bebidas
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0EA2F9] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#Relatos"
                className="text-white hover:text-[#0EA2F9] lg:text-2xl relative group"
              >
                Relatos
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0EA2F9] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#Contato"
                className="text-white hover:text-[#0EA2F9] lg:text-2xl relative group"
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
          <section id="Inicio" className="w-screen h-screen flex flex-col justify-center items-center bg-black">
            <div>
              <p>Olá, eu sou</p>
              <h1 className="text-3xl text-[#0EA2F9] py-4">Gabriel de Miranda</h1>
              <p>{`Desenvolvedor Full Stack`}</p>
            </div>
            <div className="pt-30">
              <Image src="/bro.png" alt='Imagen de um notebook' width={200} height={100} />
            </div>
          </section>
          <section id="Sobremim" className="w-screen h-screen">
            <div className="h-full flex flex-col justify-around items-center px-10">
              <h1 className="text-3xl text-[#0EA2F9] self-start">Sobre mim</h1>
              <p>Sou um desenvolvedor back-end júnior apaixonado por resolver problemas e criar soluções eficientes. Com formação técnica em Análise e Desenvolvivendo de Sistemas e experiência prática em projetos, estou sempre buscando oportunidades para aprimorar minhas habilidades e contribuir para o sucesso de equipes de desenvolvimento.</p>
              <p>Adoro enfrentar desafios técnicos e aprender novas tecnologias. Estou constantemente explorando novas ferramentas e técnicas para melhorar meu código e minha eficiência como desenvolvedor.</p>
              <Button text={`Acessar o LinkedIn`} url={`https://www.linkedin.com/in/gabriel-de-miranda-mello-652346118/`}></Button>
            </div>
          </section>
          <section id="Projetos" className="w-screen h-fit">
            <div className="flex flex-col gap-10">
              <h1 className="mx-10 text-3xl text-[#0EA2F9] font-extrabold">Projetos</h1>
              <Card img={"/story-travels.png"} alt={"Print do site story-travels.vercell.app"} tittle={"History Travels"} descripstion={"Este projeto foi feito com o intuito de aprimorar meus conhecimentos, consiste em uma rede social para pessoas que gostam de viajar e compartilhar locais legais."} tecnologies={"Java, Spring e React.js"} />
              <Card img={"/story-travels.png"} alt={"Print do site story-travels.vercell.app"} tittle={"History Travels"} descripstion={"Este projeto foi feito com o intuito de aprimorar meus conhecimentos, consiste em uma rede social para pessoas que gostam de viajar e compartilhar locais legais."} tecnologies={"Java, Spring e React.js"} />
              <Card img={"/story-travels.png"} alt={"Print do site story-travels.vercell.app"} tittle={"History Travels"} descripstion={"Este projeto foi feito com o intuito de aprimorar meus conhecimentos, consiste em uma rede social para pessoas que gostam de viajar e compartilhar locais legais."} tecnologies={"Java, Spring e React.js"} />
              <Card img={"/story-travels.png"} alt={"Print do site story-travels.vercell.app"} tittle={"History Travels"} descripstion={"Este projeto foi feito com o intuito de aprimorar meus conhecimentos, consiste em uma rede social para pessoas que gostam de viajar e compartilhar locais legais."} tecnologies={"Java, Spring e React.js"} />
            </div>
          </section>
          <section id="Conhecimentos" className="w-screen h-screen mt-10">
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
          <section id="Contato" className="w-screen h-fit mt-10 pt-10 border-t-2 border-[#0EA2F9]">
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
