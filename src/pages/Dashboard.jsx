import {
  FiPackage,
  FiShoppingCart,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import StatCard from "../components/Dashboard/StatCard";
import Order from "../components/Dashboard/Order";
import authApiClient from "../services/auth-api-client";
import { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";

export default function Dashboard() {

  const {user}=useAuthContext();

  // 💡 Naming convention: Use camelCase for state variables (orders instead of Orders)
  const [orders, setOrders] = useState([]);

  // console.log("user is staff",user);

  const fetchOrderList = async () => {
    try {
      const response = await authApiClient.get("/orders/");
      
      // Sort orders from Newest to Oldest
      const sortedOrders = response.data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });

      setOrders(sortedOrders);
      console.log("Sorted Order Data:", sortedOrders);
    } catch (error) {
      console.log("Error fetching orders:", error);
    }
  };
  
  useEffect(() => {
    fetchOrderList();
  }, []);
  

 // Inside your Dashboard or Component function:
const [totalItems, setTotalItems] = useState(0);
useEffect(() => {
  let cnt = 0;
  orders.forEach((order) => {
    // 🛠️ Fixed typo from .lenth() to .length
    cnt += order.items.length;
  });
  setTotalItems(cnt);
}, [orders]); // Runs every time 'orders' changes (like after fetching from your API)



  return (
    <div className="space-y-8"> {/* Added spacing between the stats grid and the table */}
      
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      
      {/* 1. Total Products Card */}
      <div className="relative group rounded-2xl p-[2px] bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        {/* Inner card background forced to white/theme base to ensure text is visible */}
        <div className="bg-base-100 dark:bg-base-100 rounded-[14px] h-full w-full p-2">
          <StatCard icon={FiPackage} title="Total Products" value={totalItems} />
        </div>
      </div>

      {/* 2. Total Orders Card */}
      <div className="relative group rounded-2xl p-[2px] bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <div className="bg-base-100 dark:bg-base-100 rounded-[14px] h-full w-full p-2">
          <StatCard icon={FiShoppingCart} title="Total Orders" value={orders.length} />
        </div>
      </div>

      {/* 3. User Status Card */}
      <div className="relative group rounded-2xl p-[2px] bg-gradient-to-br from-purple-500 to-pink-600 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <div className="bg-base-100 dark:bg-base-100 rounded-[14px] h-full w-full p-2">
          {user?.is_staff ? (
            <StatCard icon={FiUsers} title="Total Users" value={573} />
          ) : (
            <StatCard icon={FiUsers} title="Account Status" value="Active User" />
          )}
        </div>
      </div>

      {/* 4. Average Rating Card */}
      <div className="relative group rounded-2xl p-[2px] bg-gradient-to-br from-amber-400 to-orange-500 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <div className="bg-base-100 dark:bg-base-100 rounded-[14px] h-full w-full p-2">
          <StatCard icon={FiStar} title="Average Rating" value={4.8} />
        </div>
      </div>

    </div>

      {/* Passing the fetched orders state array down to your child component */}
      <Order orders={orders} />
    </div>
  );
}


