import { ReactComponent as Hamburger } from "../../assets/svg/hamburger.svg";
import { ReactComponent as UserIcon } from "../../assets/svg/user-icons.svg";
import { ReactComponent as ProvidusLogo } from "../../assets/svg/providus.svg";
import { Avatar } from "@mui/material";

const AccountMenu = () => {
  return (
    <>
      <div className="sticky top-0 z-[20] h-[91px] bg-[#ffffff] px-[30px] py-[5px] flex items-center xl:px-[55px]">
        <div className="flex items-center space-x-4 xl:hidden">
          <Hamburger />
          <ProvidusLogo className="w-[100px] h-[30px]" />
        </div>
        <div className=" ml-auto w-fit flex items-center space-x-4">
          <div className="bg-black p-[10px] rounded-full hover:bg-yellow-500 cursor-pointer">
              <UserIcon className="w-[30px] h-[30px]"/>
          </div>
          <div className="hidden sm:block">Yazid Musa Topa</div>
        </div>
      </div>
    </>
  );
};

export default AccountMenu;
