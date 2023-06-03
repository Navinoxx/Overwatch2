import { useEffect, useState } from 'react';
import { getHeroes } from '../../../src/data/APIheroes';
import { Link } from 'react-router-dom';
import { Skeleton, Card, CardContent, CardMedia, Typography, Container, Box, CardActionArea } from '@mui/material';
import HeroesFilter from './heroesFilter';
import tankIcon from '../../assets/roles/tankBlack.svg';
import damageIcon from '../../assets/roles/damageBlack.svg';
import supportIcon from '../../assets/roles/supportBlack.svg';

export function HeroeCard() {
    const [heroes, setHeroes] = useState()
    const [filteredHeroes, setFilteredHeroes] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        getHeroes()
        .then((res) => {
            setHeroes(res)
            setFilteredHeroes(res)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        });

    }, [])

    const handleFilteredHeroes = (role) => {
        if (role === 'all') {
        setFilteredHeroes(heroes)
        } else {
        const filtered = heroes.filter((hero) => hero.role === role)
        setFilteredHeroes(filtered)
        }
    };

    return (
        <Container maxWidth="xl" component="section">
        <HeroesFilter handleFilteredHeroes={handleFilteredHeroes} />
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', pt: '4rem', gap: '2rem' }}>
            {loading ? (
            Array.from({ length: 10 }).map((_, index) => (
                <Skeleton key={index} variant="rounded" width={256} height={330} animation="wave" />
            ))
            ) : (
            filteredHeroes?.map((hero) => (
                <Link className="hero-card" to={`/heroes/${hero.key}`} key={hero.key}>
                <Card elevation={5}>
                    <CardActionArea>
                    <CardMedia component="img" image={hero.portrait} alt={hero.key} />
                    <CardContent sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        {hero.role === 'tank' && <img src={tankIcon} alt={hero.key} loading="lazy" />}
                        {hero.role === 'damage' && <img src={damageIcon} alt={hero.key} loading="lazy" />}
                        {hero.role === 'support' && <img src={supportIcon} alt={hero.key} loading="lazy" />}
                        <Typography gutterBottom variant="h5" component="h5" sx={{ display: 'flex', my: 'auto', gap: '1rem' }}>
                        {hero.name}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                </Link>
            ))
            )}
        </Box>
        </Container>
    )
}
