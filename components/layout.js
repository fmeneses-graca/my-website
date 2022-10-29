import About from "./about"
import Contact from "./contact"
import Projects from "./projects"
import Experience from "./experience"
import Navbar from "./navbar"
import Skills from "./skills"
import HorizontalLine from "./horizontal-line"

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="bg-primary md:pl-20">
                <About />
                <HorizontalLine />
                <Skills />
                <HorizontalLine />
                <Experience />
                <HorizontalLine />
                <Projects />
                <HorizontalLine />
                <Contact />
                <HorizontalLine />
            </div>
        </>
    )
}