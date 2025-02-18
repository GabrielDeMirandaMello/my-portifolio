export default function CardConhecimento ({image, alt, technology}) {
    
    return (
        <>
        
            <div className="w-50 mx-10 p-2 bg-gray-900 border-b-4 rounded-b-[10px] border-[#0EA2F9] flex flex-col justify-center items-center gap-5">
                <img className="w-30" src={image} alt={alt} />
                <p>{technology}</p>
            </div>
        
        </>
    )
}