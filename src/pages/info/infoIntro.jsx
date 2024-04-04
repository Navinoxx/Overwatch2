import { SectionMaskBorder } from "@/components/sectionMaskBorder/sectionMaskBorder";
import { Box, Container, Typography } from "@mui/material";
import BackImageMobile from "@/assets/backgroundimages/960_Silver_Background.webp";
import BackImageDesktop from "@/assets/backgroundimages/1600_Silver_Background.webp";
import TopDivider from '@/assets/maskDividers/Top_Divider.svg';
import styles from "./info.module.css";

export const InfoIntro = () => {
    
    return (
        <SectionMaskBorder Divider={TopDivider} BgImageDesktop={BackImageDesktop} BgImageMobile={BackImageMobile}>
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row'}, gap: '2rem', paddingY: '5rem', textAlign: { xs: 'center', md: 'left'}, color: '#1d253a' }}>
                <Box sx={{ maxWidth: { xs: '100%', md: '40%'} }}>
                    <Typography gutterBottom component="h4" variant="h2" sx={{ textTransform: 'uppercase' }}>
                        Juego de acción de disparos basado en héroes aclamados por la crítica
                    </Typography>
                    <Typography component="p" variant="h6">Overwatch 2 es un juego gratuito de acción en equipos que está ambientado en un futuro optimista, donde en cada partida se viven intensas batallas de 5 vs 5. Juega como una defensora de la libertad que salta en el tiempo, un DJ que lleva su música al campo de batalla u otro de los más de 30 héroes únicos mientras luchas por distintos lugares del planeta.</Typography>
                </Box>
                <iframe className={styles.iframe} title="Trailer de Lanzamiento de Overwatch 2" src="https://www.youtube-nocookie.com/embed/nzIykzkCZAo?controls=1&amp;autoplay=0&amp;mute=0&amp;loop=0&amp;playsinline=0&amp;modestbranding=1&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Foverwatch.blizzard.com&amp;widgetid=1"></iframe>
            </Container>
        </SectionMaskBorder>
    )
}