import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import OrderTable from "./OrderTable";
import authApiClient from "../../services/auth-api-client";

const OrderCard = ({ order, onCancel }) => {
  const { user } = useAuthContext();
  const [status, setStatus] = useState(order.status);
  const [loading, setLoading] = useState(false);
  
  // New state to manage success/error feedback messages
  const [feedback, setFeedback] = useState({ text: "", type: "" }); 

  const showFeedback = (text, type = "error") => {
    setFeedback({ text, type });
    // Clear message automatically after 5 seconds
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
        showFeedback("Order status updated successfully!", "success");
      }
    } catch (error) {
      console.error(error);
      const errorMsg = error.response?.data?.error || "Failed to update status.";
      showFeedback(errorMsg, "error");
    }
  };

  const statusColors = {
    "Not Paid": "bg-yellow-500",
    "Ready To Ship": "bg-blue-500",
    "Shipped": "bg-indigo-500",
    "Delivered": "bg-green-500",
    "Canceled": "bg-red-500"
  };

  const handlePayment = async () => {
    setLoading(true);
    setFeedback({ text: "", type: "" }); // Clear any old messages
    try {
      const response = await authApiClient.post("/payment/initiate/", {
        amount: order.total_price,
        orderId: order.id,
        numItems: order.items?.length,
      });

      if (response.data?.payment_url) {
        setLoading(false);
        // Redirecting customer to SSLCommerz
        window.location.href = response.data.payment_url;
      } else {
        setLoading(false);
        showFeedback("Payment gateway failed to provide a checkout link.", "error");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      // Grab backend custom response if available, else use fallback
      const backendError = error.response?.data?.error || "Unable to initiate payment. Please try again.";
      showFeedback(backendError, "error");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">

       {/* Dynamic Alert Banner UI Component */}
        {feedback.text && (
          <div className={`flex justify-center mt-4 px-4 py-2 rounded-md text-sm w-full text-center font-medium max-w-[1600px] ${
            feedback.type === "success" 
              ? "bg-green-100 text-green-800 border border-green-200" 
              : "bg-red-100 text-red-800 border border-red-200"
          }`}>
            {feedback.text}
          </div>
        )}

      <div className="bg-gray-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold">Order #{order.id}</h2>
          <p className="text-gray-600 text-sm">Placed on {order.created_at}</p>
        </div>
        <div className="flex gap-2">
          {user.is_staff ? (
            <select
              value={status}
              onChange={handleStatusChange}
              className={`px-3 py-1 rounded-full text-white text-sm font-medium border-none cursor-pointer transitions-colors duration-200 ${
                statusColors[status] || "bg-gray-500"
              }`}
            >
              <option value="Not Paid" className="text-black bg-white">Not Paid</option>
              <option value="Ready To Ship" className="text-black bg-white">Ready To Ship</option>
              <option value="Shipped" className="text-black bg-white">Shipped</option>
              <option value="Delivered" className="text-black bg-white">Delivered</option>
              <option value="Canceled" className="text-black bg-white">Canceled</option>
            </select>
          ) : (
            <span
              className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                order.status === "Not Paid" ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {order.status}
            </span>
          )}
          {order.status !== "Delivered" &&
            order.status !== "Canceled" &&
            !user.is_staff && (
              <button
                onClick={() => onCancel(order.id)}
                className="text-blue-700 hover:underline"
              >
                Cancel
              </button>
            )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-medium text-lg mb-4">Order Items</h3>
        <OrderTable items={order.items} />
      </div>
      
      <div className="border-t p-6 flex flex-col items-end">
        <div className="space-y-2 w-full max-w-[200px]">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${order.total_price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-bold border-t pt-2">
            <span>Total:</span>
            <span>${order.total_price.toFixed(2)}</span>
          </div>
        </div>

       

        {!user.is_staff && order.status === "Not Paid" && (
          <button
            className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:bg-gray-400"
            onClick={handlePayment}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;






















// import { useState } from "react";
// import useAuthContext from "../../hooks/useAuthContext";
// import OrderTable from "./OrderTable";
// import authApiClient from "../../services/auth-api-client";

// const OrderCard = ({ order, onCancel }) => {
//   const { user } = useAuthContext();
//   const [status, setStatus] = useState(order.status);
//   const [loading, setLoading] = useState(false);

//   const handleStatusChange = async (event) => {
//     const newStatus = event.target.value;
//     try {
//       const response = await authApiClient.patch(
//         `/orders/${order.id}/update_status/`,
//         { status: newStatus }
//       );
//       console.log(response);
//       if (response.status === 200) {
//         setStatus(newStatus);
//         alert(response.data.status);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   // 1.1 Define your color mapping outside of the return statement
//     const statusColors = {
//     "Not Paid": "bg-yellow-500",
//     "Ready To Ship": "bg-blue-500",
//     "Shipped": "bg-indigo-500",
//     "Delivered": "bg-green-500",    // Dynamic green for Delivered
//     "Canceled": "bg-red-500"
//     };

//     const handlePayment = async () => {
//         setLoading(true);
//     try {
//       const response = await authApiClient.post("/payment/initiate/", {
//         amount: order.total_price,
//         orderId: order.id,
//         numItems: order.items?.length,
//       });
//     //    console.log(response.data.payment_url);
//       if (response.data.payment_url) {
//             setLoading(false);
//             window.location.href = response.data.payment_url;
//       } else {
//         alert("Payment failed");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
//       <div className="bg-gray-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//         <div>
//           <h2 className="text-lg font-bold">Order #{order.id}</h2>
//           <p className="text-gray-600 text-sm">Placed on {order.created_at}</p>
//         </div>
//         <div className="flex gap-2">
//           {user.is_staff ? (
//             // 1.2 Inside your JSX, pull the color dynamically using the current status
//             <select
//             value={status}
//             onChange={handleStatusChange}
//             className={`px-3 py-1 rounded-full text-white text-sm font-medium border-none cursor-pointer transitions-colors duration-200 ${
//                 statusColors[status] || "bg-gray-500" // Fallback color just in case
//             }`}
//             >
//             <option value="Not Paid" className="text-black bg-white">Not Paid</option>
//             <option value="Ready To Ship" className="text-black bg-white">Ready To Ship</option>
//             <option value="Shipped" className="text-black bg-white">Shipped</option>
//             <option value="Delivered" className="text-black bg-white">Delivered</option>
//             <option value="Canceled" className="text-black bg-white">Canceled</option>
//             </select>
//           ) : (
//             <span
//               className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
//                 order.status === "Not Paid" ? "bg-red-500" : "bg-green-500"
//               }`}
//             >
//               {order.status}
//             </span>
//           )}
//           {order.status !== "Delivered" &&
//             order.status !== "Canceled" &&
//             !user.is_staff && (
//               <button
//                 onClick={() => onCancel(order.id)}
//                 className="text-blue-700 hover:underline"
//               >
//                 Cancel
//               </button>
//             )}
//         </div>
//       </div>
//       <div className="p-6">
//         <h3 className="font-medium text-lg mb-4">Order Items</h3>
//         {/* Order Items Table  */}
//         <OrderTable items={order.items} />
//       </div>
//       <div className="border-t p-6 flex flex-col items-end">
//         <div className="space-y-2 w-full max-w-[200px]">
//           <div className="flex justify-between">
//             <span>Subtotal:</span>
//             <span>${order.total_price.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Shipping:</span>
//             <span>$0.00</span>
//           </div>
//           <div className="flex justify-between font-bold border-t pt-2">
//             <span>Total:</span>
//             <span>${order.total_price.toFixed(2)}</span>
//           </div>
//         </div>
//         {!user.is_staff && order.status === "Not Paid" && (
//           <button
//             className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
//             onClick={handlePayment}
//             disabled={loading}
//           >
//             {loading ? "Processing..." : "Pay Now"}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrderCard;