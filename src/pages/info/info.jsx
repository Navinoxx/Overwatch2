import { Box } from '@mui/material';
import InfoGame from './infoGame.jsx';
import headerImageBack from '../../assets/backgroundimages/Desktop_Outro_Sky.jpg';
import headerImage from '../../assets/backgroundimages/Desktop_Outro_Characters.webp';

export default function Info() {
    return (   
        <Box component="main">
            <Box sx={{ zIndex: -1, position: 'absolute', width: '100%', top: 0 }}>
            <img className="img-header" src={headerImage} alt="imagen de fondo header heroes" loading="lazy" />
            </Box>
            <Box sx={{ zIndex: -2, position: 'absolute', width: '100%', top: 0 }}>
                <img className="img-header" src={headerImageBack} alt="imagen de fondo header heroes" loading="lazy" />
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'end', color: 'white' }}>
                <h2 className="title">Información</h2>
            </Box>
            <InfoGame />
        </Box> 
    );
}