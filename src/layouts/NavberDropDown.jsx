import { Link } from "react-router"; // or wherever your routing stems from

const NavbarDropdown = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-start relative">
      {/* 🍔 Trigger Button: Modernized Ghost styling */}
      <div 
        tabIndex={0} 
        role="button" 
        className="btn btn-ghost btn-circle hover:bg-slate-100/80 transition-colors duration-200 lg:hidden"
      >
        <div className="flex flex-col gap-1.5 justify-center items-center w-5 h-5">
          <span className="w-5 h-[2px] bg-slate-800 rounded-full transition-transform" />
          <span className="w-5 h-[2px] bg-slate-800 rounded-full transition-opacity" />
          <span className="w-5 h-[2px] bg-slate-800 rounded-full transition-transform" />
        </div>
      </div>

      {/* 🔮 Modernized Glassmorphic Dropdown Drawer Content */}
      <ul
        tabIndex={0}
        className="dropdown-content menu menu-md mt-4 w-64 p-3 rounded-2xl shadow-xl border border-slate-100/80 bg-white/90 backdrop-blur-md text-slate-800 z-50 transition-all duration-300 origin-top-left"
      >
        {/* Section 1: Hot Link */}
        <li className="mb-1">
          <Link 
            to="/new-arrivals" 
            className="flex items-center justify-between font-semibold px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-900 active:bg-slate-100 transition-colors"
          >
            <span>✨ New Arrivals</span>
            <span className="text-[10px] uppercase font-black tracking-wider px-1.5 py-0.5 rounded-md bg-amber-400 text-slate-950">New</span>
          </Link>
        </li>

        {/* Section 2: Nested Submenu */}
        <li className="mb-1">
          <div className="collapse collapse-arrow bg-transparent rounded-xl px-0 py-0">
            <input type="checkbox" className="min-h-0 h-full w-full absolute top-0 left-0 opacity-0 z-10 peer cursor-pointer" />
            
            {/* Header Parent */}
            <div className="collapse-title min-h-0 font-medium px-3 py-2.5 flex items-center justify-between text-slate-700 peer-checked:text-indigo-600 transition-colors">
              <span>📦 Collections</span>
            </div>

            {/* Inner Sub-items */}
            <div className="collapse-content px-1.5 pb-1 pt-0">
              <ul className="menu menu-sm bg-slate-50/50 rounded-xl p-1.5 border border-slate-100 space-y-0.5">
                <li>
                  <Link to="/collections/mens" className="py-2 px-3 text-slate-600 hover:text-slate-900 rounded-lg">Men's Apparel</Link>
                </li>
                <li>
                  <Link to="/collections/womens" className="py-2 px-3 text-slate-600 hover:text-slate-900 rounded-lg">Women's Fashion</Link>
                </li>
                <li>
                  <Link to="/collections/accessories" className="py-2 px-3 text-slate-600 hover:text-slate-900 rounded-lg">Accessories</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>

        {/* Section 3: Clean Primary Call to Action */}
        <li className="border-t border-slate-100 mt-2 pt-2">
          <Link 
            to="/shop" 
            className="flex items-center justify-between font-bold px-3 py-2.5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white hover:from-slate-800 hover:to-slate-700 active:scale-[0.98] shadow-sm transition-all"
          >
            <span>Explore Shop</span>
            <span className="text-xs">→</span>
          </Link>
        </li>
      </ul>        
    </div>
  );
};

export default NavbarDropdown;