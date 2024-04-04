import { useTheme, useMediaQuery, Typography } from "@mui/material"
import { ImageEffect } from "./imageEffect"
import { SectionMaskBorder } from "@/components/sectionMaskBorder/sectionMaskBorder"
import BackImageDesktop from "@/assets/backgroundimages/Desktop_Outro_Sky.jpg"
import BackImageMobile from "@/assets/backgroundimages/960_Outro.avif"
import TopDivider from "@/assets/maskDividers/Inverse_Top_Divider.svg"


export const ImageMove = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <SectionMaskBorder Divider={TopDivider} BgImageDesktop={BackImageDesktop} BgImageMobile={BackImageMobile}>
            {matches ? <ImageEffect /> : null}
            <Typography variant="h3" sx={{ position: 'relative', color: 'white', textShadow: '0 4px 10px rgba(0,0,0,.2)', textTransform: 'uppercase', textAlign: 'center', paddingTop: '30rem', width: { xs: '100%', md: '50%'}, margin: 'auto' }}>
                Merece la pena luchar por el futuro. ¡Únete a nosotros!
            </Typography>
        </SectionMaskBorder>
    )
};

