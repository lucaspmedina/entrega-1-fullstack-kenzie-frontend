import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesMain = () => (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/clients" element={<Register />} />
        <Route path="/contacts" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
);
