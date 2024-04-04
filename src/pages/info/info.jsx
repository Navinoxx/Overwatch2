import { Box, Typography } from "@mui/material";
import { InfoIntro } from "./infoIntro.jsx";
import { InfoRoles } from "./infoRoles.jsx";
import { InfoGame } from "./infoGame.jsx";
import { SectionHeader } from "@/components/sectionHeader/sectionHeader.jsx";
import { SectionMaskBorder } from "@/components/sectionMaskBorder/sectionMaskBorder.jsx";
import { Footer } from "@/components/footer/footer.jsx";
import headerImage from "@/assets/backgroundimages/info.avif";
import TopDivider from '@/assets/maskDividers/Inverse_Top_Divider.svg';
import BgImageDesktop from '@/assets/backgroundimages/Outro_Desktop.webp';
import BgImageMobile from '@/assets/backgroundimages/Outro_Mobile.webp';

export const Info = () => {
    
    return (
        <>
            <Box component="main" >
                <SectionHeader picture={headerImage} name="Información del juego" />
                <InfoIntro />
                <InfoRoles />
                <InfoGame />
                <SectionMaskBorder Divider={TopDivider} BgImageDesktop={BgImageDesktop} BgImageMobile={BgImageMobile}>
                    <Typography variant="h3" sx={{ color: 'white', textTransform: 'uppercase', textAlign: 'center', paddingTop: '30rem' }}>
                        Forma equipo y <br/> únete a la lucha
                    </Typography>
                </SectionMaskBorder>
            </Box> 
            <Footer />
        </>   
    );
}