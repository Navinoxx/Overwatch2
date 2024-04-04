import { Box } from "@mui/material";
import { HeroCardSection } from "./heroCardSection";
import { SectionHeader } from "@/components/sectionHeader/sectionHeader";
import { Footer } from "@/components/footer/footer.jsx";
import { ImageMove } from "@/components/imageMove/imageMove";
import headerImage from "@/assets/backgroundimages/1600_Header_v2.webp";

export const Heroes = () => {
    return ( 
        <>
            <Box component="main">
                <SectionHeader picture={headerImage} name="Héroes" />
                <HeroCardSection />
                <ImageMove />
            </Box> 
            <Footer />
        </>  
    );
}
