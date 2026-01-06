import { useState } from 'react'; 
import './App.css';
import BottomRight from './components/BottomRight';
import PageFrame from './components/PageFrame';
import Cursor from './components/Cursor';
import ThemeSelector from './components/ThemeSelector';
import { translations } from './translations';
import LanSelector from './components/LanSelector';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState('light');

  const [language, setLanguage] = useState('en');

  const t = translations[language];

  return (
    <div className="app-container" data-theme={theme}>
      <Cursor/>
      
      <ThemeSelector 
        currentTheme={theme}
        setTheme={setTheme}
        t={t}
      />

      <LanSelector
        currentLan={language}
        setLan={setLanguage}
      />
      
      <main>
        <PageFrame 
            activeSection={activeSection} 
            onNavigate={setActiveSection} 
            t={t}
        />
      </main>

      <button 
        className="index-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? t.index.close : t.index.index}
      </button>

      <BottomRight 
        activeSection={activeSection}
        onNavigate={setActiveSection} 
        isOpen={menuOpen} 
        t={t.nav}
      />
    </div>
  );
}

export default App;