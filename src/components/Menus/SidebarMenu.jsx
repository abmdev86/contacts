import { Sidebar } from "flowbite-react"
import { HiHome } from "react-icons/hi"

const SidebarMenu = () => {

    return (
        <div className="w-fit">
            <Sidebar aria-label="default sidebar">
                <h1>React Router Contacts</h1>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="/" icon={<HiHome />}>
                            Home
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )

}

export default SidebarMenu;