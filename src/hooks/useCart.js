import { useState, useCallback, useEffect, useRef } from 'react';
import authApiClient from "../services/auth-api-client";

const useCart = () => {
  // 1. Safe parsing (No more null crash)
  const [authToken] = useState(() => {
    const tokens = localStorage.getItem("authTokens");
    return tokens ? JSON.parse(tokens)?.access : null;
  });
  
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));
  const [loading, setLoading] = useState(false);
  
  // Guard to prevent double-firing in React StrictMode
  const hasInitialized = useRef(false);

  // Create or Get a cart
  const createOrGetCart = useCallback(async () => {
    setLoading(true);
    try {
      // If we already have a cartId stored, fetch that specific cart instead of creating a new one
      // (Adjust this endpoint URL depending on your actual backend API design)
      const url = cartId ? `/carts/${cartId}/` : "/carts/";
      const response = await authApiClient.post(url);
      
      const newCartId = response.data.id;
      localStorage.setItem("cartId", newCartId);
      setCartId(newCartId);
      setCart(response.data);
      return newCartId;
    } catch (error) {
      console.error("Cart initialization failed:", error);
      return null;
    } finally {
      setLoading(false);
    }
  }, [cartId]); // Keep cartId here so it knows whether to fetch or create

  // Add items safely
  const AddCartItems = useCallback(
    async (product_id, quantity) => {
      setLoading(true);
      let currentCartId = cartId;
      
      if (!currentCartId) {
        currentCartId = await createOrGetCart();
      }

      if (!currentCartId) {
        setLoading(false);
        return;
      }

      try {
        const response = await authApiClient.post(`/carts/${currentCartId}/items/`, {
          product_id,
          quantity,
        });
        // Optional: Refresh cart data after adding an item
        // await createOrGetCart(); 
        return response.data;
      } catch (error) {
        console.error("Error adding Items", error);
      } finally {
        setLoading(false);
      }
    },
    [cartId, createOrGetCart]
  );

  // Update Item quantity
  const updateCartItemQuantity = useCallback(
    async (itemId, quantity) => {
      if (!cartId) return;
      try {
        await authApiClient.patch(`/carts/${cartId}/items/${itemId}/`, { quantity });
      } catch (error) {
        console.error("Error updating cart items", error);
      }
    },
    [cartId]
  );

  // Delete Cart Items
  const deleteCartItems = useCallback(
    async (itemId) => {
      if (!cartId) return;
      try {
        await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`);
      } catch (error) {
        console.error(error);
      }
    },
    [cartId]
  );

  // 2. FIXED: Run ONLY ONCE when the component mounts
  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    createOrGetCart();
    // Leaving dependency array empty so it executes exactly once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return {
    cart,
    loading,
    createOrGetCart,
    AddCartItems,
    updateCartItemQuantity,
    deleteCartItems,
  };
};

export default useCart;