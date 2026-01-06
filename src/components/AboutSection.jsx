import styles from './AboutSection.module.css';
import profilePic from '../assets/profile-pic.jpg';

function AboutSection( {onNavigate, t} ) {
    return (
        <section id={styles.about}>

            <div 
                    className={styles.nextSectionBtn}
                    onClick={() => onNavigate('contact')} 
                >
                    <span className={styles.btnText}>{t.nextBtn}</span>
                    <span className={styles.arrow}>➔</span>
            </div>

            <div className={styles.left}>
                <div className={styles.imageContainer}>
                    <img 
                        className={styles.profilePic} 
                        src={profilePic} 
                        alt='Denis Rodriguez'
                    />
                    <span className={styles.imgLabel}>{t.imgLabel}</span>
                </div>
            </div>
            
            <div className={styles.right}>
                <div className={styles.header}>
                    <span className={styles.tag}>{t.tag}</span>
                    <h2 className={styles.title}>{t.title.line1} <br/> {t.title.line2} <span className={styles.hollow}>{t.title.highlight}</span></h2>
                </div>

                <div className={styles.textContent}>
                    <p>
                        {t.text.p1_start} <strong>{t.text.p1_bold}</strong>{t.text.p1_end}
                    </p>
                    <p>
                        {t.text.p2_end}
                    </p>

                    <p className={styles.smallText}>
                        {t.text.quote}
                    </p>
                </div>

                <div className={styles.stats}>
                    <div>
                        <span className={styles.statNumber}>01</span>
                        <span className={styles.statLabel}>{t.stats.years}</span>
                    </div>
                    <div>
                        <span className={styles.statNumber}>02</span>
                        <span className={styles.statLabel}>{t.stats.projects}</span>
                    </div>

                    <a 
                        href="/CV_Denis_Rodriguez_Frontend_Dev.pdf" 
                        download 
                        className={styles.cvButton}
                    >
                        <span className={styles.cvIcon}>↓</span>
                        {t.cvBtn}
                    </a>

                </div>
                
            </div>
        </section>
    );
}

export default AboutSection;