import Image from "next/image";

function Card({ img, alt, tittle, descripstion, tecnologies, url }) {
    return (
        <>
            <div className="px-10 flex flex-col gap-10 lg:gap-5">
                <img className="w-screen h-auto rounded-2xl lg:rounded-[10px] border-1 border-white" src={img} alt={alt}/>
                <h1 className="text-2xl text-[#0EA2F9] font-extrabold">{tittle}</h1>
                <p className="text-justify">{descripstion}</p>
                <p className="text-[#0EA2F9] font-extrabold">{tecnologies}</p>
                <a className="text-[#0EA2F9] font-extrabold flex gap-2" href={url} > Acessar Projeto <img className="w-6" src="/arrow.svg" alt="seta para direita" /></a>
            </div>
        </>
    )
}

export default Card;