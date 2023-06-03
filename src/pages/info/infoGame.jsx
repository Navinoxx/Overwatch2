import { Box, Container, Typography } from "@mui/material";
import InfoRoles from './infoRoles.jsx';
import './info.css';

export default function infoGame() {
    
    return (
        <Box className="background-info">
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem', paddingY: '3rem' }}>
                <Typography component="h4" variant="h4">COMIENZA UNA NUEVA ERA</Typography>
                <Typography component="p" variant="h6">Overwatch 2 es un juego gratuito de acción en equipos que está ambientado en un futuro optimista, donde en cada partida se viven intensas batallas de 5 vs. 5. Juega como una defensora de la libertad que salta en el tiempo, un DJ que lleva su música al campo de batalla u otro de los más de 30 héroes únicos mientras luchas por distintos lugares del planeta.</Typography>
                <iframe id="player" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Trailer de Lanzamiento de Overwatch 2" width="640" height="360" src="https://www.youtube-nocookie.com/embed/nzIykzkCZAo?controls=1&amp;autoplay=0&amp;mute=0&amp;loop=0&amp;playsinline=0&amp;modestbranding=1&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Foverwatch.blizzard.com&amp;widgetid=1"></iframe>
                <InfoRoles />
            </Container>
        </Box>
    )
}