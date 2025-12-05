import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Landing from "../pages/Landing";
import NotFound from "../pages/NotFound";
import { useAuth } from "../context/AuthContext";
 
function ProtectedRoute({ children }: { children: JSX.Element }) {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default function AppRoutes() {
    return (
        <Routes> 
            <Route path="/login" element={<Login />} />
 
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <Landing />
                    </ProtectedRoute>
                }
            />
 
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
