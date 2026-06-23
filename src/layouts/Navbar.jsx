import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import useCartContext from "../hooks/useCartContext";
import NavbarDropdown from "./NavberDropDown";

const Navbar = () => {
  const { user, logoutUser } = useAuthContext();
  const { cart } = useCartContext();

  return (
    <div className="navbar sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 px-4 sm:px-6 lg:px-8 z-50 transition-all duration-300">
      
      {/* ─── NAVBAR START ─── */}
      <div className="navbar-start">
        <NavbarDropdown />
        
        {/* Modern Dynamic Brand Logo */}
        <Link to="/" className="btn btn-ghost text-xl font-black tracking-tight bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
          PhiMart
        </Link>
      </div>

      {/* ─── NAVBAR CENTER (DESKTOP) ─── */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <li>
            <Link to="/" className="hover:text-indigo-600 rounded-xl transition-colors py-2 px-4">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-indigo-600 rounded-xl transition-colors py-2 px-4">Shop</Link>
          </li>
        </ul>
      </div>

      {/* ─── NAVBAR END ─── */}
      <div className="navbar-end gap-2">
        {user ? (
          <div className="flex items-center gap-3">
            
            {/* 🛒 Cart Dropdown Icon */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-slate-700 dark:text-slate-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item bg-indigo-500 border-none text-white font-bold h-4 min-h-4 min-w-4 px-1">
                    {cart?.items?.length || 0}
                  </span>
                </div>
              </div>
              
              {/* Cart Menu Box */}
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 mt-4 w-60 shadow-xl rounded-2xl z-50 overflow-hidden"
              >
                <div className="card-body p-4 text-slate-800 dark:text-slate-200">
                  <span className="text-base font-bold">{cart?.items?.length || 0} Items Selected</span>
                  <span className="text-indigo-500 font-extrabold text-sm mb-2">Subtotal: ${cart?.total_price || 0}</span>
                  <div className="card-actions">
                    <Link to="/dashboard/cart/" className="w-full">
                      <button className="btn bg-slate-900 hover:bg-slate-800 text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 border-none btn-block rounded-xl font-bold tracking-wide transition-all shadow-md">
                        View Cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 👤 User Avatar Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar ring-2 ring-transparent hover:ring-indigo-500/50 transition-all duration-300"
              >
                <div className="w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center p-[2px]">
                  <div className="w-full h-full rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                    {user?.avatar ? (
                      <img alt="User profile" src={user.avatar} />
                    ) : (
                      <span className="text-slate-700 font-bold text-xs uppercase">
                        {user?.username?.slice(0, 2) || "U"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Profile Menu Drawer */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl mt-4 w-56 p-2 shadow-xl text-slate-700 dark:text-slate-300 z-50 space-y-0.5"
              >
                <li className="menu-title px-3 py-2 text-[11px] uppercase font-bold tracking-wider text-slate-400">Account</li>
                <li>
                  <Link to="/dashboard/profile/" className="justify-between py-2 px-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 font-medium">
                    Profile
                    <span className="badge bg-amber-400 border-none text-slate-950 text-[10px] font-black uppercase tracking-wide">Live</span>
                  </Link>
                </li>
                <li>
                  <Link to="/UnderConstruction" className="py-2 px-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 font-medium">Settings</Link>
                </li>
                <div className="border-t border-slate-100 dark:border-slate-800 my-1" />
                <li>
                  <button onClick={logoutUser} className="py-2 px-3 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 font-bold transition-colors">
                    Logout
                  </button>
                </li>
              </ul>
            </div>

          </div>
        ) : (
          /* 🔐 Authentication CTA Links */
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-ghost font-semibold text-slate-700 dark:text-slate-300 rounded-xl px-4 normal-case hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Sign In
            </Link>
            <Link to="/register" className="btn bg-slate-900 hover:bg-slate-800 text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 border-none rounded-xl px-4 normal-case font-bold shadow-sm hover:shadow transition-all">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;