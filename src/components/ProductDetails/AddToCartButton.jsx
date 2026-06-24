import { useState } from "react";
import { FaCheck, FaShoppingCart } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import useCartContext from "../../hooks/useCartContext";
import useAuthContext from "../../hooks/useAuthContext";
import { Link } from "react-router";

const AddToCartButton = ({ product }) => {

  const {user} = useAuthContext();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
    const {AddCartItems} = useCartContext();


  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

//   const addToCart = () => {
//     // Simulate API Call
//     setIsAdding(true);
//     setTimeout(() => {
//       setIsAdding(false);
//       setIsAdded(true);
//       setTimeout(() => {
//         setIsAdded(false);
//       }, 2000);
//     }, 1000);
//   };
  const addToCart = async() => {
      setIsAdding(true);
      try{
          await AddCartItems(product.id,quantity);
          console.log("ProductDetails",product.id,quantity);
          setIsAdded(true);
          setIsAdding(false);
}
      catch(error){
          console.log("Error from AddToCart",error);
          setIsAdding(false);
         }
        finally{
        setTimeout(() => {
        setIsAdded(false);
      }, 2000);
        }
  };



  // if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product Not Found...</div>;

  return (
    <div className="space-y-4">
      <div className="join">
        <button
          className="btn btn-outline join-item"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
        >
          <FaMinus className="h-4 w-4" />
        </button>
        <input
          type="number"
          value={quantity}
          min={1}
          max={product.stock}
          className="input input-bordered join-item w-16 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          className="btn btn-outline join-item"
          onClick={increaseQuantity}
          disabled={quantity >= product.stock}
        >
          <FaPlus className="h-4 w-4" />
        </button>
      </div>

<div class="fixed bottom-5 right-5 z-50 animate-fade-in">
  {!user ? (
    <div class="flex items-center gap-3 backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 px-4 py-3 rounded-xl shadow-lg shadow-zinc-200/50 dark:shadow-none">
      <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      </div>
      
      <div class="text-sm font-medium text-zinc-700 dark:text-zinc-300">
        <span>Login required to add items to cart</span>
        <Link to="/login" class="ml-3 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-semibold transition-colors underline underline-offset-4">
          Sign In
        </Link >
      </div>
    </div>
  ) : ""}
</div>
       <button
        className="btn btn-primary w-full"
        onClick={addToCart}
        disabled={ !user ||isAdding || isAdded || product.stock === 0}
      >
        {isAdding ? (
          <span className="flex items-center">
            <span className="loading loading-spinner loading-sm mr-2"></span>
            Adding...
          </span>
        ) : isAdded ? (
          <span className="flex items-center">
            <FaCheck className="mr-2 h-4 w-4" />
            Added to Cart
          </span>
        ) : (
          <span className="flex items-center">
            <FaShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </span>
        )}
      </button>
    </div>
  );
};

export default AddToCartButton;