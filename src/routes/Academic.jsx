import Button from '../components/Button'
import AnimatedPage from '../components/AnimatedPage'

export default function Academic() {
    return (
        <AnimatedPage>
            <h2>Academic Commissions Open!</h2>
            <Button text='Essay' />
            <Button text='Reaction Paper' />
            <Button text='Movie / Poem Analysis' />
            <Button text='Speech' />
            <Button text='News Article' />
            <Button text='Editorial / Column Article' />
        </AnimatedPage>
    )
}