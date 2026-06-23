import {
  FiBarChart2,
  FiClipboard,
  FiPackage,
  FiPlusCircle,
  FiShoppingCart,
  FiStar,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { Link, NavLink } from "react-router"; // <-- Swapped to NavLink
import useAuthContext from "../../hooks/useAuthContext";

const Sidebar = () => {
  const { user } = useAuthContext();

  const customerMenus = [
    { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
    { to: "/dashboard/cart", icon: FiShoppingCart, label: "Cart" },
    { to: "/dashboard/products/deliveredproducts", icon: FiUsers, label: "Delivered Products" },
    { to: "/dashboard/orders", icon: FiPackage, label: "Orders" },
    { to: "/reviews", icon: FiStar, label: "Reviews" },
    { to: "/categories", icon: FiTag, label: "Categories" },
    { to: "/dashboard/profile", icon: FiUsers, label: "User Profile" },

  ];

  const adminMenus = [ // Fixed typo from 'adminMenues'
    { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
    { to: "/shop", icon: FiPackage, label: "Products" },
    { to: "/dashboard/products/add", icon: FiPlusCircle, label: "Add Product" },
    { to: "/dashboard/products/deliveredproducts", icon: FiUsers, label: "Delivered Products" }, 
    { to: "/categories", icon: FiTag, label: "Categories" },
    { to: "/categories/add", icon: FiPlusCircle, label: "Add Category" },
    { to: "/dashboard/cart", icon: FiShoppingCart, label: "Cart" },
    { to: "/dashboard/orders", icon: FiClipboard, label: "Orders" },
    { to: "/reviews", icon: FiStar, label: "Reviews" },
    { to: "/users", icon: FiUsers, label: "Users" },
  ];

  const menuItems = user?.is_staff ? adminMenus : customerMenus;

  return (
    <div className="drawer-side z-40">
      {/* The invisible backdrop that closes the sidebar when clicked */}
      <label
        htmlFor="drawer-toggle"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      <aside className="bg-base-100 border-r border-base-200 w-64 min-h-full flex flex-col p-4 text-base-content shadow-lg lg:shadow-none">
        
        {/* Brand Header */}
        <div className="flex items-center justify-between mb-6 px-2 pt-1">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-content transition-all duration-200">
              <FiShoppingCart className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">PhiMart</span>
          </Link>

          {/* User Role Badge */}
          <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full border ${
            user?.is_staff 
              ? 'bg-purple-500/10 text-purple-600 border-purple-500/20' 
              : 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
          }`}>
            {user?.is_staff ? 'Admin' : 'Client'}
          </span>
        </div>

        {/* Section divider label */}
        <div className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-base-content/40">
          {user?.is_staff ? 'Management' : 'My Account'}
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto pr-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={index}
                to={item.to}
                end={item.to === "/dashboard"} // Prevents sub-routes from triggering "Dashboard" active state
                className={({ isActive }) => `
                  flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150
                  ${isActive 
                    ? "bg-primary text-primary-content font-semibold shadow-sm shadow-primary/20" 
                    : "text-base-content/70 hover:bg-base-200/60 hover:text-base-content"
                  }
                `}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Modern Footer Widget */}
        <div className="mt-auto pt-4 border-t border-base-200/60">
          <div className="p-3 rounded-2xl bg-base-200/50 border border-base-200 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <p className="text-xs font-semibold text-base-content">System Online</p>
              </div>
              <p className="text-[10px] text-base-content/50 mt-0.5">PhiMart OS v2.4</p>
            </div>
          </div>
        </div>

      </aside>
    </div>
  );
};

export default Sidebar;