import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHeroesDetails } from "@/data/APIheroesDetails";
import { Box, Typography, Fade } from "@mui/material";
import { HeroDetailsAbilities } from "./heroDetailsAbilities";
import { HeroDetailsStory } from "./heroDetailsStory";
import { SectionHeader } from "@/components/sectionHeader/sectionHeader";
import { HeroDetailsCard } from "./heroDetailsCard";
import { Footer } from "@/components/footer/footer.jsx";
import { HeroRelatedHeroes } from "./heroRelatedHeroes";
import { ImageMove } from "@/components/imageMove/imageMove";
import { Error404 } from "../error/error404";
import logo from '@/assets/logos/Overwatch2_Primary_DKBKGD_compressed.svg';
import bgError from "@/assets/backgroundimages/bg-error.jpg";

export const HeroDetails = () => {
    const [hero, setHero] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        getHeroesDetails(id)
            .then( res => {
                setHero(res);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });

    }, [id]);

    if (error) return <Error404 />;

    if (loading) return (
        <Fade in={loading}>
            <Box component="main" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${bgError})`, backgroundSize: 'cover', backgroundPosition: 'center', gap: '2rem' }}>
                <Box component="img" src={logo} alt="logo" sx={{ width: 100, height: 100 }} />
                <Typography component="h6" sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }} >Cargando...</Typography>
            </Box>
        </Fade>
    );

    return (   
        <>
            <Box component="main" sx={{ minHeight: '100vh' }}>
                <Fade in={!loading}>
                    <Box>
                        {hero &&
                            <>
                                <HeroDetailsCard description={hero.description} location={hero.location} name={hero.name} />
                                <SectionHeader picture={hero.story.chapters[0].picture} name="" />
                                <HeroDetailsAbilities abilities={hero.abilities} />
                                <HeroDetailsStory portrait={hero.portrait} hitpoints={hero.hitpoints} description={hero.description} story={hero.story} location={hero.location} />
                            </>
                        }
                        <HeroRelatedHeroes rol={hero?.role} name={hero?.name} />
                        <ImageMove />
                    </Box>
                </Fade>
            </Box> 
            <Footer />
        </>
    )   
}