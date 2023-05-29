import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { DashBoard } from "../pages/dashBoard";

export const RoutesMain = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register navigate={navigate} />} />
      <Route path="dashBoard" element={<DashBoard navigate={navigate} />} />
    </Routes>
  );
};
