import Button from './Button'
import { motion } from 'framer-motion'
import AnimatedPage from './AnimatedPage'

export default function Contact({onClick}) {
    return (
        <AnimatedPage>
            <div>
                <a href="https://twitter.com/HF_comms">
                    <i className="bi bi-twitter m-5"></i>
                </a>
                <a href="mailto:adrianejames27@gmail.com">
                    <i className="bi bi-envelope m-5"></i>
                </a>
            </div>
            <motion.div>
                <Button text="Hide" onClick={onClick}/>
            </motion.div>
        </AnimatedPage>    
    )
}