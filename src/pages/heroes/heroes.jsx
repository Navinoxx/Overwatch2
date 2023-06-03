import { Box } from '@mui/material';
import { HeroeCard } from './heroeCard';
import headerImage from '../../assets/backgroundimages/1600_Header_v2.webp';
import './heroes.css';

export default function Heroes() {
    return (   
        <Box component="main">
            <Box sx={{ zIndex: -1, position: 'absolute', width: '100%', top: 0 }}>
                <img className="img-header" src={headerImage} alt="imagen de fondo header heroes" loading="lazy" />
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'end', color: 'white' }}>
                <h2 className="title">héroes</h2>
            </Box>
            <HeroeCard />
        </Box> 
    );
}
