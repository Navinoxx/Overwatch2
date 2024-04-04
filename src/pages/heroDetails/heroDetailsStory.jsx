import { Box, Container, Typography } from "@mui/material";
import { CustomizedAccordions } from "@/components/accordion/accordion";
import { HeroDetailsMedia } from "./heroDetailsMedia";
import { SectionMaskBorder } from "@/components/sectionMaskBorder/sectionMaskBorder";
import BackImageMobile from "@/assets/backgroundimages/cloud-900.webp";
import BackImageDesktop from "@/assets/backgroundimages/cloud-1600.webp";
import TopDivider from "@/assets/maskDividers/Inverse_Top_Divider.svg";
import PropTypes from "prop-types";

export const HeroDetailsStory = ({ story }) => {
    const { type, link } = story.media || {};

    return (
        <SectionMaskBorder Divider={TopDivider} BgImageDesktop={BackImageDesktop} BgImageMobile={BackImageMobile}>
            <Container maxWidth="xl" sx={{ paddingY: '5rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '3rem', color: 'white', width: { xs: '100%', lg: '90%', xl: '70%'}, marginX: 'auto' }}>
                    <Typography component="h3" variant="h3" sx={{ textShadow: '0 4px 10px rgba(0,0,0,.2)', textTransform: 'uppercase' }}>
                        Historia de origen
                    </Typography>
                    <Typography component="p" variant="h5">
                        {story?.summary}
                    </Typography>
                    <HeroDetailsMedia type={type} link={link} />
                </Box>
                <CustomizedAccordions story={story.chapters} />
            </Container>
        </SectionMaskBorder>
    )
}

HeroDetailsStory.propTypes = {
    story: PropTypes.object
}