/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Skeleton } from '@mui/material';
import getMaps from '../../data/APImaps';
import TransitionsModal from '../../components/modal/modal';

export default function MapCard() {
    const [mapas, setMapas] = useState([])
    const [loading, setLoading] = useState(true)
    const [openModal, setOpenModal] = useState(false)
    const [selectedMapa, setSelectedMapa] = useState(null)

    useEffect(() => {
        getMaps()
            .then(res => {
                setMapas(res)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleOpen = (mapa) => {
        setSelectedMapa(mapa)
        setOpenModal(true)
    }
    
    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        <Container maxWidth="xl" component="section" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem', gap: '1rem'  }}>
            {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} variant="rounded" width={345} height={230} animation="wave" />
            ))
            ) : (
            mapas?.map(mapa => (
                    <Card key={mapa.name} sx={{ width: 345 }}>
                        <CardActionArea onClick={() => handleOpen(mapa)}>
                            <CardMedia
                            component="img"
                            height="140"
                            image={mapa.screenshot}
                            alt={mapa.name}
                            loading="lazy"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {mapa.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {mapa.location}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <TransitionsModal image={selectedMapa?.screenshot} open={openModal} location={selectedMapa?.location} name={selectedMapa?.name} handleClose={handleClose} />
                    </Card>
                ))
            )}
        </Container>
    );
}