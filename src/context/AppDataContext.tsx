import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import type { ContactFormData } from "../types/contact";


interface AppDataContextType {
    bannerTitle: string;
    bannerSubtitle: string;
    updateContactFormData: (data: ContactFormData) => void;
}

const AppDataContext = createContext<AppDataContextType | null>(null);

export const AppDataProvider = ({ children }: { children: ReactNode }) => {
    const [bannerTitle] = useState("Welcome to Our Website");
    const [bannerSubtitle] = useState("This banner text is coming from AppDataContext");

    const updateContactFormData = useCallback((data: ContactFormData) => {
        console.log("Contact Form Data:", data);
    }, []);

    return (
        <AppDataContext.Provider
            value={{ bannerTitle, bannerSubtitle, updateContactFormData }}
        >
            {children}
        </AppDataContext.Provider>
    );
};

export const useAppData = () => useContext(AppDataContext)!;
