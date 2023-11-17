import { Link } from "react-router-dom";
import { navigation } from "../../assets/data/data";
import { ReactComponent as LogoutIcon } from "../../assets/svg/logout.svg";
import SideNavLink from "./SideNavLink";
import Logo from "../../assets/img/logo2.png";
import { useState } from "react";

// const myRole = false
const SideNav = () => {
  return (
    <div className="w-[371px] fixed top-0 -left-[371px] h-screen z-[30] border-r xl:w-full xl:relative xl:left-0 xl:z-[1]">
      <div>
        <Link to="/">
          <img
            className="mx-auto w-[120px] h-[50px] mt-16"
            src={Logo}
            alt="Providus Logo"
          />
        </Link>
      </div>

      <div className="mt-12 p-[20px]">
        {navigation()?.map(({ name, icon, href, role, dropdown }, idx) => {
          return (
            role && (
              <SideNavLink
                key={idx}
                icon={icon()}
                title={name}
                dropdown={dropdown}
                href={href}
                indexN={idx}
              />
            )
          );
        })}
      </div>

      <div className="container mt-[13rem] p-[10px_1px] w-[330px] ml-[20px] rounded-lg flex items-center text-[20px] space-x-4 bg-white shadow-[0px_4px_17px_4px_rgba(0,0,0,0.10)] cursor-pointer">
        <div className="ml-6 bg-black p-[10px] rounded-lg"><LogoutIcon /></div>
        <div>Logout</div>
      </div>
    </div>
  );
};

export default SideNav;
