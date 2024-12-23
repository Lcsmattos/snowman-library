import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const MainRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
