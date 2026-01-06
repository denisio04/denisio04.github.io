import styles from './LanSelector.module.css'

function LanSelector( {currentLan, setLan} ) {
    return (
        <div className={styles.container}>
        
                    <div className={styles.box}>
                        <input 
                        type='checkbox'
                        id='en' 
                        checked={currentLan === 'en'}
                        onChange={() => setLan('en')} 
                        className={styles.inputBox}
                        />
                        <label htmlFor='en'>EN</label>
                    </div>
        
                    <div className={styles.box}>
                        <input 
                        type='checkbox'
                        id='es' 
                        checked={currentLan === 'es'}
                        onChange={() => setLan('es')} 
                        className={styles.inputBox}
                        />
                        <label htmlFor='es'>ES</label>
                    </div>
        
                </div>
    );
}

export default LanSelector