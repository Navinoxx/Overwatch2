import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import battlenet from "@/assets/platforms/battlenet.svg";
import battlenetSmall from "@/assets/platforms/battlenet2.svg";
import nintendo from "@/assets/platforms/nintendo.svg";
import nintendoSmall from "@/assets/platforms/nintendo2.svg";
import ps5 from "@/assets/platforms/ps5.svg";
import ps5Small from "@/assets/platforms/ps52.svg";
import xbox from "@/assets/platforms/xbox.svg";
import xboxSmall from "@/assets/platforms/xbox2.svg";
import steam from "@/assets/platforms/steam.svg";
import steamSmall from "@/assets/platforms/steam2.svg";
import trailerVideo from "@/assets/backgroundvideo/F2P_Trailer.webm";
import styles from "./home.module.css";

const platforms = [
    {
        link: 'https://us.shop.battle.net/es-es/product/overwatch?blzcmp=ow_gamesite&_gl=1*flu35m*_ga*MTM2MTk2ODkyNS4xNjg0NzgzNDE3*_ga_VYKNV7C0S3*MTY4NDc4MzQxNy4xLjEuMTY4NDc4MzcyMi41My4wLjA.',
        img: { large: battlenet, small: battlenetSmall },
        alt: 'battlenet logo'
    },
    {
        link: 'https://www.xbox.com/es-ES/games/store/overwatch-origins-edition/C1C4DZJPBC2V/0001',
        img: { large: xbox, small: xboxSmall },
        alt: 'xbox logo'
    },
    {
        link: 'https://www.nintendo.com/store/products/overwatch-2-switch/',
        img: { large: nintendo, small: nintendoSmall },
        alt: 'nintendo logo'
    },
    {
        link: 'https://www.playstation.com/es-ps5/',
        img: { large: ps5, small: ps5Small },
        alt: 'ps5 logo'
    },
    {
        link: 'https://store.steampowered.com/app/2357570/Overwatch_2/',
        img: { large: steam, small: steamSmall },
        alt: 'steam logo'
    },
]

export const Home = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const [loadedImages, setLoadedImages] = useState([]);

    useEffect(() => {
        const loaded = platforms.map(() => false);
        setLoadedImages(loaded);
    }, []);

    const handleImageLoad = (index) => {
        const updatedLoadedImages = [...loadedImages];
        updatedLoadedImages[index] = true;
        setLoadedImages(updatedLoadedImages);
    };

    return ( 
        <>
            <video className={styles.backgroundVideo} src={trailerVideo} type="video/webm" loading="lazy" muted autoPlay loop></video>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'end', width: '100%', height: '100%', position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.3)', paddingBottom: '5rem' }}>
                {platforms.map((platform, index) => (
                    <Link to={platform.link} key={index} target="_blank" rel="noopener noreferrer">
                        <img
                            className={styles.img_header}
                            src={isSmallScreen ? platform.img.small : platform.img.large} 
                            alt={platform.alt} 
                            loading={loadedImages[index] ? "eager" : "lazy"}
                            onLoad={() => handleImageLoad(index)}
                        />
                    </Link>
                ))}
            </Box>
        </>
    )
}
