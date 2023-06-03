import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHeroesDetails } from '../../data/APIheroesDetails';
import { Box } from '@mui/material';
import HeroeDetailsHeader from './heroeDetailsHeader';
import HeroeDetailsAbilities from './heroeDetailsAbilities';
import HeroeDetailsStory from './heroeDetailsStory';
import './heroeDetails.css';

export default function HeroeDetails() {
    const [heroe, setHeroe] = useState();
    const { id } = useParams();

    useEffect(() => {
            getHeroesDetails(id)
                .then( res => {
                    setHeroe(res);
                });
        }, [id]);

    return (   
        <Box component="main">
            {heroe &&
                    <>
                        <HeroeDetailsHeader picture={heroe.story.chapters[0].picture} name={heroe?.name} />
                        <HeroeDetailsAbilities abilities={heroe.abilities} />
                        <HeroeDetailsStory portrait={heroe.portrait} hitpoints={heroe.hitpoints} description={heroe.description} story={heroe.story} location={heroe.location} />
                    </>}
        </Box> 
    )
}