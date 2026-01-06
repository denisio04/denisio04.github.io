import styles from './PageFrame.module.css'
import HomeSection from './HomeSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import AboutSection from './AboutSection';

function PageFrame({ activeSection, onNavigate, t }) {
    let content;

    if (activeSection === 'home') {
        content = <HomeSection onNavigate={onNavigate} t={t.home}/>;
    } else if (activeSection === 'projects') {
        content = <ProjectsSection onNavigate={onNavigate} t={t.projects}/>;
    } else if (activeSection === 'about') {
        content = <AboutSection onNavigate={onNavigate} t={t.about}/>;
    } else if (activeSection === 'contact') {
        content = <ContactSection onNavigate={onNavigate} t={t.contact}/>;
    }

    return (
        <div className={styles.pageFrame}>
            {content}
        </div>
    );
}

export default PageFrame;