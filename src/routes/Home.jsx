import ButtonLink from '../components/ButtonLink'
import Button from '../components/Button'
import Contact from '../components/Contact'
import AnimatedPage from '../components/AnimatedPage'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

export default function Home() {

    const [contactVisible, setContactVisible] = useState(false)

    function displayContact() {
        setContactVisible((previousContactVisible) => (!previousContactVisible))
    }

    return (
        <AnimatedPage>
            <div className="container-lg text-center">
                <h2>Helix and Felix,</h2>
                <h2>At Your Service</h2>

                <div className="row d-inline-flex justify-content-center">
                    <div className="col-md-10 cold-sm-12 col-12">
                        <p className="mx-auto m-4">
                            INFJ-T SHS Student and INFP-T College Student. Currently open for academic, art, and programming commissions.
                        </p>
                    </div>
                </div>
                
                <hr className="mx-auto"/>

                <AnimatePresence mode='wait'>
                    {contactVisible && 
                                <div id="contactRow" key={contactVisible}>
                                    {/* <Contact onClick={displayContact}/> */}
                                    <Contact />
                                    <Button text="Hide" onClick={displayContact} />
                                </div>}
                                
                    {!contactVisible && 
                                <div id="buttonRow" key={contactVisible}>
                                    <ButtonLink 
                                        text="Our Works" 
                                        to='/work'
                                    />
                                    <ButtonLink 
                                        text="Inquiries"
                                        to='/inquiries' 
                                    />
                                    <Button 
                                        text="Contact"
                                        onClick={displayContact}
                                    />
                                </div>}
                </AnimatePresence>
            </div>
        </AnimatedPage>
    )
}