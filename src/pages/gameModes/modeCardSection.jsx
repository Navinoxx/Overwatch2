import { useState, useEffect } from "react";
import { getGameModes } from "@/data/APIgameModes";
import { Container, Grid, Skeleton } from "@mui/material";
import { SectionMaskBorder } from "@/components/sectionMaskBorder/sectionMaskBorder";
import { ModeCard } from "./modeCard";
import BackImageMobile from "@/assets/backgroundimages/cloud-900.webp";
import BackImageDesktop from "@/assets/backgroundimages/cloud-1600.webp";
import TopDivider from '@/assets/maskDividers/Top_Divider.svg';

export const ModeCardSection = () => {
    const [modes, setModes] = useState()
    
    useEffect(() => {
        getGameModes()
            .then(res => {
                setModes(res)
            })      
            .catch((error) => { 
                console.log(error)
            }) 

    }, []);

    return (
        <SectionMaskBorder Divider={TopDivider} BgImageDesktop={BackImageDesktop} BgImageMobile={BackImageMobile} >
            <Container maxWidth="xl" sx={{ paddingY: '5rem' }}>
                <Grid container spacing={3} >
                    {!modes ? (
                        Array.from({ length: 12 }).map((_, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index} sx={{ aspectRatio: '4/3'}} >
                                <Skeleton variant="rectangular" animation="wave" width="100%" height="100%" />
                            </Grid>
                        ))
                    ) : (
                        modes?.map(mode => (
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={mode.key}>
                                <ModeCard key={mode.key} mode={mode} />
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </SectionMaskBorder>
    )
}