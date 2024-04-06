import { useEffect, useState } from "react";
import { ButtonHeroes } from "@/components/buttonHeroes/buttonHeroes";
import { Box, Typography, Container, Grid } from "@mui/material";
import { SectionMaskBorder } from "@/components/sectionMaskBorder/sectionMaskBorder";
import { InfoRolesIcon } from "./infoRolesIcon";
import { InfoRolesImage } from "./infoRolesImage";
import getHeroesRoles from "@/data/APIroles";
import BackImageMobile from "@/assets/backgroundimages/960_Heroes.webp";
import BackImageDesktop from "@/assets/backgroundimages/1600_Heroes.webp";
import InverseTopDivider from '@/assets/maskDividers/Inverse_Top_Divider.svg';

export const InfoRoles = () => {
    const [rol, setRol] = useState([]);
    const [activeStep, setActiveStep] = useState(0);

    const handleButtonClick = (step) => {
        setActiveStep(step);
    };

    useEffect(() => {
        getHeroesRoles().then(res => setRol(res));
    }, []);

    const selectedRole = rol[activeStep];

    return (
        <SectionMaskBorder Divider={InverseTopDivider} BgImageDesktop={BackImageDesktop} BgImageMobile={BackImageMobile}>
            <InfoRolesImage activeStep={activeStep} />
            <Container maxWidth="xl" sx={{ display: 'grid', paddingY: '5rem', height: { xs: 'auto', md: '100vh'}, color: 'white' }}>
                <Grid container spacing={2}>
                    <Grid item xs={8} sx={{ textAlign: 'center', marginX: 'auto' }}>
                        <Typography gutterBottom variant="h3" sx={{ textTransform: 'uppercase' }}>
                            Elige a tu héroe
                        </Typography>
                        <Typography gutterBottom variant="h5">
                            En Overwatch 2, debes trabajar en equipo para completar los objetivos de la misión en cada partida. ¡Alcanza la victoria con las destrezas y habilidades de tu héroe!
                        </Typography>
                    </Grid>
                    <Grid item xs={8} md={6} sx={{ position: 'relative', marginX: 'auto', zIndex: { md: -1 }}}>
                        
                    </Grid>
                    <Grid item xs={8} md={6} sx={{ paddingLeft: '2rem', float: 'right', marginX: 'auto', height: { xs: 'auto', md: '50vh'} }}>
                        <Typography variant="h3" sx={{ paddingBottom: '2rem', textTransform: 'uppercase', textAlign: 'left' }}>
                            Roles
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '2rem' }}>
                            {rol.map((role, index) => (
                                <InfoRolesIcon key={index} role={role} index={index} handleButtonClick={handleButtonClick} activeStep={activeStep} />
                            ))}
                        </Box>
                        <Typography variant="h4" sx={{ paddingY: '2rem', textTransform: 'uppercase', textAlign: 'left' }}>
                            {selectedRole?.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" sx={{ paddingBottom: '2rem', textAlign: 'left' }}>
                            {selectedRole?.description}
                        </Typography>
                        <ButtonHeroes text="Ver todos los héroes" to="/heroes"/>
                    </Grid>
                </Grid>
            </Container>
        </SectionMaskBorder>
    );
}
