import React from "react";

const OrderItems = ({ item }) => {
  // Defensive checks to extract variables cleanly
  const product = item?.product;
  const unitPrice = Number(item?.price || product?.price || 0);
  const totalValuation = Number(item?.total_price || 0);

  return (
    <tr className="hover:bg-indigo-50/30 transition-all duration-200 group relative border-l-2 border-l-transparent hover:border-l-indigo-600">
      
      {/* Product Name & Brand Cell */}
      <td className="px-6 py-5 text-left align-middle">
        <div className="flex items-center gap-3">
          {/* Subtle colorful visual initial badge */}
          <div className="w-9 h-9 hidden sm:flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-black text-xs shadow-sm shadow-indigo-200">
            {product?.name ? product.name.charAt(0).toUpperCase() : "P"}
          </div>
          
          <div className="flex flex-col">
            <span className="font-bold text-gray-800 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text group-hover:from-indigo-9ade group-hover:to-purple-600 transition-all duration-200 truncate max-w-[180px] md:max-w-xs text-[15px]">
              {product?.name || "Unidentified Line Item"}
            </span>
            <span className="text-[10px] font-mono font-medium tracking-wider text-gray-400 mt-0.5">
              SKU: #{product?.id ?? "N/A"}
            </span>
          </div>
        </div>
      </td>

      {/* Unit Value Price Cell */}
      <td className="px-6 py-5 text-right align-middle font-mono font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">
        ${unitPrice.toFixed(2)}
      </td>

      {/* Modern Colorful Quantity Badge Cell */}
      <td className="px-6 py-5 text-center align-middle">
        <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-mono font-black text-indigo-700 bg-indigo-50/80 border border-indigo-100 rounded-lg shadow-xs group-hover:bg-indigo-100/50 transition-colors">
          {item?.quantity ?? 0}x
        </span>
      </td>

      {/* Total Aggregation Premium Cell */}
      <td className="px-6 py-5 text-right align-middle">
        <span className="font-mono font-black text-base tracking-tight bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-200">
          ${totalValuation.toFixed(2)}
        </span>
      </td>
      
    </tr>
  );
};

export default OrderItems;