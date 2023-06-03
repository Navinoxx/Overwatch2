import { Box } from "@mui/material"
import { ModeCard } from "./modeCard";
import headerImage from '../../assets/backgroundimages/Overwatch-2.webp';

function GameModes() {

    return (   
        <Box component="main">
            <Box sx={{ zIndex: -1, position: 'absolute', width: '100%', top: 0  }}>
                <img className="img-header" src={headerImage} alt="imagen de fondo header modos" loading="lazy" />
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'end', width: '100%',  position: 'relative',  zIndex: 1, color: 'white' }}>
                <h2 className="title">Modos de Juego</h2>
            </Box>
            <ModeCard />
        </Box> 
    )
}

export default GameModes;