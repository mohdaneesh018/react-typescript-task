import React from "react";

interface BannerProps {
    title: string;
    subtitle: string;
    buttonText?: string;
}

const Banner = React.memo(({ title, subtitle, buttonText }: BannerProps) => {
    return (
        <div className="w-full bg-blue-700 text-white py-16 md:py-24 text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
                {title}
            </h1>

            <p className="text-base md:text-lg max-w-2xl mx-auto mb-6">
                {subtitle}
            </p>

            {buttonText && (
                <button className="px-6 py-2 bg-white text-blue-700 font-semibold rounded hover:bg-gray-200 transition">
                    {buttonText}
                </button>
            )}
        </div>
    );
});

export default Banner;
