import Navbar from "./Navbar"
import AboutSection from "./AboutSection"
import ProjectSection from "./ProjectSection"
import ContactSection from "./ContactSection"
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