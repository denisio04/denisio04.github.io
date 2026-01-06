import styles from './ContactSection.module.css';

function ContactSection({ onNavigate, t }) {
    
    const email = "denis04.dev@gmail.com";
    const subject = "Project Inquiry";
    const body = "Hi, I saw your portfolio and I would like to talk about...";
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <section id={styles.contact}>
            
            <div 
                className={styles.nextSectionBtn}
                onClick={() => onNavigate('home')} 
            >
                <span className={styles.btnText}>{t.nextBtn}</span>
                <span className={styles.arrow}>➔</span>
            </div>

            <div className={styles.header}>
                <span className={styles.tag}>{t.tag}</span>
                <h2 className={styles.title}>
                    {t.title_line1} <br />
                    <span className={styles.hollow}>{t.title_highlight}</span>
                </h2>
            </div>

            <div className={styles.mainAction}>
                <p className={styles.actionText}>{t.actionText}</p>
                
                <a 
                    href={mailtoLink}
                    className={styles.emailBox} 
                    title="Send email"
                >
                    <span className={styles.emailText}>{email}</span>
                    <span className={styles.copyLabel}>
                        {t.sendLabel}
                    </span>
                </a>
            </div>

            <div className={styles.infoGrid}>
                <div className={styles.infoCol}>
                    <span className={styles.colTitle}>{t.headers.socials}</span>
                    <a href="https://github.com/denisio04" className={styles.link}>GitHub ↗</a>
                    <a href="https://x.com/_denis_dev_" className={styles.link}>Twitter ↗</a>
                </div>

                <div className={styles.infoCol}>
                    <span className={styles.colTitle}>{t.headers.location}</span>
                    <p className={styles.text}>{t.location.city}</p>
                    <p className={styles.text}>{t.location.time}</p>
                </div>

                <div className={styles.infoCol}>
                    <span className={styles.colTitle}>{t.headers.status}</span>
                    <div className={styles.statusBox}>
                        <span className={styles.dot}></span>
                        <span>{t.status}</span>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default ContactSection;