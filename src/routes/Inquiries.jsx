import { useState, lazy, Suspense } from 'react'
import Terms from '../components/Terms'
import Contact from '../components/Contact'
import Button from '../components/Button'
import ButtonLink from '../components/ButtonLink'
import Loading from '../components/Loading'
const CommissionForm = lazy(() => import('../components/CommissionForm'))
import AnimatedPage from '../components/AnimatedPage'

export default function Inquiries({
    termsVisible, 
    setTermsVisible,
    termsAgreed, 
    setTermsAgreed
}) {
    
    const [formSubmitted, setFormSubmitted] = useState(false)

    function displayTerms(){
        return ( 
            <AnimatedPage>
                <h2>Terms and Conditions</h2>

                {
                    !termsVisible && 
                    <div className="container-lg px-lg-5 pb-lg-5">
                        

                        <p>Before inquiring for a commission, kindly read the terms and conditions made by the commissioners, to ensure that no confusion and misunderstandings will take place.</p>

                        <Button 
                            text='Tap to read terms and conditions'
                            onClick={handleShowTerms} 
                        />
                    </div> 
                }

                {
                    termsVisible && 
                    <div className="text-start container-lg px-lg-5 pb-lg-5" id="terms">
                        <hr className="mx-auto m-5"/>

                        <Terms />
                
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id="flexCheckDefault" 
                                checked={handleTermsAgreed}
                                onChange={handleTermsAgreed}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                I have read and agree to the Terms and Conditions of the commissioners.
                            </label>
                        </div>
                    </div>
                }
            </AnimatedPage>
        )
    }

    function handleShowTerms(){
        setTermsVisible((previousTermsVisible) => (!previousTermsVisible))
    }

    function handleTermsAgreed(){
        setTermsAgreed((previousTermsAgreed) => (!previousTermsAgreed))
    }

    function handleFormSubmitted(){
        setFormSubmitted((prevFormSubmitted) => (!prevFormSubmitted))
    }

    return (
        <>
            {!formSubmitted ?
                !termsAgreed ? displayTerms() : 
                    <Suspense fallback={<Loading/>}>
                        <CommissionForm 
                            termsAgreed={termsAgreed}
                            handleTermsAgreed={handleTermsAgreed} 
                            handleFormSubmitted={handleFormSubmitted}
                        />
                    </Suspense>
                :
                    <AnimatedPage>
                        <div className="container-lg px-lg-5 pb-lg-5">
                            <h3>Thank you for your commission request.<br/>We'll get in touch with you soon!</h3>
                            <div className="m-5">
                                <p>If have any concerns, you may contact us through the following:</p>
                                <Contact />
                            </div>
                        </div>
                        <ButtonLink 
                            text="Go Back to Home" 
                            to='/'
                        />
                    </AnimatedPage>
            }
        </>
    )
}