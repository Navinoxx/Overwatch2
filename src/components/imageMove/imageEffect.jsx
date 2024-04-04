import { useState, useEffect, useRef, useCallback } from "react"
import { Box } from "@mui/material"
import Lucio from "@/assets/characters/Lucio.avif"
import Mercy from "@/assets/characters/Edited_Mercy.avif"
import Reinhardt from "@/assets/characters/Reinhardt.avif"
import Tracer from "@/assets/characters/Tracer.avif"
import Mei from "@/assets/characters/Mei_Without_Ice_Blast.avif"
import styles from "./imageMove.module.css"

const CHARACTERS = [
    {
        name: "Lucio",
        src: Lucio,
        maxTranslate: 4,
    },
    {
        name: "Mercy",
        src: Mercy,
        maxTranslate: 4,
    },
    {
        name: "Reinhardt",
        src: Reinhardt,
        maxTranslate: 8,
    },
    {
        name: "Tracer",
        src: Tracer,
        maxTranslate: 12,
    },
    {
        name: "Mei",
        src: Mei,
        maxTranslate: 12,
    }
]

export const ImageEffect = () => {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
    const divRef = useRef();

    const handleMouseMove = useCallback((event) => {
        const rect = divRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        setCoordinates({ x, y });
    }, []);

    useEffect(() => {
        const divRefCurrent = divRef.current;
        if (divRefCurrent) {
            const handleMouseLeave = () => setCoordinates({ x: 0, y: 0 });
            const mouseMoveEvent = 'mousemove';
            const mouseLeaveEvent = 'mouseleave';

            divRefCurrent.addEventListener(mouseMoveEvent, handleMouseMove);
            divRefCurrent.addEventListener(mouseLeaveEvent, handleMouseLeave);

            return () => {
                divRefCurrent.removeEventListener(mouseMoveEvent, handleMouseMove);
                divRefCurrent.removeEventListener(mouseLeaveEvent, handleMouseLeave);
            };
        }
    }, [handleMouseMove]);

    return (
        <Box ref={divRef} sx={{ width: '100%', height: '100%', position: 'absolute', overflow: 'hidden' }}>
            {CHARACTERS.map((character) => (
                <img
                    key={character.name}
                    src={character.src}
                    className={styles.img_character}
                    alt={character.name}  
                    loading="lazy"
                    style={{
                        transition: 'transform 0.2s ease',
                        transform: `translate3d(${coordinates.x * character.maxTranslate / 400}px, ${coordinates.y * character.maxTranslate / 400}px, 0)`,
                    }}
                />
            ))}
        </Box>
    );
};

