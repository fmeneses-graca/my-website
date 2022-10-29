import { IoMenu, IoHome, IoPerson, IoSchool, IoBriefcase, IoDocumentText, IoTerminal, IoFileTrayStacked, IoChatbubbles, IoSunnyOutline, IoSunny } from "react-icons/io5";

export default function Navbar() {
    return (
        <div className="navbar">
            <NavbarElement icon={<IoPerson size="28" />} text="About"/>
            <NavbarElement icon={<IoBriefcase size="28" />} text="Skills"/>
            <NavbarElement icon={<IoSchool size="28" />} text="Resume"/>
            <NavbarElement icon={<IoTerminal size="28" />} text="Projects"/>
            <NavbarElement icon={<IoChatbubbles size="28" />} text="Contact"/>
            <NavbarElement icon={<IoSunnyOutline size="28" />} text="Dark mode"/>
        </div>
    )
}

function NavbarElement({ icon, text = '' }) {
    return (
        <div className="navbar-icon group">
            {icon}

            <span className="navbar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}