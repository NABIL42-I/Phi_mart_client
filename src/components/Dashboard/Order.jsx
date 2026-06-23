import useAuthContext from "../../hooks/useAuthContext";

const Order = ({ orders }) => {
  const { user } = useAuthContext();

  // 🌟 Premium Solid Gradient for the Badge
  const getStatusGradientClass = (status) => {
    switch (status) {
      case "Delivered":
        return "from-emerald-500 to-green-600 text-white"; 
      case "Shipped":
        return "from-indigo-500 to-blue-600 text-white";
      case "Ready To Ship":
        return "from-cyan-500 to-teal-600 text-white";
      case "Not Paid":
        return "from-amber-400 to-orange-500 text-black";
      case "Canceled":
        return "from-rose-500 to-red-600 text-white";
      default:
        return "from-slate-400 to-slate-500 text-white";
    }
  };

  // 🎨 Row Base Colors (Matches your updated choices)
  const getRowBgClass = (status) => {
    switch (status) {
      case "Delivered": return "bg-green-100/80 hover:bg-green-200/90"; 
      case "Shipped": return "bg-indigo-100/80 hover:bg-indigo-200/90";
      case "Ready To Ship": return "bg-cyan-100/80 hover:bg-cyan-200/90";
      case "Not Paid": return "bg-amber-100/80 hover:bg-amber-200/90";
      case "Canceled": return "bg-red-100/80 hover:bg-red-200/90";
      default: return "hover:bg-gray-200"; 
    }
  };

  // ✨ NEW: Left-side Accent Gradient Strip matching your Stat Cards
  const getRowLeftGradient = (status) => {
    switch (status) {
      case "Delivered": return "bg-gradient-to-b from-emerald-500 to-green-600";
      case "Shipped": return "bg-gradient-to-b from-blue-500 to-indigo-600";
      case "Ready To Ship": return "bg-gradient-to-b from-cyan-500 to-teal-600";
      case "Not Paid": return "bg-gradient-to-b from-amber-400 to-orange-500";
      case "Canceled": return "bg-gradient-to-b from-purple-500 to-pink-600";
      default: return "bg-slate-400";
    }
  };

  return (
    <div className="mt-6 card bg-base-100 shadow-sm p-6">
      <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
      
      {orders?.length === 0 ?(
        /* 📦 Clean, modern empty state card placeholder */
        <div className="text-center py-12 card bg-base-100 border border-base-200 shadow-2xs max-w-md mx-auto my-6">
          <div className="text-6xl mb-4 animate-bounce duration-1000">📦</div>
          <h3 className="text-xl font-bold text-base-content mb-1">No Orders Yet</h3>
          <p className="text-sm text-base-content/60 px-6">
            Your order history is empty. Once you place an order, it will appear right here!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="text-gray-500 bg-base-200/40">
                <th className="w-2 p-0 rounded-l-lg"></th> {/* Spacer column for the border look */}
                <th>Order ID</th>
                {user?.is_staff && <th>Customer ID</th>}
                <th>Status</th>
                <th>Date</th>
                <th className="rounded-r-lg">Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => (
                <tr 
                  key={order.id} 
                  className={`${getRowBgClass(order.status)} transition-all duration-200 shadow-2xs hover:shadow-xs`}
                >
                  {/* 🛠️ Styled Left Edge Gradient strip to mimic the card border wrapper */}
                  <td className={`p-0 w-1.5 rounded-l-lg ${getRowLeftGradient(order.status)}`} />
                  
                  <td className="font-medium text-slate-800">#{order.id.slice(0, 8)}...</td>
                  {user?.is_staff && <td className="text-slate-700">{order.user}</td>}
                  <td>
                    <span className={`inline-block px-3 py-1 text-xs font-bold tracking-wide rounded-full bg-gradient-to-r shadow-xs ${getStatusGradientClass(order.status)}`}>
                      {order.status || "Unknown"}
                    </span>
                  </td>
                  <td className="text-slate-600">{new Date(order.created_at).toLocaleDateString()}</td>
                  <td className="font-bold text-slate-900 rounded-r-lg">
                    ${order.total_price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Order;





























// import useAuthContext from "../../hooks/useAuthContext";

// const Order = ({ orders }) => {
//   const { user } = useAuthContext();

//   // 🌟 Premium Solid Gradient for the Badge
//   const getStatusGradientClass = (status) => {
//     switch (status) {
//       case "Delivered":
//         return "from-emerald-500 to-green-600 text-white"; 
//       case "Shipped":
//         return "from-indigo-500 to-blue-600 text-white";
//       case "Ready To Ship":
//         return "from-cyan-500 to-teal-600 text-white";
//       case "Not Paid":
//         return "from-amber-400 to-orange-500 text-black ";
//       case "Canceled":
//         return "from-rose-500 to-red-600 text-white";
//       default:
//         return "from-slate-400 to-slate-500 text-white";
//     }
//   };

//   // 🎨 NEW: Light version color mapping for the whole Row Background
// const getRowBgClass = (status) => {
//   switch (status) {
//     case "Delivered":
//       return "bg-green-200 hover:bg-green-400"; 
//     case "Shipped":
//       return "bg-indigo-200 hover:bg-indigo-400";
//     case "Ready To Ship":
//       return "bg-cyan-200 hover:bg-cyan-400";
//     case "Not Paid":
//       return "bg-amber-200 hover:bg-amber-400";
//     case "Canceled":
//       return "bg-red-200 hover:bg-red-400";
//     default:
//       return "hover:bg-gray-400"; 
//   }
// };

//   return (
//     <div className="mt-6 card bg-base-100 shadow-sm p-6">
//       <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
      
//       {orders?.length === 0 ? (
//         <div className="alert alert-info shadow-sm max-w-md mx-auto my-8">
//           <span>No orders placed yet.</span>
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           {/* Note: Removed 'table-zebra' class because custom colored rows replace the gray zebra striping */}
//           <table className="table w-full border-separate border-spacing-y-1">
//             <thead>
//               <tr className="bg-base-200/50">
//                 <th className="rounded-l-lg">Order ID</th>
//                 {user?.is_staff && <th>Customer ID</th>}
//                 <th>Status</th>
//                 <th>Date</th>
//                 <th className="rounded-r-lg">Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders?.map((order) => (
//                 <tr 
//                   key={order.id} 
//                   className={`${getRowBgClass(order.status)}`}
//                 >
//                   <td className="rounded-l-lg font-medium">#{order.id}</td>
//                   {user?.is_staff && <td>{order.user}</td>}
//                   <td>
//                     <span className={`inline-block px-3 py-1 text-xs font-bold tracking-wide rounded-full bg-gradient-to-r shadow-xs ${getStatusGradientClass(order.status)}`}>
//                       {order.status || "Unknown"}
//                     </span>
//                   </td>
//                   <td>{new Date(order.created_at).toLocaleDateString()}</td>
//                   <td className="font-bold text-base-content rounded-r-lg">
//                     ${order.total_price}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Order;