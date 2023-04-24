import SidebarMenu from "../components/Menus/SidebarMenu";
import SidebarSearchForm from "../components/Forms/SidebarSearchForm";
import { HiDevicePhoneMobile } from "react-icons/hi2";
const Root = () => {
  return (
    <>
      <div
        id="sidebar"
        className="w-80 bg-white rounded-r-lg border-r-2 flex-col "
      >
        <h1 className="text-base font-medium flex items-center m-0 pt-4 pr-4 rounded-t-sm border-t-2 border-[#243c5a]">
          <span className="relative mr-1 ">
            <HiDevicePhoneMobile />
          </span>
          Contacts
        </h1>
        <SidebarSearchForm />
        <div className="flex items-center gap-2 py-4 rounded-b-sm border-b-2 border-[#e3e3e3]">
          <SidebarMenu />
        </div>
      </div>

      <div id="detail"></div>
    </>
  );
};

export default Root;
