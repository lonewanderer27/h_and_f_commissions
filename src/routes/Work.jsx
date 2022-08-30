import ButtonLink from '../components/ButtonLink'
import AnimatedPage from '../components/AnimatedPage'

export default function Work() {
    return (
        <AnimatedPage>
            <h2>Pick a category below</h2>

            <div id="buttonRow">
                <ButtonLink text="ACADEMIC" to='/academic-commissions' />
                <ButtonLink text="ART" to='/art-commissions' />
                <ButtonLink text="PROGRAMMING" to='/programming-commisions' />
                <ButtonLink text="OTHER" to='/other-commisions'/>
            </div>
        </AnimatedPage>
    )
}