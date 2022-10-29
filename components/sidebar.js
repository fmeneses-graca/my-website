import { IoMenu, IoHome, IoPerson, IoSchool, IoBriefcase, IoDocumentText, IoTerminal, IoFileTrayStacked, IoChatbubbles, IoSunnyOutline, IoSunny } from "react-icons/io5";

export default function Sidebar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg border-r-secondary border-r-2">
            <SidebarElement icon={<IoPerson size="28" />} text="About"/>
            <SidebarElement icon={<IoBriefcase size="28" />} text="Skills"/>
            <SidebarElement icon={<IoSchool size="28" />} text="Resume"/>
            <SidebarElement icon={<IoTerminal size="28" />} text="Projects"/>
            <SidebarElement icon={<IoChatbubbles size="28" />} text="Contact"/>
            <SidebarElement icon={<IoSunnyOutline size="28" />} text="Dark mode"/>
        </div>
    )
}

function SidebarElement({ icon, text = '' }) {
    return (
        <div className="sidebar-icon group">
            {icon}

            <span class="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}