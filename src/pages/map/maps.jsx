import MapCard from "./mapsCard";
import { Box } from "@mui/material";
import headerImageMaps from '../../assets/backgroundimages/montecarlo.jpg';

function Maps() {
    
    return (    
        <Box component="main">
            <Box sx={{ zIndex: -1, position: 'absolute', width: '100%', top: 0 }}>
                <img className="img-header" src={headerImageMaps} alt="imagen de fondo header mapas" loading="lazy" />
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'end', width: '100%',  position: 'relative',  zIndex: 1, color: 'white' }}>
                <h2 className="title">Mapas</h2>
            </Box>
            <MapCard />
        </Box> 
    )
}

export default Maps;