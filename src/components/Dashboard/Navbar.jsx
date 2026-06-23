import { FiMenu, FiX, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { Link } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";

const Navbar = ({ sidebarOpen, toggleSidebar }) => {
  const {user} = useAuthContext();
  console.log("userFromNav",user);
  return (
    <div className="navbar bg-base-100 border-b border-base-200 px-4 sm:px-6 min-h-[4rem] sticky top-0 z-30 backdrop-blur-md bg-opacity-80">
      {/* Mobile Sidebar Toggle */}
      <div className="flex-none lg:hidden">
        <button 
          onClick={() => toggleSidebar(!sidebarOpen)} 
          className="btn btn-ghost btn-circle hover:bg-base-200 transition-colors"
          aria-label="Toggle Sidebar"
        >
          {sidebarOpen ? (
            <FiX className="h-5 w-5 text-base-content/70" />
          ) : (
            <FiMenu className="h-5 w-5 text-base-content/70" />
          )}
        </button>
      </div>

      {/* Brand / Title Section */}
      <div className="flex-1 px-2 mx-2">
        <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Dashboard
        </h2>
      </div>

      {/* User Actions */}
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          {/* Avatar Button */}
          <label 
            tabIndex={0} 
            className="btn btn-ghost btn-circle avatar ring-2 ring-primary/10 hover:ring-primary/30 transition-all duration-200 focus:outline-none"
          >
            <div className="w-10 rounded-full bg-base-200 flex items-center justify-center">
              {/* Fallback to user icon if image is missing */}

              {/* Instead of Image */}
             {/* Replace your old <div className="w-10 rounded-full">...</div> with this */}
          <div className="avatar placeholder hover:scale-105 transition-transform duration-200">
            <div className="bg-gradient-to-tr from-primary to-secondary text-primary-content w-10 rounded-full ring-2 ring-primary/20 shadow-md">
              <span className="text-sm font-semibold tracking-wider">
                {/* Dynamic initials based on your user context, or a fallback */}
                {user?.first_name ? user.first_name.substring(0, 2).toUpperCase() : "PM"}
              </span>
            </div>

          </div>
            </div>
          </label>

          {/* Dropdown Menu */}
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-4 z-[50] p-2 shadow-xl border border-base-200 bg-base-100 rounded-2xl w-56 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="px-4 py-2 border-b border-base-100 mb-1">
              <p className="text-sm font-semibold text-base-content">{user.first_name} {user.last_name}</p>
              <p className="text-xs text-base-content/50 truncate">{user.email}</p>
            </div>
            
            <li>
              <Link to="/dashboard/profile" className="flex items-center gap-3 py-2.5 rounded-xl hover:bg-base-200">
                <FiUser className="h-4 w-4 text-base-content/60" />
                <span>Profile</span>
                <span className="badge badge-primary badge-sm ml-auto">New</span>
              </Link>
            </li>
            <li>
              <Link to="/UnderConstruction" className="flex items-center gap-3 py-2.5 rounded-xl hover:bg-base-200">
                <FiSettings className="h-4 w-4 text-base-content/60" />
                <span>Settings</span>
              </Link>
            </li>
            <hr className="my-1 border-base-200" />
            <li>
              <Link to="/logout" className="flex items-center gap-3 py-2.5 rounded-xl text-error hover:bg-error/10 hover:text-error">
                <FiLogOut className="h-4 w-4" />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;