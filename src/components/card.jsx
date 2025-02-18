import Image from "next/image";

function Card({ img, alt, tittle, descripstion, tecnologies, url }) {
    return (
        <>
            <div className="px-10 flex flex-col gap-10">
                <img className="w-screen h-auto rounded-2xl border-1 border-white" src={img} alt={alt}/>
                <h1 className="text-2xl">{tittle}</h1>
                <p className="text-justify">{descripstion}</p>
                <a className="text-[#0EA2F9] font-extrabold flex gap-2" href={url} > Acessar Projeto <img className="w-6" src="/arrow.svg" alt="seta para direita" /></a>
                <p className="text-[#0EA2F9] font-extrabold">{tecnologies}</p>
            </div>
        </>
    )
}

export default Card;