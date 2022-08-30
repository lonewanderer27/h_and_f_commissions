import { motion } from 'framer-motion'

const pageAnimations = {
    initial: {
        opacity: 0,
        scale: 0.950
    },
    animate: {
        opacity: 1,
        scale: 1
    },
    exit: {
        opacity: 0,
        scale: 0.950
    }
}

export default function AnimatedPage({ children }) {
    return (
        <motion.div
            variants={pageAnimations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration: 0.3}}
        >
            { children }
        </motion.div>
    )
}