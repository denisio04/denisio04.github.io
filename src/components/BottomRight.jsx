import styles from './BottomRight.module.css';

function BottomRight({ onNavigate, isOpen, activeSection, t }) {

    const navItems = [
        { id : 'home', label : t.home, activeLabel : '●' },
        { id : 'projects', label: t.projects, activeLabel : '●' },
        { id : 'about', label : t.about, activeLabel : '●' },
        { id : 'contact', label: t.contact, activeLabel : '●' },
    ];

    const handleClick = (e, sectionName) => {
        e.preventDefault();
        onNavigate(sectionName);
    };

    return (
            <nav className={`${styles.navBar} ${isOpen ? styles.visible : ''}`}>

                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={'#' + item.id}
                        onClick={(e) => handleClick(e, item.id)}
                        className={styles.navItem}
                        style={{color: activeSection === item.id ? 'blueviolet' : 'inherit'}}
                    >
                    {activeSection === item.id ? item.activeLabel : item.label}
                    </a>
                    )
                )}
            </nav>
    );
}

export default BottomRight;