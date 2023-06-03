import { Box, useTheme } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import battlenet from '../../assets/plataformas/battlenet.svg';
import battlenetSmall from '../../assets/plataformas/battlenet2.svg';
import nintendo from '../../assets/plataformas/nintendo.svg';
import nintendoSmall from '../../assets/plataformas/nintendo2.svg';
import ps5 from '../../assets/plataformas/ps5.svg';
import ps5Small from '../../assets/plataformas/ps52.svg';
import xbox from '../../assets/plataformas/xbox.svg';
import xboxSmall from '../../assets/plataformas/xbox2.svg';
import trailerVideo from '../../assets/backgroundvideo/F2P_Trailer.webm';
import './home.css'

function Home() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    
    return ( 
        <Box component="main" sx={{ width: '100%', height: '100%', zIndex: -1, opacity: 0.75, position: 'absolute', top: 0, left: 0}}>
            <Box >
            <video className="backgroundVideo" src={trailerVideo} type="video/webm" loading="lazy" muted autoPlay loop></video>
            </Box>
            <Box sx={{ display: 'inline-flex', justifyContent: 'space-evenly', alignItems: 'end', width: '100%', height: '90vh', position: 'absolute', zIndex: 1, pb: 5 }}>
            <a href="https://us.shop.battle.net/es-es/product/overwatch?blzcmp=ow_gamesite&_gl=1*flu35m*_ga*MTM2MTk2ODkyNS4xNjg0NzgzNDE3*_ga_VYKNV7C0S3*MTY4NDc4MzQxNy4xLjEuMTY4NDc4MzcyMi41My4wLjA." target="_blank" rel="noopener noreferrer">
                <img className="img-plataformas" src={isSmallScreen ? battlenetSmall :  battlenet } alt="battlenet logo" />
            </a>
            <a href="https://www.xbox.com/es-ES/games/store/overwatch-origins-edition/C1C4DZJPBC2V/0001" target="_blank" rel="noopener noreferrer">
                <img className="img-plataformas" src={isSmallScreen ?  xboxSmall  :  xbox } alt="xbox logo" />
            </a>
            <a href="https://www.playstation.com/es-ar/games/overwatch/" target="_blank" rel="noopener noreferrer">
                <img className="img-plataformas" src={isSmallScreen ?  ps5Small  :  ps5 } alt="ps5 logo" />
            </a>
            <a href="https://www.nintendo.com/store/products/overwatch-2-switch/" target="_blank" rel="noopener noreferrer">
                <img className="img-plataformas" src={isSmallScreen ?  nintendoSmall  :  nintendo } alt="nintendo logo" />
            </a>
            </Box>
        </Box>
    )
}

export default Home;