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

  // 🎨 Row Base Colors
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

  // ✨ Left-side Accent Gradient Strip
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
    <div className="mt-6 card bg-base-100 shadow-sm p-4 md:p-6">
      <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
      
      {orders?.length === 0 ? (
        <div className="text-center py-12 card bg-base-100 border border-base-200 shadow-2xs max-w-md mx-auto my-6">
          <div className="text-6xl mb-4 animate-bounce duration-1000">📦</div>
          <h3 className="text-xl font-bold text-base-content mb-1">No Orders Yet</h3>
          <p className="text-sm text-base-content/60 px-6">
            Your order history is empty. Once you place an order, it will appear right here!
          </p>
        </div>
      ) : (
        <div>

          {/* 📱 MOBILE VIEW: Premium Ultra-Modern Mobile Cards with Interactive States */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {orders?.map((order) => (
              <div 
                key={order.id}
                className={`group relative overflow-hidden p-5 rounded-2xl shadow-xs border border-slate-100/80 transition-all duration-300 
                  hover:scale-[1.02] hover:shadow-md hover:border-slate-200/60
                  active:scale-[0.98] active:shadow-xs
                  ${getRowBgClass(order.status)}`}
              >
                {/* 🔮 Left Accent Gradient Bar - Widens slightly on touch/hover */}
                <div className={`absolute top-0 left-0 bottom-0 w-1.5 group-hover:w-2.5 transition-all duration-300 ${getRowLeftGradient(order.status)}`} />

                {/* Top Meta Section */}
                <div className="flex justify-between items-center mb-4 pl-1">
                  <div>
                    <span className="font-mono text-[10px] font-bold tracking-wider text-slate-400 block uppercase">
                      Order ID
                    </span>
                    <span className="font-bold text-slate-900 text-base group-hover:text-black transition-colors">
                      #{order.id.slice(0, 8)}
                    </span>
                  </div>
                  {/* Badge - Twaeks scale smoothly on interaction */}
                  <span className={`inline-flex items-center px-3 py-1 text-xs font-bold tracking-wide rounded-full bg-gradient-to-r shadow-xs transition-transform duration-300 group-hover:scale-105 ${getStatusGradientClass(order.status)}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5 opacity-70 animate-pulse" />
                    {order.status || "Unknown"}
                  </span>
                </div>

                {/* Info Grid Body - Shifts background opacity subtly on interaction */}
                <div className="grid grid-cols-2 gap-y-3 bg-white/60 group-hover:bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-black/5 pl-4 transition-colors duration-300">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Date Placed
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      {new Date(order.created_at).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Total Amount
                    </span>
                    <span className="text-base font-black text-slate-900 tracking-tight">
                      ${order.total_price}
                    </span>
                  </div>

                  {user?.is_staff && (
                    <div className="col-span-2 border-t border-black/5 pt-2 mt-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Customer Reference
                      </span>
                      <span className="text-sm font-medium text-slate-700 font-mono break-all">
                        {order.user}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 🖥️ DESKTOP VIEW: Ultra-Modern Premium Table Layout */}
          <div className="hidden md:block overflow-x-auto">
            <table className="table w-full border-separate border-spacing-y-3.5 align-middle">
              <thead>
                <tr className="text-slate-400 text-xs font-bold uppercase tracking-wider border-none bg-slate-50/50">
                  <th className="w-4 p-0 rounded-l-2xl bg-transparent"></th>
                  <th className="py-4 px-4 font-semibold text-left">Order ID</th>
                  {user?.is_staff && <th className="py-4 px-4 font-semibold text-left">Customer ID</th>}
                  <th className="py-4 px-4 font-semibold text-left">Status</th>
                  <th className="py-4 px-4 font-semibold text-left">Date Placed</th>
                  <th className="py-4 px-4 font-semibold text-right rounded-r-2xl">Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order) => (
                  <tr 
                    key={order.id} 
                    className={`${getRowBgClass(order.status)} transition-all duration-300 group hover:translate-x-1 hover:shadow-md border-none`}
                  >
                    {/* 🔮 Left Accent Gradient strip embedded seamlessly inside the row radius */}
                    <td className={`p-0 w-2 rounded-l-2xl transition-all duration-300 relative overflow-hidden ${getRowLeftGradient(order.status)}`} />
                    
                    {/* Order ID Info */}
                    <td className="py-4 px-4">
                      <span className="font-mono text-sm font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                        #{order.id.slice(0, 8)}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400 block mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Full lookup active
                      </span>
                    </td>

                    {/* Customer info column */}
                    {user?.is_staff && (
                      <td className="py-4 px-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-slate-700">{order.user}</span>
                          <span className="text-[10px] text-slate-400 font-mono">System Account</span>
                        </div>
                      </td>
                    )}

                    {/* Status Badge */}
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-3 py-1 text-xs font-extrabold tracking-wide rounded-full bg-gradient-to-r shadow-xs transition-transform duration-300 group-hover:scale-105 ${getStatusGradientClass(order.status)}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5 opacity-70 animate-pulse" />
                        {order.status || "Unknown"}
                      </span>
                    </td>

                    {/* Dynamic clean Date rendering */}
                    <td className="py-4 px-4">
                      <span className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">
                        {new Date(order.created_at).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </td>

                    {/* Bold visual amount display aligned right */}
                    <td className="py-4 px-4 text-right rounded-r-2xl">
                      <span className="font-black text-slate-900 text-base tracking-tight">
                        ${order.total_price}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}
    </div>
  );
};

export default Order;




