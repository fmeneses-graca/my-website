import AboutSection from "./AboutSection"
import ContactSection from "./ContactSection"
import ProjectSection from "./ProjectSection"
import Navbar from "./Navbar"
import HorizontalLine from "./HorizontalLine"

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="md:pl-20">
                <AboutSection />
                <HorizontalLine />
                <ProjectSection />
                <HorizontalLine />
                <ContactSection />
                <HorizontalLine />
            </div>
        </>
    )
}