import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export const RoutesMain = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register navigate={navigate} />} />
    </Routes>
  );
};
