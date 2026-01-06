import { useEffect, useState } from 'react';
import styles from './Cursor.module.css';

function Cursor({ forceHover }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target;
            
            const isClickable = 
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button');

            setIsPointer(isClickable);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const active = isPointer || forceHover;

    return (
        <div 
            
            className={`${styles.cursor} ${active ? styles.pointer : ''}`}
            style={{ 
                left: `${position.x}px`, 
                top: `${position.y}px` 
            }}
        />
    );
}

export default Cursor;