import styles from './ThemeSelector.module.css'

function ThemeSelector ( {currentTheme, setTheme, t} ) {
    return (
        <div className={styles.container}>

            <div className={styles.box}>
                <input 
                type='checkbox'
                id='light' 
                checked={currentTheme === 'light'}
                onChange={() => setTheme('light')} 
                className={styles.inputBox}
                />
                <label htmlFor='light'>{t.theme.light}</label>
            </div>

            <div className={styles.box}>
                <input 
                type='checkbox'
                id='dark' 
                checked={currentTheme === 'dark'}
                onChange={() => setTheme('dark')} 
                className={styles.inputBox}
                />
                <label htmlFor='dark'>{t.theme.dark}</label>
            </div>

        </div>
    );
}

export default ThemeSelector