import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Order from "../pages/Order";



function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="Order" element={<Order/>} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
