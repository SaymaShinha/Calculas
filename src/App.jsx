import { Outlet } from "react-router-dom";

import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollRestoration from "./components/ScrollRestoration.jsx";

export default function App() {
  return (
    <div className="pml-page">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      <ScrollRestoration />
    </div>
  );
}
