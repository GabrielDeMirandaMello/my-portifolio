

function Button({text, url}){
    return (
        <>
            <button className="rounded-[10px] bg-[#0EA2F9] text-1xl font-bold text-black py-3 w-60">
                <a href={`${url}`}>{text}</a>
            </button>
        </>
    )
}

export default Button;