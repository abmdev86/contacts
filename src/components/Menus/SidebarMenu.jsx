import { Sidebar } from "flowbite-react";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

const NAVLINKS = [
  {
    path: "/contacts/1",
    name: "Your Name",
    icon: <HiOutlineUser />,
  },
  {
    path: "/contacts/1",
    name: "Your Friend",
    icon: <HiOutlineUser />,
  },
];

const SidebarMenu = () => {
  return (
    <nav className="flex-1 overflow-auto pt-4">
      <Sidebar aria-label="default sidebar">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="p-0 m-0 ">
            {NAVLINKS.map((link, index) => (
              <Sidebar.Item key={index} className="my-1 mx-0">
                <Link to={link.path}>
                  <span className="float-right text-[#eeb004] active:text-inherit">
                    {link.icon}
                  </span>
                  {link.name}
                </Link>
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </nav>
  );
};

export default SidebarMenu;
