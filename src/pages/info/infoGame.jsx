import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { SectionLineBorder } from "@/components/sectionLineBorder/sectionLineBorder";
import { InfoGameIcon } from "./infoGameIcon";
import AwardMobile from "@/assets/InfoGameImages/960_Award_Winning_Action.webp";
import AwardDesktop from "@/assets/InfoGameImages/1600_Award_Winning_Action.webp";
import CrossMobile from "@/assets/InfoGameImages/960_Cross_Play.webp";
import CrossDesktop from "@/assets/InfoGameImages/1600_Cross_Play.webp";
import F2PMobile from "@/assets/InfoGameImages/960_F2P.webp";
import F2PDesktop from "@/assets/InfoGameImages/1600_F2P.webp";
import HeroesMobile from "@/assets/InfoGameImages/960_Heroes.webp";
import HeroesDesktop from "@/assets/InfoGameImages/1600_Heroes.webp";
import StoryMobile from "@/assets/InfoGameImages/960_Story.webp";
import StoryDesktop from "@/assets/InfoGameImages/1600_Story.webp";
import ActionSVG from "@/assets/InfoGameImages/Action.svg";
import CrossSVG from "@/assets/InfoGameImages/Cross_Play.svg";
import F2PSVG from "@/assets/InfoGameImages/F2P.svg";
import HeroesSVG from "@/assets/InfoGameImages/Heroes.svg";
import StorySVG from "@/assets/InfoGameImages/Story_Mission.svg";
import TopSolidDivider from '@/assets/maskDividers/Top_Solid_Divider.svg';

const DATA = [
    {
        title: "Nuevos Héroes",
        text: "Siempre hay nuevos héroes increíbles que se unen a la alineación. Ya sea que te guste liderar el ataque, emboscar a los enemigos o ayudar a tus aliados, hay un nuevo héroe para ti.",
        src: ActionSVG,
        imageDesktop: AwardDesktop,
        imageMobile: AwardMobile,
    },
    {
        title: "Lidera batallas por todo el mundo",
        text: "Overwatch 2 incluye muchos mapas con diferentes ubicaciones alrededor del mundo. Ya sea que escoltes una carga, captures un punto crítico o muevas una barricada hacia el territorio enemigo, descubrirás que cada partida es única y emocionante.",
        src: CrossSVG,
        imageDesktop: CrossDesktop,
        imageMobile: CrossMobile,
    },
    {
        title: "Juego multiplataforma y progreso cruzado",
        text: "Juega en distintas plataformas y dispositivos. Además, accede a tus recompensas, progreso y logros en cualquier lugar y en cualquier momento.",
        src: StorySVG,
        imageDesktop: StoryDesktop,
        imageMobile: StoryMobile,
    }, 
    {
        title: "Misión de historia",
        text: "¡Lánzate a la intensa historia de Overwatch 2 y salva al mundo de la Invasión de Null Sector en nuevas Misiones de historia, las cuales podrás disfrutar a partir del 10 de agosto!",
        src: F2PSVG,
        imageDesktop: F2PDesktop,
        imageMobile: F2PMobile,
    },
    {
        title: "Gratis",
        text: "Overwatch 2 es un juego gratuito y en constante evolución. Forma equipo con tus amigos en cualquier plataforma y lánzate a una experiencia de JcJ.",
        src: HeroesSVG,
        imageDesktop: HeroesDesktop,
        imageMobile: HeroesMobile,
    },
];

export const InfoGame = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleButtonClick = (step) => {
        setActiveStep(step);
    };

    return (
        <SectionLineBorder Divider={TopSolidDivider} BgImageDesktop={DATA[activeStep].imageDesktop} BgImageMobile={DATA[activeStep].imageMobile} color="white">
            <Container maxWidth="xl" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, color: 'white' }}>
                <Box sx={{ display: 'inline-grid', gridAutoColumns: '2fr', paddingY: '5rem', textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography gutterBottom variant="h2" sx={{ textTransform: 'uppercase' }}>
                        Características del juego
                    </Typography>
                    <Typography gutterBottom variant="h5">
                        Con una gran variedad de mapas y formas de jugar, querrás reunir a tus amigos y descubrir todo lo que Overwatch 2 tiene preparado.
                    </Typography>
                    <Box sx={{ display: 'grid', gridAutoColumns: '1fr', gridAutoFlow: 'column', gap: { md: '1rem' }, marginY: '3rem' }}>
                        {DATA.map((data, index) => (
                            <InfoGameIcon key={index} data={data} index={index} handleButtonClick={handleButtonClick} activeStep={activeStep} />
                        ))}
                    </Box>
                    <Typography gutterBottom variant="h4" sx={{ textTransform: 'uppercase', paddingTop: { xs: '50rem', md: 0 }}}>
                        {DATA[activeStep].title}
                    </Typography>
                    <Typography gutterBottom component="p">
                        {DATA[activeStep].text}
                    </Typography>
                </Box>
            </Container>
        </SectionLineBorder>
    );
}