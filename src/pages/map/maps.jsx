import { Box } from "@mui/material";
import { MapCardSection } from "./mapsCardSection";
import { SectionHeader } from "@/components/sectionHeader/sectionHeader";
import { Footer } from "@/components/footer/footer.jsx";
import { ImageMove } from "@/components/imageMove/imageMove";
import headerImageMaps from "@/assets/backgroundimages/map.avif";

export const Maps = () => {
    
    return (  
        <>
            <Box component="main">
                <SectionHeader picture={headerImageMaps} name="Mapas" />
                <MapCardSection />
                <ImageMove />
            </Box>
            <Footer />
        </>  
    )
}