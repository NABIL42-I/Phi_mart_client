import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import OrderTable from "./OrderTable";
import authApiClient from "../../services/auth-api-client";

const OrderCard = ({ order, onCancel }) => {
  const { user } = useAuthContext();
  const [status, setStatus] = useState(order.status);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ text: "", type: "" });

  const showFeedback = (text, type = "error") => {
    setFeedback({ text, type });
    setTimeout(() => setFeedback({ text: "", type: "" }), 5000);
  };

  const handleStatusChange = async (event) => {
    const newStatus = event.target.value;
    try {
      const response = await authApiClient.patch(
        `/orders/${order.id}/update_status/`,
        { status: newStatus }
      );
      if (response.status === 200) {
        setStatus(newStatus);
        showFeedback("Order status synchronized successfully!", "success");
      }
    } catch (error) {
      console.error(error);
      const errorMsg = error.response?.data?.error || "Failed to update status node.";
      showFeedback(errorMsg, "error");
    }
  };

  // Modern soft-tint palette with rich contrast borders - now with font-bold baked in
// High-visibility, crisp, and bright contrast status styling configurations
const statusStyles = {
  "Not Paid": "bg-amber-50 text-amber-900 border-amber-200 font-bold shadow-xs",
  "Ready To Ship": "bg-sky-50 text-sky-950 border-sky-200 font-bold shadow-xs",
  "Shipped": "bg-indigo-50 text-indigo-950 border-indigo-200 font-bold shadow-xs",
  "Delivered": "bg-emerald-50 text-emerald-950 border-emerald-200 font-bold shadow-xs",
  "Canceled": "bg-rose-50 text-rose-950 border-rose-200 font-bold shadow-xs"
};

  // Dynamic soft gradient accents for the header panel background
  const headerStatusStyles = {
    "Not Paid": "bg-amber-50/40 border-b-amber-100/40",
    "Ready To Ship": "bg-sky-50/40 border-b-sky-100/40",
    "Shipped": "bg-indigo-50/30 border-b-indigo-100/30",
    "Delivered": "bg-emerald-50/30 border-b-emerald-100/30",
    "Canceled": "bg-rose-50/30 border-b-rose-100/30"
  };

  const handlePayment = async () => {
    setLoading(true);
    setFeedback({ text: "", type: "" });
    try {
      const response = await authApiClient.post("/payment/initiate/", {
        amount: order.total_price,
        orderId: order.id,
        numItems: order.items?.length,
      });

      if (response.data?.payment_url) {
        setLoading(false);
        window.location.href = response.data.payment_url;
      } else {
        setLoading(false);
        showFeedback("Payment gateway failed to provide a checkout link.", "error");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      const backendError = error.response?.data?.error || "Unable to initiate payment transaction.";
      showFeedback(backendError, "error");
    }
  };

  // Format date cleanly
  const formattedDate = new Date(order.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/30 mb-8 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/40">
      
      {/* Dynamic Smooth Alert Banner Component */}
      {feedback.text && (
        <div className="px-6 pt-5 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-bold tracking-wide border ${
            feedback.type === "success" 
              ? "bg-emerald-50/70 border-emerald-100 text-emerald-800" 
              : "bg-rose-50/70 border-rose-100 text-rose-800"
          }`}>
            <span className="text-base">{feedback.type === "success" ? "✨" : "⚠️"}</span>
            {feedback.text}
          </div>
        </div>
      )}

      {/* Header Info Panel */}
      <div className={`p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b backdrop-blur-3xl transition-all duration-300 ${
        headerStatusStyles[status] || "bg-slate-50/40 border-b-slate-50"
      }`}>
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h2 className="text-base md:text-lg font-black text-slate-900 tracking-tight">
              Order <span className="font-mono text-indigo-600 font-semibold text-sm md:text-base">#{order.id.slice(0, 8)}...</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs font-medium">
            Placed on {formattedDate}
          </p>
        </div>
        
        {/* Actions & Badge Allocation */}
        <div className="flex items-center gap-3 self-start sm:self-center">
          {user.is_staff ? (
            <div className="relative group">
              <select
                value={status}
                onChange={handleStatusChange}
                className={`appearance-none pl-4 pr-10 py-1.5 rounded-xl text-xs tracking-wide border cursor-pointer outline-none transition-all shadow-2xs ${
                  statusStyles[status] || "bg-slate-50 text-slate-700 font-bold"
                }`}
              >
                <option value="Not Paid" className="text-slate-900 bg-white font-bold">Not Paid</option>
                <option value="Ready To Ship" className="text-slate-900 bg-white font-bold">Ready To Ship</option>
                <option value="Shipped" className="text-slate-900 bg-white font-bold">Shipped</option>
                <option value="Delivered" className="text-slate-900 bg-white font-bold">Delivered</option>
                <option value="Canceled" className="text-slate-900 bg-white font-bold">Canceled</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-current opacity-70">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          ) : (
            <span className={`font-bold px-3 py-1.5 rounded-xl text-xs tracking-wide border shadow-2xs ${statusStyles[order.status]}`}>
              {order.status}
            </span>
          )}

          {order.status !== "Delivered" && order.status !== "Canceled" && !user.is_staff && (
            <button
              onClick={() => onCancel(order.id)}
              className="text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100/80 px-3 py-1.5 rounded-xl border border-rose-200 transition-colors"
            >
              Cancel Order
            </button>
          )}
        </div>
      </div>
      
      {/* Inner Nested Items Ledger Section */}
      <div className="p-6 md:p-8 bg-white">
        <h3 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
          <span>Manifest Line Items</span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
        </h3>
        <OrderTable items={order.items} />
      </div>
      
      {/* Bottom Valuation Summary Footer */}
      <div className="border-t border-slate-50 bg-slate-50/20 p-6 md:p-8 flex flex-col sm:flex-row items-end sm:items-center sm:justify-between gap-6">
        <p className="text-xs text-slate-400 font-medium max-w-xs hidden md:block">
          All financial distributions are fully localized. Complete processing audits are encrypted securely.
        </p>

        <div className="w-full sm:w-auto flex flex-col sm:items-end gap-4">
          <div className="space-y-2.5 w-full sm:w-[220px] text-sm font-medium text-slate-500">
            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span className="text-slate-900 font-bold font-mono">${order.total_price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span>Fulfillment Handling</span>
              <span className="text-emerald-600 font-bold font-mono bg-emerald-50 px-1.5 py-0.5 rounded">Free</span>
            </div>
            <div className="flex justify-between items-baseline font-bold border-t border-slate-100 pt-3 text-slate-900">
              <span className="text-xs font-black uppercase text-slate-400">Total Valuation</span>
              <span className="text-xl font-black text-indigo-950 font-mono tracking-tight">
                ${order.total_price.toFixed(2)}
              </span>
            </div>
          </div>

          {!user.is_staff && order.status === "Not Paid" && (
            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-xs py-3 px-6 rounded-xl transition-all shadow-md shadow-indigo-200 disabled:opacity-50 active:scale-[0.99]"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Verifying Session...</span>
                </>
              ) : (
                <>
                  <span>Clear Invoice Balance</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default OrderCard;