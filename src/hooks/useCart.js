import { useState, useCallback, useEffect, useRef } from 'react';
import authApiClient from "../services/auth-api-client";

const useCart = () => {
  const [authToken] = useState(
    () => JSON.parse(localStorage.getItem("authTokens"))?.access
  );
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));
  const [loading, setLoading] = useState(false);
  
  // Guard to prevent double-firing in React StrictMode
  const hasInitialized = useRef(false);

  // Create or Get a cart
  const createOrGetCart = useCallback(async () => {
    setLoading(true);
    try {
      console.log("hell0",authToken);
      // console.log("hell0",authToken);
      const response = await authApiClient.post("/carts/");
      if (!cartId) { 
        localStorage.setItem("cartId", response.data.id);
        setCartId(response.data.id);
      }
      setCart(response.data);
      // console.log("this is from cart",response.data);
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
        // console.log("from addcartitem",product_id,quantity);
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
        console.log("Error updating cart items", error);
      } 
    },
    [cartId]
  );

  // Delete Cart Items
  const deleteCartItems = useCallback(
    async(itemId)=>{
        try{
            await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`);
        }
        catch(error){
            console.log(error);
        }
    },[cartId]
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
    cartId,
    loading,
    createOrGetCart,
    AddCartItems,
    updateCartItemQuantity,
    deleteCartItems,
  };
};

export default useCart;