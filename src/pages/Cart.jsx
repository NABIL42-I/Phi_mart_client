import { Suspense, useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";
import CartItemList from "../components/Cart/CartItemList";
import CartSummary from "../components/Cart/CartSummary";

const Cart = () => {
  const { cart,cartId, loading, createOrGetCart, updateCartItemQuantity, deleteCartItems } = useCartContext();

const [localCart,setLocalcart] = useState(cart);

  useEffect(() => {
    if (!cart && !loading) createOrGetCart();
  }, [createOrGetCart, cart, loading]);

  useEffect(()=>{
    setLocalcart(cart)
  },[cart]);


  if (loading) {
     return (
    <div className="flex flex-col justify-center items-center p-24 space-y-4 min-h-[40vh]">
      {/* Premium Dual-Tone Spinner Ring */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-gray-900 border-t-transparent animate-spin"></div>
      </div>
      
      {/* Animated Subtext */}
      <p className="text-gray-400 font-medium text-sm tracking-wide animate-pulse">
        Syncing Cart...
      </p>
    </div>
  );
  }

  if (!localCart) return <p>No Cart Found or Reload the Page</p>;




  const handleUpdateQuantity = async (itemId, newQuantity) => {
    const prevLocalCartCopy = localCart; // Store a copy of localCart

    setLocalcart((prevLocalCart)=>{
    const updateItems = prevLocalCart.items.map((item)=>item.id===itemId
    ?{
        ...item,quantity:newQuantity,
        total_price:item.product.price*newQuantity,
    }:item
    );
    return{
        ...prevLocalCart,
        items:updateItems,
        total_price:updateItems.reduce((sum,item)=>sum+item.total_price,0),
    };
    });

    try {
      await updateCartItemQuantity(itemId, newQuantity);
    } catch (error) {
      console.log(error);
      setLocalcart(prevLocalCartCopy); // Rollback to previous state if API fails
    }
  };

  const handleRemoveItem = async(itemId)=>{
    setLocalcart((prevLocalCart)=>{ 
        const updateItems = prevLocalCart.items.filter((item)=>item.id!=itemId);

    return{
        ...prevLocalCart,
        items: updateItems,
        total_price: updateItems.reduce((sum,item)=>sum+item.total_price,0),
    };
  });

    try {
        await deleteCartItems(itemId);
    }catch(error){
        console.log(error);
    }
  };


  return (
 <div className="container mx-auto px-4 py-8">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Suspense fallback={<p>Loading Fallback...</p>}>
          <CartItemList
            items={localCart.items}
            handleUpdateQuantity={handleUpdateQuantity}
            handleRemoveItem={handleRemoveItem}
          />
        </Suspense>
      </div>
      <div>
        <CartSummary 
         totalPrice={localCart.total_price}
         itemCount={localCart.items.length}
         cartId={cartId}/>
      </div>
    </div>
 </div>
  );
};

export default Cart;