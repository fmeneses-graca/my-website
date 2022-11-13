import AboutSection from "./AboutSection"
import ContactSection from "./ContactSection"
import ProjectSection from "./ProjectSection"
import ExperienceSection from "./ExperienceSection"
import Navbar from "./Navbar"
import SkillSection from "./SkillSection"
import HorizontalLine from "./HorizontalLine"

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="md:pl-20">
                <AboutSection />
                <HorizontalLine />
                <SkillSection />
                <HorizontalLine />
                <ProjectSection />
                <HorizontalLine />
                <ExperienceSection />
                <HorizontalLine />
                <ContactSection />
                <HorizontalLine />
            </div>
        </>
    )
}