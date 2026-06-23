import React, { useState } from "react";
import authApiClient from "../../services/auth-api-client";

const CartSummary = ({ totalPrice = 0, itemCount = 0, cartId }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Parse variables safely to prevent .toFixed crashes if strings are passed
  const cleanTotalPrice = Number(totalPrice) || 0;
  
  // Logic rules remain exact: Free if 0 items or total < $100, otherwise $10.00
  const shipping = (itemCount === 0 || cleanTotalPrice < 100) ? 0 : 10;
  const tax = cleanTotalPrice * 0.1;
  const orderTotal = cleanTotalPrice + shipping + tax;

  const deleteCart = () => {
    localStorage.removeItem("cartId");
  };

  const createOrder = async () => {
    try {
      setIsSubmitting(true);
      const order = await authApiClient.post("/orders/", { cart_id: cartId });
      
      if (order.status === 201) {
        deleteCart();
        setIsSuccess(true);
        // Force window session context reload after a clean delay for the user to read success state
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.error("Checkout transaction error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className=" bg-white rounded-2xl border border-emerald-100 p-8 text-center shadow-xl shadow-emerald-500/5 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">Order Provisioned!</h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
          Your order has been authorized. Re-indexing active session nodes...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden sticky top-6">
      {/* Decorative summary bar */}
      <div className="h-1.5 bg-gray-900 w-full" />
      
      <div className="p-6 md:p-8">
        <h2 className="text-lg font-black text-gray-900 tracking-tight mb-6 flex items-center justify-between">
          <span>Order Summary</span>
          <span className="text-xs font-mono font-medium px-2 py-0.5 bg-gray-50 border border-gray-100 text-gray-400 rounded-md">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </span>
        </h2>
        
        {/* Metric Ledger */}
        <div className="space-y-4 text-sm font-medium">
          <div className="flex justify-between items-center text-gray-500">
            <span>Subtotal</span>
            <span className="text-gray-900 font-semibold">${cleanTotalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center text-gray-500">
            <span>Shipping Handling</span>
            <span className={`font-semibold ${shipping === 0 ? "text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-xs border border-emerald-200/30" : "text-gray-900"}`}>
              {shipping === 0 ? "Free Shipping" : `$${shipping.toFixed(2)}`}
            </span>
          </div>

          <div className="flex justify-between items-center text-gray-500">
            <span>Estimated Local Tax</span>
            <span className="text-gray-900 font-semibold">${tax.toFixed(2)}</span>
          </div>

          {/* Master Rule Separator */}
          <div className="border-t border-gray-100 pt-4 mt-2">
            <div className="flex justify-between items-baseline">
              <span className="text-base font-bold text-gray-900">Total Valuation</span>
              <span className="text-2xl font-black text-gray-900 tracking-tight">
                ${orderTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Action Trigger Block */}
        <div className="mt-8">
          <button 
            disabled={itemCount === 0 || isSubmitting} 
            onClick={createOrder}
            className={`w-full group relative flex items-center justify-center gap-2 font-bold text-sm text-white py-3.5 px-6 rounded-xl transition-all duration-200 shadow-sm shadow-gray-900/10 
              ${itemCount === 0 
                ? 'bg-gray-100 border border-gray-200 text-gray-400 cursor-not-allowed shadow-none' 
                : 'bg-gray-900 hover:bg-gray-800 active:scale-[0.99]'
              }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Processing Order...</span>
              </>
            ) : (
              <>
                <span>Secure Checkout</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;