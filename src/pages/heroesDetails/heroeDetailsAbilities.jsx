import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import PropTypes from 'prop-types';

export default function HeroeDetailsAbilities({ abilities }) {
    const [abilitieIndex, setAbilitieIndex] = useState(0);

    const handleAbilities = (index) => {
        if (abilitieIndex !== index) {
            setAbilitieIndex(index);
        }
    };

    return (
        <Box
            component="section"
            sx={{
            width: '99.2vw',
            height: '60vh',
            position: 'relative',
            overflow: 'hidden',
            }}
        >
            <video
            className="background-video"
            src={abilities[abilitieIndex].video.link.webm}
            type="video/webm"
            muted={true}
            autoPlay={true}
            loop={true}
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                minWidth: '100%',
                minHeight: '100%',
                width: 'auto',
                height: 'auto',
            }}
            ></video>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <h5 className="title-abilities">Habilidades</h5>
                <Box sx={{display: 'flex',flexDirection: 'row'}}>
                    {abilities.map((abilitie, index) => (
                        <Box
                        key={abilitie.name}
                        sx={{
                            display: 'block',
                            flexGrow: '1',
                            margin: '0 2rem',
                        }}
                        >
                        <IconButton
                            onClick={() => handleAbilities(index)}
                            sx={{
                            width: '5rem',
                            height: '5rem',
                            border: '0.1rem solid white',
                            display: 'flex',
                            margin: '0 auto',
                            backgroundColor:
                                abilitieIndex === index
                                ? 'rgba(255, 255, 255, 0.3)'
                                : 'transparent',
                            }}
                        >
                            <img
                            className="abilitie-icon"
                            src={abilitie.icon}
                            alt={abilitie.name}
                            loading="lazy"
                            />
                        </IconButton>
                        <h3 className="abilitie-name">{abilitie.name}</h3>
                        </Box>
                    ))}
                </Box>
            <p className="abilitie-description">{abilities[abilitieIndex].description}</p>
            </Box>
        </Box>
    );
}

HeroeDetailsAbilities.propTypes = {
    abilities: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            video: PropTypes.shape({
                link: PropTypes.shape({
                    webm: PropTypes.string.isRequired,
                }),
            }),
        })
    ),
};
