// Credits to freeCodeCamp's contributor Manu Arora for the tutorial on
// "How to Build a Contact Form with SendGrid and Next.js"
// Available at: https://www.freecodecamp.org/news/how-to-build-a-working-contact-form-with-sendgrid-and-next-js/

import { useState } from 'react'

export default function Contact() {
    // States for contact form fields
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    // State for form validation
    const [errors, setErrors] = useState({})

    // Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send")

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowFailureMessage] = useState(false)

    // Form validation
    const handleValidation = () => {
        let tempErrors = {}
        let isValid = true

        if (fullname.length <= 0) {
            tempErrors["fullname"] = true
            isValid = false
        }
        if (email.length <= 0) {
            tempErrors["email"] = true
            isValid = false
        }
        if (subject.length <= 0) {
            tempErrors["subject"] = true
            isValid = false
        }
        if (message.length <= 0) {
            tempErrors["message"] = true
            isValid = false
        }

        setErrors({ ...tempErrors })
        console.log("errors", errors)
        return isValid
    }

    // Form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation()

        if (isValidForm) {
            setButtonText("Sending");
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    email: email,
                    fullname: fullname,
                    subject: subject,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error } = await res.json()
            if (error) {
                console.log(error)
                setShowSuccessMessage(false)
                setShowFailureMessage(true)
                setButtonText("Send")

                // Reset form fields
                setFullname("")
                setEmail("")
                setMessage("")
                setSubject("")
                return
            }
            setShowSuccessMessage(true)
            setShowFailureMessage(false)
            setButtonText("Send")
            // Reset form fields
            setFullname("")
            setEmail("")
            setMessage("")
            setSubject("")
        }
        console.log(fullname, email, subject, message);
    };

    return (
        <div id="contact" className="section-container mb-10 md:w-4/5 md:mx-auto ">
            <form onSubmit={handleSubmit} className="flex flex-col px-8 py-8 rounded-lg shadow-xl bg-secondary bg-opacity-80 md:mx-40">

                <h1 className="text-2xl font-bold">Send me a message</h1>

                <label htmlFor="fullname" className="mt-8">Full name</label>
                <input type="text" value={fullname} onChange={(e) => { setFullname(e.target.value) }} name="fullname"
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light" />

                <label htmlFor="email" className="mt-4">E-mail</label>
                <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light"
                />

                <label htmlFor="subject" className="mt-4">Subject</label>
                <input type="text" name="subject" value={subject} onChange={(e) => { setSubject(e.target.value) }}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
                />

                <label htmlFor="message" className="mt-4">Message</label>
                <textarea name="message" value={message} onChange={(e) => { setMessage(e.target.value) }}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light ">
                </textarea>

                <div className="flex flex-row items-center justify-start">
                    <button type="submit" className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                        Send
                        <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                                fill="currentColor" />
                        </svg>
                    </button>
                </div>
                {showSuccessMessage && <div className="flex justify-start text-green-300 pt-4">Message sent with success!</div>}
                {showErrorMessage && <div className="flex justify-start text-red-300 pt-4">There was an error while sending your message.</div>}
            </form>
        </div>
    )
}