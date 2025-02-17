

function Card({ img, alt, tittle, descripstion, tecnologies }) {
    return (
        <>
            <div className="px-10 flex flex-col gap-10">
                <img className="w-screen h-auto rounded-2xl" src={img} alt={alt}/>
                <h1 className="text-2xl">{tittle}</h1>
                <p>{descripstion}</p>
                <p className="text-[#0EA2F9] font-extrabold">{tecnologies}</p>
            </div>
        </>
    )
}

export default Card;