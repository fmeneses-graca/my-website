import { IoPerson, IoTerminal, IoChatbubbles, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"
import { Link, animateScroll as scroll } from "react-scroll"

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavbarElement target="about" icon={<IoPerson size="28" />} text="About" />
            <NavbarElement target="projects" icon={<IoTerminal size="28" />} text="Projects" />
            <NavbarElement target="contact" icon={<IoChatbubbles size="28" />} text="Contact" />
            <a className="icon group" href="https://www.linkedin.com/in/felipemenesesg/" target="_blank" rel="noopener noreferrer">
                <IoLogoLinkedin size="28" />
                <span className="navbar-tooltip group-hover:scale-100">
                    LinkedIn
                </span>
            </a>
            <a className="icon group" href="https://github.com/fmeneses-graca" target="_blank" rel="noopener noreferrer">
                <IoLogoGithub size="28" />
                <span className="navbar-tooltip group-hover:scale-100">
                    GitHub
                </span>
            </a>
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