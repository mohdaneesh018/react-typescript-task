import React, { useState, useCallback } from "react";
import type { ContactFormData } from "../../types/contact";

interface ContactFormProps {
    onSubmit: (data: ContactFormData) => void;
}

const ContactForm = React.memo(({ onSubmit }: ContactFormProps) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            onSubmit({ name, email, message });
        },
        [name, email, message, onSubmit]
    );

    return (
        <form
            onSubmit={submitHandler}
            className="w-full max-w-lg mx-auto bg-gray-800 text-white p-6 md:p-8 mt-10 rounded-xl shadow-xl px-4"
        >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                Contact Us
            </h2>

            <input
                type="text"
                placeholder="Name"
                className="w-full p-3 mb-3 bg-gray-700 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mb-3 bg-gray-700 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
                placeholder="Message"
                className="w-full p-3 mb-4 bg-gray-700 rounded h-28 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setMessage(e.target.value)}
            />

            <button className="bg-blue-600 w-full py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                Send Message
            </button>
        </form>
    );
});

export default ContactForm;
