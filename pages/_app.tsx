import '../styles/globals.css'
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartSidebar from "../components/CartSidebar";
import { CartProvider } from "../context/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "10px",
            padding: "16px",
          },
        }}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <CartSidebar />
    </CartProvider>
  );
}
