import { motion } from "motion/react"

function Button({text, url}){
    return (
        <>
            <motion.button content="Gabriel" className="rounded-[10px] bg-[#0EA2F9] text-1xl font-bold text-black py-3 w-60" whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }} initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}> <a href={`${url}`}>{text}</a>
            </motion.button>
        </>
    )
}

export default Button;