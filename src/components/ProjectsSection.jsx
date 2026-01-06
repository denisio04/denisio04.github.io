import styles from './ProjectsSection.module.css';

function ProjectsSection({ onNavigate, t }) {
    
    return (
        <section id={styles.projects}>

            <div 
                    className={styles.nextSectionBtn}
                    onClick={() => onNavigate('about')} 
                >
                    <span className={styles.btnText}>{t.nextBtn}</span>
                    <span className={styles.arrow}>➔</span>
            </div>
            
            <div className={styles.header}>
                <span className={styles.tag}>{t.tag}</span>
                <h2 className={styles.title}>{t.title_start} <span className={styles.hollow}>{t.title_end}</span></h2>
            </div>

            <div className={styles.projectList}>
                
                <div className={styles.listHeader}>
                    <span>{t.headers.no}</span>
                    <span>{t.headers.name}</span>
                    <span>{t.headers.role}</span>
                    <span className={styles.desktopOnly}>{t.headers.stack}</span>
                    <span>{t.headers.year}</span>
                </div>
            
                {t.list.map((project) => (
                    <a href={project.link} key={project.id} className={styles.projectRow}>
                        <span className={styles.id}>{project.id}</span>
                        <span className={styles.name}>{project.title}</span>
                        <span className={styles.role}>{project.role}</span>
                        <span className={`${styles.tech} ${styles.desktopOnly}`}>{project.tech}</span>
                        <span className={styles.year}>{project.year}</span>
                        <span className={styles.arrow}>↗</span>
                    </a>
                ))}
            </div>

        </section>
    );
}

export default ProjectsSection;