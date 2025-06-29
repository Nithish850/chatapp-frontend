import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import Login from "../component/Login/Login";
import Signup from "../component/Signup/Signup";

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
