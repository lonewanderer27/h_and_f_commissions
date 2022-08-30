import { useState } from 'react'
import emailjs from 'emailjs-com'
import AnimatedPage from './AnimatedPage'
import Button from './Button'

export default function CommissionForm({ handleTermsAgreed, termsAgreed, handleFormSubmitted }) {
    const [formData, setFormData] = useState(
        {
            clientName: "",
            clientEmail: "",
            projectDescription: "",
            projectBudget: "",
            paymentMethod: "",
            projectDeadline: ""
        }
    )
    console.log(`termsAgreed: ${termsAgreed}`)
    console.log(formData)

    function handleChange(event) {
        console.log(event)
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)

        emailjs.sendForm(
            "h_and_j.commissions",
            "template_jhhxbwj",
            event.target,
            "lXhUBOOBdtCvuRVwT"
        )
            .then((result) => {
                console.log(result.text)
                event.target.reset()
                handleFormSubmitted()
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <AnimatedPage>
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <div className="card text-dark text-center container-lg rounded">
                            <div className="card-header">
                                <h3>Commission Form</h3>
                            </div>
                            <div className="card-body">
                                <div className="row text-start">
                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Name / Username:</label>
                                            <input
                                                type="text"
                                                name="clientName"
                                                className="form-control"
                                                id="clientName"
                                                placeholder="Jose Rizal"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="projectDescription" className="form-label">Describe your Project:</label>
                                            <textarea
                                                type="text"
                                                name="projectDescription"
                                                className="form-control"
                                                id="projectDescription"
                                                placeholder="This my project and this is how I want it to be"
                                                rows="5"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email Address:</label>
                                            <input
                                                type="email"
                                                name="clientEmail"
                                                id="clientEmail"
                                                className="form-control"
                                                placeholder="abc@xyz.com"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-12 col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="projectBudget">Budget (in PHP)</label>
                                                        <input className="form-control" type="number" name="projectBudget" id="projectBudget" onChange={handleChange} required />

                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="projectDeadline">Deadline of Output</label>
                                                        <input className="form-select" type="date" name="projectDeadline" id="projectDeadline" onChange={handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="paymentMethod">Payment Method</label>
                                                        <select className="form-select" aria-label="Default select example" id="paymentMethod" name="paymentMethod" onChange={handleChange} required>
                                                            <option selected hidden disabled>Select Payment Option</option>
                                                            <option value="Gcash">Gcash</option>
                                                            <option value="Shopee">Shopee</option>
                                                            <option value="Paymaya">Paymaya</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Button
                    type="button"
                    text="Go Back"
                    onClick={handleTermsAgreed}
                />
                <Button
                    type="submit"
                    text="Submit"
                />
            </form>
        </AnimatedPage>
    )
}