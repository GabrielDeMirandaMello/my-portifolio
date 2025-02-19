
function Contact({ icon, title, description }) {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className=" w-20 p-5 h-auto rounded-full bg-[#0EA2F9] border-1 border-[#2E2F34]">
                    <img className="w-10" src={icon} alt="" />
                </div>
                <div className="flex flex-col items-center">
                    <p>{title}</p>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default Contact;