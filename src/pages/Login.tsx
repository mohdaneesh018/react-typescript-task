import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        login(email, password);
        navigate("/");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
            <form
                onSubmit={submitHandler}
                className="bg-gray-800 p-6 md:p-8 rounded-2xl w-full max-w-sm shadow-2xl border border-gray-700/40"
            >
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
                    Login
                </h2>

                <div className="mb-4">
                    <label className="block mb-1 text-sm text-gray-300">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 bg-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-1 text-sm text-gray-300">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full p-3 bg-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition font-semibold text-lg"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
