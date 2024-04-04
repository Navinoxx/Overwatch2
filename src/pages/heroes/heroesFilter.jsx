import { useState } from 'react';
import { Box, useTheme, useMediaQuery, Tabs, Tab, Typography } from '@mui/material';
import tankIcon from '@/assets/roles/tankBlack.svg';
import damageIcon from '@/assets/roles/damageBlack.svg';
import supportIcon from '@/assets/roles/supportBlack.svg';
import styles from './heroes.module.css';
import PropTypes from 'prop-types';

const buttons = [
    {
        value: 0,
        role: "all",
        label: "Todos",
        icon: null,
        text: "Overwatch cuenta con un reparto internacional de poderosos héroes con personalidades y trasfondos cautivadores. Explora la lista completa a continuación.",
    },
    {
        value: 1,
        role: "tank",
        label: "Tanke",
        icon: tankIcon,
        text: "Los tanques absorben el daño y asaltan posiciones fortificadas, como grupos de enemigos o cuellos de botella. Si juegas como tanque, tú lideras la carga.",
    },
    {
        value: 2,
        role: "damage",
        label: "Daño",
        icon: damageIcon,
        text: "Los héroes de daño buscan, se enfrentan y destruyen al enemigo con diferentes tipos de herramientas, habilidades y estilos de juego. Son temibles, pero frágiles, por lo que necesitan refuerzos para sobrevivir.",
    },
    {
        value: 3,
        role: "support",
        label: "Apoyo",
        icon: supportIcon,
        text: "Los héroes de apoyo potencian a los aliados sanándolos, escudándolos, incrementando su daño o deshabilitando a los enemigos. Como apoyo, eres la columna vertebral de la supervivencia del equipo.",
    },
];

export const HeroesFilter = ({ handleFilteredHeroes }) => {
    const [tabIndex, setTabIndex] = useState(0);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
        handleFilteredHeroes(buttons[newValue].role);
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingY: '5rem', gap: '2rem' }}>
                <Tabs 
                    value={tabIndex}
                    onChange={handleChange}
                    indicatorColor='inherit'
                    textColor='white'
                    >
                    {buttons.map(({ label, icon, value }) => (    
                        <Tab
                            key={value}
                            value={value}
                            icon={icon && matches && <img className={styles.img_filter} src={icon} alt={label} loading="lazy" />}
                            label={label}
                            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginX: '0.5rem', paddingY: 0, gap: '0.5rem', border: '2px solid #fff', backgroundColor: tabIndex === value ? 'white' : 'hsla(0, 0%, 100%, .7)', '&:hover': { backgroundColor: 'white' }, fontSize: '1rem', borderRadius: '0.2rem' }}  
                        />
                    ))}
                </Tabs>
            </Box>
            <Typography component="p" sx={{ textAlign: 'center', color: 'white', width: {md: '60%', xs: '100%'}, margin: '0 auto'  }}>
                {buttons[tabIndex].text}
            </Typography>
        </>
    );
}

HeroesFilter.propTypes = {
    handleFilteredHeroes: PropTypes.func.isRequired,
};
