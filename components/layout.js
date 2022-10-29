import About from "./about"
import Contact from "./contact"
import Projects from "./projects"
import Resume from "./resume"
import Sidebar from "./sidebar"
import Skills from "./skills"

export default function Layout() {
    return (
        <>
            <Sidebar />
            <div className="text-secondary flex-col pl-20 bg-primary">
                <About />
                <HorizontalLine />
                <Skills />
                <HorizontalLine />
                <Resume />
                <Projects />
                <Contact />
            </div>
        </>
    )
}

function HorizontalLine() {
    return (
        <hr className="mx-auto w-1/2 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
    )
}