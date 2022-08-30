import { useState } from 'react'
import Terms from '../components/Terms'
import Button from '../components/Button'
import CommissionForm from '../components/CommissionForm'
import AnimatedPage from '../components/AnimatedPage'

export default function Inquiries() {
    const [termsVisible, setTermsVisible] = useState(false)
    const [termsAgreed, setTermsAgreed] = useState(false)
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
                <CommissionForm 
                    termsAgreed={termsAgreed}
                    handleTermsAgreed={handleTermsAgreed} 
                    handleFormSubmitted={handleFormSubmitted}
                />
                    :
                <AnimatedPage>
                    <div className="container-lg px-lg-5 pb-lg-5">
                        <h3>Thank you for your commission request. We'll get in touch with you soon!</h3>
                    </div>
                </AnimatedPage>
            }
        </>
    )
}