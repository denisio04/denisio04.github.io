import styles from './HomeSection.module.css';

function HomeSection({ onNavigate, t }) {
    return (
        <section id={styles.home}>

            <div 
                    className={styles.nextSectionBtn}
                    onClick={() => onNavigate('projects')} 
                >
                    <span className={styles.btnText}>{t.button}</span>
                    <span className={styles.arrow}>➔</span>
            </div>
            
            <div className={styles.introLabel}>
                <span>(001)</span>
                <span>{t.label}</span>
            </div>

            <div className={styles.nameContainer}>
                <h1 className={styles.firstName}>DENIS</h1>
                <h1 className={styles.lastName}>RODRIGUEZ</h1>
            </div>

            <h2 className={styles.heroText}>
                {t.hero.line1}<br/>{t.hero.line2}<br/>{t.hero.line3_start} <span className={styles.outlineText}>{t.hero.line3_end}</span>
            </h2>

            <div className={styles.footerInfo}>
                <div className={styles.roleBox}>
                    <span>{t.role1}</span>
                    <span>{t.role2}</span>
                    <span>{t.role3}</span>
                </div>
                
            </div>

        </section>
    );
}

export default HomeSection;