import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHeroesDetails } from "@/data/APIheroesDetails";
import { Box } from "@mui/material";
import { HeroDetailsAbilities } from "./heroDetailsAbilities";
import { HeroDetailsStory } from "./heroDetailsStory";
import { SectionHeader } from "@/components/sectionHeader/sectionHeader";
import { HeroDetailsCard } from "./heroDetailsCard";
import { Footer } from "@/components/footer/footer.jsx";
import { HeroRelatedHeroes } from "./heroRelatedHeroes";
import { ImageMove } from "@/components/imageMove/imageMove";

export const HeroDetails = () => {
    const [hero, setHero] = useState();
    const { id } = useParams();

    useEffect(() => {
        getHeroesDetails(id)
            .then( res => {
                setHero(res);
            });

    }, [id]);

    return (   
        <>
            <Box component="main" sx={{ minHeight: '100vh' }}>
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
            <Footer />
        </>
    )
}