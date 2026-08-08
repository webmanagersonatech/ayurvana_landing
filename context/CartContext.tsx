import { createContext, useContext, useState, useRef, ReactNode } from "react";
import toast from "react-hot-toast";

export type CartProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  [key: string]: any;
};

export type CartItem = CartProduct & { quantity: number };

type CartContextType = {
  cartItems: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toastShownRef = useRef(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product: CartProduct) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        if (!toastShownRef.current) {
          toast.success(`${product.name} quantity updated in cart!`, {
            duration: 3000,
            position: "bottom-right",
            style: {
              background: "#1B3324",
              color: "#fff",
              borderRadius: "10px",
              padding: "16px",
            },
            icon: "🛒",
          });
          toastShownRef.current = true;
          setTimeout(() => {
            toastShownRef.current = false;
          }, 100);
        }
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      if (!toastShownRef.current) {
        toast.success(`${product.name} added to cart!`, {
          duration: 3000,
          position: "bottom-right",
          style: {
            background: "#1B3324",
            color: "#fff",
            borderRadius: "10px",
            padding: "16px",
          },
          icon: "✅",
        });
        toastShownRef.current = true;
        setTimeout(() => {
          toastShownRef.current = false;
        }, 100);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    const product = cartItems.find((item) => item.id === productId);
    if (product) {
      toast.error(`${product.name} removed from cart`, {
        duration: 3000,
        position: "bottom-right",
        style: {
          background: "#dc2626",
          color: "#fff",
          borderRadius: "10px",
          padding: "16px",
        },
      });
    }
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const clearCart = () => {
    toast("Cart cleared", {
      duration: 2000,
      position: "bottom-right",
      style: {
        background: "#6E695D",
        color: "#fff",
        borderRadius: "10px",
        padding: "16px",
      },
    });
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
