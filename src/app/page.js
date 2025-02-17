"use client"
import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-screen h-fit flex flex-col">
        <header className="fixed top-0 left-0 w-screen h-fit p-5 flex justify-around bg-black border-b-blue-400 border-b-2 md:border-none">
          <nav className="flex flex-col justify-between md:flex-row md:justify-around">
            <div className="mx-5 text-blue-400 font-semibold">
              Gabriel de Miranda
            </div>

            <div className="hidden md:flex md:gap-5 lg:gap-10 xl:gap-20 lg:w-[350px] md:w-[200px]">
              <a
                href="#Bebidas"
                className="text-white hover:text-blue-400 lg:text-2xl relative group"
              >
                Bebidas
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#Relatos"
                className="text-white hover:text-blue-400 lg:text-2xl relative group"
              >
                Relatos
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#Contato"
                className="text-white hover:text-blue-400 lg:text-2xl relative group"
              >
                Contato
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            {isOpen && (
            <div className="md:hidden bg-black shadow-md space-y-5 mt-5 ">
              <a
                onClick={() => setIsOpen(false)}
                href="#Inicio"
                className="block px-4 py-2 text-white hover:text-blue-400 relative group"
              >
                Inicio
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                onClick={() => setIsOpen(false)}
                href="#Sobremim"
                className="block px-4 py-2 text-white hover:text-blue-400 relative group"
              >
                Sobre mim
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                onClick={() => setIsOpen(false)}
                href="#Projetos"
                className="block px-4 py-2 text-white hover:text-blue-400 relative group"
              >
                Projetos
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                onClick={() => setIsOpen(false)}
                href="#Conhecimentos"
                className="block px-4 py-2 text-white hover:text-blue-400 relative group"
              >
                Conhecimentos
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                onClick={() => setIsOpen(false)}
                href="#Contato"
                className="block px-4 py-2 text-white hover:text-blue-400 relative group"
              >
                Contato
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
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
          <section id="Inicio" className="w-screen h-screen bg-black">
            Inicio
          </section>
          <section id="SobreMim" className="w-screen h-screen">
            Sobre mim
          </section>
          <section id="Projetos" className="w-screen h-screen">
            Projetos
          </section>
          <section id="Conhecimentos" className="w-screen h-screen">
            Conhecimentos
          </section>
          <section id="Contato" className="w-screen h-screen">
            Contato
          </section>
          <footer className="w-screen h-20 justify-center items-center">
            Created By Gabriel De Miranda
          </footer>

          
        </main>
      </div>
    </>
  );
}
