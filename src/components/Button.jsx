import { motion } from 'framer-motion'
import AnimatedPage from './AnimatedPage'

export default function Button({type, text, onClick}) {
    return (
        <button 
            type={type}
            className="button m-3"
            onClick={onClick}>
                <span>{text}</span>
        </button>
    )
}