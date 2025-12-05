import { useMemo } from "react";
import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm/ContactForm";
import { useAppData } from "../context/AppDataContext";
import { useAuth } from "../context/AuthContext";

export default function Landing() {
    const { bannerTitle, bannerSubtitle, updateContactFormData } = useAppData();
    const { logout } = useAuth();

    const bannerData = useMemo(() => {
        return {
            title: bannerTitle,
            subtitle: bannerSubtitle,
            buttonText: "Learn More",
        };
    }, [bannerTitle, bannerSubtitle]);

    return (
        <div className="bg-gray-900 text-white flex flex-col min-h-screen">

            {/* Logout Button */}
            <div className="flex justify-end p-4">
                <button
                    onClick={logout}
                    className="px-5 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition"
                >
                    Logout
                </button>
            </div>

            {/* Banner Section (full width always) */}
            <Banner
                title={bannerData.title}
                subtitle={bannerData.subtitle}
                buttonText={bannerData.buttonText}
            />

            {/* Contact Section */}
            <div className="flex-grow flex justify-center items-start py-10 px-4">
                <div className="w-full max-w-xl">
                    <ContactForm onSubmit={updateContactFormData} />
                </div>
            </div>

        </div>
    );
}
