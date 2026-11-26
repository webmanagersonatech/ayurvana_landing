import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ShoppingCart, Minus, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartSidebar() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[998]"
            onClick={closeCart}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-cream-light shadow-xl z-[999] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif text-[#2c211c] flex items-center gap-2">
                  <ShoppingCart className="w-6 h-6" />
                  Your Cart
                </h2>
                <button
                  onClick={closeCart}
                  className="p-2 hover:bg-[#fbf8f1] rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#fbf8f1] rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="w-10 h-10 text-[#796c60]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#2c211c] mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-[#796c60] text-sm">
                    Start shopping to add items to your cart
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-4 p-3 bg-[#fbf8f1] rounded-lg"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-[#2c211c] text-sm line-clamp-2">
                            {item.name}
                          </h4>
                          <p className="text-[#873f2b] font-semibold text-sm mt-1">
                            ₹{item.price}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-1 bg-cream-light rounded-full shadow-sm hover:bg-[#ede3d4] transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-1 bg-cream-light rounded-full shadow-sm hover:bg-[#ede3d4] transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto text-red-500 text-xs hover:text-red-700 transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="border-t border-[#ede3d4] pt-4">
                    <div className="flex justify-between text-lg font-serif font-semibold text-[#2c211c] mb-4">
                      <span>Total</span>
                      <span>₹{getTotalPrice()}</span>
                    </div>
                    <button className="w-full bg-[#873f2b] text-cream-light py-3 rounded-lg font-medium hover:bg-forest-dark transition-colors">
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
