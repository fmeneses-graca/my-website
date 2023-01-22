import { IoPerson, IoSchool, IoBriefcase, IoTerminal, IoChatbubbles, IoSunnyOutline } from "react-icons/io5"
import { Link, animateScroll as scroll } from "react-scroll"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavbarElement target="about" icon={<IoPerson size="28" />} text="About" />
            <NavbarElement target="projects" icon={<IoTerminal size="28" />} text="Projects" />
            <NavbarElement target="contact" icon={<IoChatbubbles size="28" />} text="Contact" />
            <a className="icon group" href="https://www.linkedin.com/in/felipemenesesg/">
                <IoLogoLinkedin size="28" />
            </a>
            <a className="icon group" href="https://github.com/fmeneses-graca">
                <IoLogoGithub size="28" />
            </a>
            {/* <NavbarElement target="skills" icon={<IoBriefcase size="28" />} text="Skills" /> */}
            {/* <NavbarElement target="experience" icon={<IoSchool size="28" />} text="Experience" /> */}
            {/* <NavbarElement icon={<IoSunnyOutline size="28" />} text="Dark mode"/> */}
        </nav>
    )
}




function NavbarElement({ target, icon, text }) {
    return (
        <Link className="icon group" to={target} smooth={true} offset={-10} duration={600}>
            {icon}
            <span className="navbar-tooltip group-hover:scale-100">
                {text}
            </span>
        </Link>
    )
}