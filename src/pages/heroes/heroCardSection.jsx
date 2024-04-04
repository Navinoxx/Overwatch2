import { useEffect, useState, useCallback } from "react";
import { getHeroes } from "@/data/APIheroes";
import { Container, Grid, Skeleton } from "@mui/material";
import { SectionMaskBorder } from "@/components/sectionMaskBorder/sectionMaskBorder";
import { HeroesFilter } from "./heroesFilter";
import { HeroCardMemo } from "./heroCard";
import BackImageMobile from "@/assets/backgroundimages/cloud-900.webp";
import BackImageDesktop from "@/assets/backgroundimages/cloud-1600.webp";
import TopDivider from "@/assets/maskDividers/Top_Divider.svg";

export const HeroCardSection = () => {
    const [heroes, setHeroes] = useState([])
    const [filteredHeroes, setFilteredHeroes] = useState([])

    useEffect(() => {
        getHeroes()
            .then(res => {
                setHeroes(res)
                setFilteredHeroes(res)
            })
            .catch(err => {
                console.log(err)
            })
            
    }, []);

    const handleFilteredHeroes = useCallback((role) => {
        const filtered = role === 'all' ? heroes : heroes.filter(hero => hero.role === role);
        setFilteredHeroes(filtered);
    }, [heroes]);

    return (
        <SectionMaskBorder Divider={TopDivider} BgImageDesktop={BackImageDesktop} BgImageMobile={BackImageMobile}>
            <Container maxWidth="xl">
                <HeroesFilter handleFilteredHeroes={handleFilteredHeroes} />    
                <Grid container spacing={3} sx={{ paddingY: '5rem' }}>
                    {filteredHeroes.length === 0 ? (
                        Array.from({ length: 20 }).map((_, index) => (
                            <Grid item xs={6} sm={4} md={3} lg={2} key={index} sx={{ aspectRatio: '3/3.8'}}>
                                <Skeleton variant="rectangular" animation="wave" width="100%" height="100%" />
                            </Grid>
                        ))
                    ) : (
                        filteredHeroes.map((hero) => (
                            <Grid item xs={6} sm={4} md={3} lg={2} key={hero.key} sx={{ ':hover': { transform: 'scale(1.1)', transitionDuration: '400ms' }, transitionDuration: '400ms' }}>
                                <HeroCardMemo hero={hero} />
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </SectionMaskBorder>
    )
}
