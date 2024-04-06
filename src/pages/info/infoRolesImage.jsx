import { Box } from "@mui/material";
import { usePreloadImages } from "@/hooks/usePreloadImages";
import Tanks from "@/assets/rolesimages/Tank_Heroes_Desktop.webp";
import Damages from "@/assets/rolesimages/Damage_Heroes_Full_Body_05.webp";
import Supports from "@/assets/rolesimages/Support_Heroes_Full_Body_05.webp";
import PropTypes from "prop-types";

const images = [
    { src: Tanks, alt: "Tanks" },
    { src: Damages, alt: "Damages" },
    { src: Supports, alt: "Supports" },
];

export const InfoRolesImage = ({ activeStep }) => {
    usePreloadImages([Tanks, Damages, Supports]);

    return (
        <Box
            sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            width: { xs: "80%", md: "50%" },
            height: "100%",
            marginTop: "10rem",
            zIndex: -1,
            backgroundSize: "cover",
            backgroundImage: `url(${images[activeStep].src})`,
            transition: "background-image 0.2s ease-in-out",
            }}
            alt={images[activeStep].alt}
        />
    );
};

InfoRolesImage.propTypes = {
    activeStep: PropTypes.number,
    isTransitioning: PropTypes.bool,
    setIsTransitioning: PropTypes.func,
};
