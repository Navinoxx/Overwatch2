import { Box } from "@mui/material"
import { ModeCardSection } from "./modeCardSection";
import { SectionHeader } from "@/components/sectionHeader/sectionHeader";
import { Footer } from "@/components/footer/footer.jsx";
import { ImageMove } from "@/components/imageMove/imageMove";
import headerImage from "@/assets/backgroundimages/modes.avif";

export const GameModes = () => {

    return (
        <>
            <Box component="main">
                <SectionHeader picture={headerImage} name="Modos de Juego" />
                <ModeCardSection />
                <ImageMove />
            </Box> 
            <Footer />
        </>
    )
}