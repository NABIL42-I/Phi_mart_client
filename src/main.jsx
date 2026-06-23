import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

// --- QUICK FRONTEND DEPLOYMENT FIX FOR MIXED CONTENT ---
// This forces the browser to upgrade all http:// assets (like your Cloudinary images) to https://
if (typeof window !== "undefined") {
  const meta = document.createElement("meta");
  meta.httpEquiv = "Content-Security-Policy";
  meta.content = "upgrade-insecure-requests";
  document.head.appendChild(meta);
}
// --------------------------------------------------------

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
            <AppRoutes/>
       </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);