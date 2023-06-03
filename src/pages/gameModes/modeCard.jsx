import { useState, useEffect } from 'react';
import { getGameModes } from '../../data/APIgamemodes';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Skeleton } from '@mui/material';

export function ModeCard() {
    const [modes, setModes] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {

        getGameModes()
        .then(res => {
            setModes(res)
            setLoading(false)
        })  
        .catch((error) => {
            console.log(error)
        }) 

    }, []);

    return (
        <Container maxWidth="xl" component="section" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem', gap: '1rem'  }}>
            {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} variant="rounded" width={345} height={290} animation="wave" />
            ))
            ) : (
            modes?.map(mode => (
                    <Card key={mode.key} sx={{ width: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={mode.screenshot}
                            alt={mode.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {mode.name}
                                    <img src={mode.icon} alt={mode.description} loading="lazy"/>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {mode.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))
            )}
        </Container>
    )
}