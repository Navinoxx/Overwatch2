import { useEffect, useState } from "react";
import { SectionLineBorder } from "@/components/sectionLineBorder/sectionLineBorder";
import { HeroCardMemo } from "../heroes/heroCard";
import { Container, Grid, Typography } from "@mui/material";
import { ButtonHeroes } from "@/components/buttonHeroes/buttonHeroes";
import { getHeroes } from "@/data/APIheroes";
import TopSolidDivider from '@/assets/maskDividers/Top_Solid_Divider.svg';
import BgImageDesktop from '@/assets/backgroundimages/1600_Related_Heroes.webp';
import BgImageMobile from '@/assets/backgroundimages/960_Related_Heroes.webp';
import PropTypes from 'prop-types';

export const HeroRelatedHeroes = ({ rol, name }) => {
    const [heroes, setHeroes] = useState([])
    const [filteredHeroes, setFilteredHeroes] = useState([])

    useEffect(() => {
        getHeroes()
            .then(res => {
                setHeroes(res)
            })
            .catch(err => {
                console.log(err)
            })
            
    }, []);

    useEffect(() => {
        setFilteredHeroes(heroes
            .filter(hero => rol === 'all' ? true : hero.role === rol)
            .filter(hero => hero.name !== name))
    }, [heroes, rol, name]);

    const otherHeroesText =
        rol === 'tank' ? 'Tanque' :
        rol === 'damage' ? 'Daño' :
        'Apoyo';

    return (
        <SectionLineBorder Divider={TopSolidDivider} BgImageDesktop={BgImageDesktop} BgImageMobile={BgImageMobile} color="#80b1ef">
            <Container maxWidth="xl" sx={{ paddingY: '5rem',display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                <Typography component="h3" variant="h3" sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.7)', textTransform: 'uppercase', textAlign: 'center'}}>
                    Otros héroes: {otherHeroesText}
                </Typography>
                <Grid container spacing={3} sx={{ paddingY: '5rem' }}>
                    {filteredHeroes.slice(0, 6).map((hero) => (
                        <Grid item xs={6} sm={4} md={3} lg={2} key={hero.key} sx={{ ':hover': { transform: 'scale(1.1)', transitionDuration: '400ms' }, transitionDuration: '400ms' }}>
                            <HeroCardMemo hero={hero} />
                        </Grid>
                    ))}
                </Grid>
                <ButtonHeroes text="Ver todos los héroes" to="/heroes"/>
            </Container>
        </SectionLineBorder>
    )
}

HeroRelatedHeroes.propTypes = {
    rol: PropTypes.string,
    name: PropTypes.string
}