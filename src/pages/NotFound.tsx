export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
            <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    404 - Page Not Found
                </h1>
                <p className="text-base md:text-lg text-gray-300 max-w-md mx-auto">
                    The page you're looking for does not exist or has been moved.
                </p>
            </div>
        </div>
    );
}
