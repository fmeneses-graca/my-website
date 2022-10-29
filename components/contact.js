import { useState } from 'react'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            name,
            email,
            message,
        }
        console.log(data);
    }

    return (
        <div id="contact" className="section-container mb-10">
            <h1>Contact me</h1>

            

            <div className="flex-container">
                <p>work in progress</p>
                
                {/* <form onSubmit={handleSubmit} className="card">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        type="text"
                        rows="4"
                        onChange={e => setMessage(e.target.value)}
                    />
                    <button type="submit">Send</button>
                </form> */}
            </div>

        </div>
    )
}