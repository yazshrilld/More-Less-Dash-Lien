import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navClass = `flex items-center group relative h-[71px] text-font space-x-4 text-[20px] font-medium`;

const SideNavLink = ({ title, icon, href, dropdown, indexN }) => {
  const [icons, setIcons] = useState(null);

  const activeIcon = (indexN) => {
    setIcons(indexN);
  };

  return (
    <>
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive
            ? `${navClass} nav-icon bg-white rounded-lg shadow-[0px_4px_17px_4px_rgba(0,0,0,0.10)]`
            : `${navClass} hover:bg-slate-50`
        }
      >
        <span className="ml-6 bg-black p-[10px] rounded-lg active-left">
          {icon}
        </span>
        {/* <span className="ml-6 bg-black p-[10px] rounded-lg">{icon}</span> */}
        {/* <span className={({isActive}) => isActive ? `bg-black` : `bg-green-300`}>{icon}</span> */}
        <span className="font-medium text-base">{title}</span>

        {dropdown?.length > 0 && (
          <div className="absolute z-[5] hidden group-hover:block w-[280px] text-base pb-[0px] rounded-[5px] shadow-[0px_4px_17px_4px_rgba(0,0,0,0.10)] left-[100px] bg-white top-[68px]">
            {dropdown?.map(({ label, href }, idx) => (
              <Link
                key={idx}
                to={href}
                className="px-[30px] block py-[15px] hover:border hover:border-b-yellow-500/20 border-t-transparent border-x-transparent"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </NavLink>
    </>
  );
};

export default SideNavLink;
