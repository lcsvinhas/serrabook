import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Login from "../pages/Login";
import Atualizar from "../pages/Atualizar";
import Error from "../pages/Error";

export default function AppRouter() {
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/produtos"} element={<Produtos />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/atualizar"} element={<Atualizar />} />
            <Route path={"*"} element={<Error />} />
        </Routes>
    )
}
