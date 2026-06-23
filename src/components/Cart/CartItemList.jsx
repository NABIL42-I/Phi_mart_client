import { FaRegTrashAlt } from "react-icons/fa";

const CartItemList = ({ items, handleUpdateQuantity, handleRemoveItem }) => {
  if (items?.length === 0) {
     return (
       <div className="flex flex-col justify-center items-center p-12 min-h-[50vh] text-center bg-white rounded-2xl border border-gray-100 shadow-sm max-w-lg mx-auto  animate-in fade-in slide-in-from-bottom-4 duration-300">
         
         {/* Modern Pure-CSS Animated Cart Sticker */}
         <div className="relative w-36 h-36 mb-6 flex items-center justify-center bg-gray-50 rounded-full border-4 border-dashed border-gray-100 group">
           
           {/* Pulsing Background Aura */}
           <div className="absolute inset-0 rounded-full bg-gray-100/80 scale-75 animate-ping opacity-40"></div>
           
           {/* Shopping Cart SVG Icon */}
           <svg 
             className="w-16 h-16 text-gray-400 animate-bounce group-hover:text-gray-500 transition-colors" 
             style={{ animationDuration: '2.5s' }}
             fill="none" 
             stroke="currentColor" 
             strokeWidth="1.5"
             viewBox="0 0 24 24"
           >
             <path 
               strokeLinecap="round" 
               strokeLinejoin="round" 
               d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" 
             />
           </svg>
   
           {/* Floating Warning Badge */}
           <div className="absolute top-2 right-2 bg-amber-500 text-white p-1.5 rounded-full shadow-md animate-pulse">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
             </svg>
           </div>
         </div>
   
         {/* Messaging Layout */}
         <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">
           Cart Manifest Missing
         </h3>
         <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
           We couldn't securely build or retrieve your cart snapshot payload. Try refreshing the terminal engine session.
         </p>
   
         {/* Modern Interactive Action Button */}
         <button 
           onClick={() => window.location.reload()} 
           className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold rounded-xl transition-all duration-200 active:scale-95 shadow-sm shadow-gray-900/10"
         >
           <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
           </svg>
           Reload System Session
         </button>
       </div>
     );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Shopping Cart</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th className="text-right">Price</th>
              <th>Quantity</th>
              <th className="text-right">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="font-medium">{item.product.name} </td>
                <td className="text-right">${item.product.price}</td>
                <td>
                  <div className="flex items-center join">
                    <button
                      onClick={() =>
                        handleUpdateQuantity(
                          item.id,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                      className="btn btn-xs btn-outline join-item"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleUpdateQuantity(item.id, e.target.value)
                      }
                      className="input input-xs input-bordered join-item w-12 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                      className="btn btn-xs btn-outline join-item"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="text-right font-medium">{item.total_price}</td>
                <td>
                  <button
                    className="btn btn-ghost btn-xs btn-circle"
                    aria-label={`Remove ${item.name} from cart`}
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FaRegTrashAlt className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItemList;