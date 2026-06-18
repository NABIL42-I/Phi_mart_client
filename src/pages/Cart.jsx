import { Suspense, useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";
import CartItemList from "../components/Cart/CartItemList";
import CartSummary from "../components/Cart/CartSummary";

const Cart = () => {
  const { cart, loading, createOrGetCart, updateCartItemQuantity, deleteCartItems } =useCartContext();

const [localCart,setLocalcart] = useState(cart);

  useEffect(() => {
    if (!cart && !loading) createOrGetCart();
  }, [createOrGetCart, cart, loading]);

  useEffect(()=>{
    setLocalcart(cart)
  },[cart]);

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    const prevLocalCartCopy = localCart; // Store a copy of localCart
    setLocalcart((prevLocalCart)=>({
        ...prevLocalCart,
        items:prevLocalCart.items.map((item)=>
            item.id === itemId ? {...item,quantity:newQuantity}:item),
    }))
    try {
      await updateCartItemQuantity(itemId, newQuantity);
    } catch (error) {
      console.log(error);
      setLocalcart(prevLocalCartCopy); // Rollback to previous state if API fails
    }
  };

  const handleRemoveItem = async(itemId)=>{
    setLocalcart((prevLocalCart)=>({
        ...prevLocalCart,
        items: prevLocalCart.items.filter((item)=>item.id!=itemId),
    }));
    try {
        await deleteCartItems(itemId);
    }catch(error){
        console.log(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!localCart) return <p>No Cart Found</p>;
  return (
    <div className="flex justify-between">
      <div>
        <Suspense fallback={<p>Loading Fallback...</p>}>
          <CartItemList
            items={localCart.items}
            handleUpdateQuantity={handleUpdateQuantity}
            handleRemoveItem={handleRemoveItem}
          />
        </Suspense>
      </div>
      {/* <div><CartSummary/></div> */}
    </div>
  );
};

export default Cart;