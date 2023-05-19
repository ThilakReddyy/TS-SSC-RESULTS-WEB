import { useState, useEffect } from 'react';

const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            console.log(e.clientX)
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className=" fixed z-50 w-20 h-20 rounded-full bg-blue-500 top-[60px] left-[60px] shadow-2xl animate-colors "
            style={{ top: `${cursorPosition.y}px`, left: `${cursorPosition.x}px` }}
        ></div>
    );
};

export default Cursor;
