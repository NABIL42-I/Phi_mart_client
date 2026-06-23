import React from "react";
import OrderItems from "./OrderItems";

const OrderTable = ({ items = [] }) => {
  return (
    <div className="relative bg-white rounded-2xl border border-indigo-50/80 shadow-xl shadow-indigo-950/[0.02] overflow-hidden">
      
      {/* 📱 Mobile Overflow Indicators: Subtle right-edge fade visible only on small viewports */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-900/[0.03] to-transparent sm:hidden z-10" />
      
      {/* Container with optimized custom horizontal scroll behavior */}
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-100/80 scrollbar-track-transparent">
        <table className="table-auto w-full min-w-[600px] border-collapse text-sm">
          
          {/* Vibrant Table Header */}
          <thead>
            <tr className="bg-gradient-to-r from-slate-50/80 to-indigo-50/30 border-b border-indigo-100/50 backdrop-blur-md">
              <th className="px-6 py-4.5 text-left font-bold text-slate-400 uppercase tracking-wider text-[11px]">
                Product Parameters
              </th>
              <th className="px-6 py-4.5 text-right font-bold text-slate-400 uppercase tracking-wider text-[11px]">
                Unit Value
              </th>
              <th className="px-6 py-4.5 text-center font-bold text-slate-400 uppercase tracking-wider text-[11px] w-28">
                Quantity
              </th>
              <th className="px-6 py-4.5 text-right font-bold text-slate-400 uppercase tracking-wider text-[11px]">
                Gross Total
              </th>
            </tr>
          </thead>

          {/* Table Body Ledger Split Rows */}
          <tbody className="divide-y divide-slate-100/70 bg-white">
            {items.length > 0 ? (
              items.map((item, index) => (
                <OrderItems 
                  key={item.id || index} 
                  item={item} 
                />
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-16 text-center text-slate-400">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <span className="text-2xl animate-bounce duration-1000">📦</span>
                    <p className="font-bold text-sm text-slate-500">No line items found in this ledger.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default OrderTable;