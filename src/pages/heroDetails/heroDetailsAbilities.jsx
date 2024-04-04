import { useCallback, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { SectionMaskBorder } from "@/components/sectionMaskBorder/sectionMaskBorder";
import TopDivider from "@/assets/maskDividers/Top_Divider.svg";
import PropTypes from "prop-types";
import styles from "./heroDetails.module.css";

export const HeroDetailsAbilities = ({ abilities }) => {
    const [abilitieIndex, setAbilitieIndex] = useState(0);

    const handleAbilities = useCallback((index) => setAbilitieIndex(index), []);

    return (
        <SectionMaskBorder Divider={TopDivider}>
            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                {abilities.map((abilitie, index) => (
                    <video
                        key={abilitie.name}
                        className={styles.background_video}
                        style={{ display: abilitieIndex === index ? 'block' : 'none' }}
                        src={abilitie.video.link.webm}
                        type="video/webm"
                        muted
                        autoPlay
                        loop
                    ></video>
                ))}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(0, 0, 0, 0.3)', height: '90vh'}}>
                <h5 className={styles.abilitie_title}>Habilidades</h5>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    {abilities.map((abilitie, index) => (
                        <Box 
                            key={abilitie.name} 
                            sx={{ color: abilitieIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)', width: '10rem',  cursor: 'pointer', ":hover": { color: 'white', '& > .MuiIconButton-root': { backgroundColor: 'rgba(255, 255, 255, 0.3)' }}}} 
                            onClick={() => handleAbilities(index)}
                        >
                            <IconButton
                                sx={{
                                width: { xs: '4rem', md: '5rem' },
                                height: { xs: '4rem', md: '5rem' },
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
                                className={styles.abilitie_icon}
                                src={abilitie.icon}
                                alt={abilitie.name}
                                loading="lazy"
                                />
                            </IconButton>
                            <Typography component="p" sx={{ textAlign: 'center', marginTop: '1rem', marginBottom: '20rem', display: { xs: 'none', md: 'block'}}}>{abilitie.name}</Typography>
                        </Box>
                    ))}
                </Box>
                <Typography component="p" variant="h5" sx={{ textAlign: 'center', color: 'white', marginTop: '20rem', display: { xs: 'block', md: 'none'}}}>{abilities[abilitieIndex].name}</Typography>
                <p className={styles.abilitie_description}>{abilities[abilitieIndex].description}</p>
            </Box>
        </SectionMaskBorder>
    );
}

HeroDetailsAbilities.propTypes = {
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
