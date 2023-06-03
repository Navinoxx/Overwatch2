import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import getHeroesRoles from "../../data/APIroles";
import Tanks from "../../assets/rolesimages/Tank_Heroes_Desktop.webp";
import Damages from "../../assets/rolesimages/Damage_Heroes_Full_Body_05.webp";
import Supports from "../../assets/rolesimages/Support_Heroes_Full_Body_05.webp";

export default function InfoRoles() {
    const [rol, setRol] = useState([]);
    const [activeStep, setActiveStep] = useState(0);

    const images = [
        { src: Tanks, alt: "Imagen tankes", id: 1 },
        { src: Damages, alt: "Imagen daños", id: 2 },
        { src: Supports, alt: "Imagen apoyos", id: 3 },
    ];

    const handleButtonClick = (step) => {
        setActiveStep(step);
    };

    useEffect(() => {
        getHeroesRoles()
            .then((res) => {
                setRol(res)
            });
    }, []);

    const selectedRole = rol[activeStep];

    return (
        <Container sx={{ display: "flex", paddingTop: "2rem" }}>
        <Box>
            <Box
            component="img"
            sx={{
                display: "block",
                width: 500,
                overflow: "hidden",
            }}
            src={images[activeStep].src}
            alt={images[activeStep].alt}
            />
        </Box>
        <Box sx={{ paddingLeft: "2rem" }}>
            <Typography variant="h3" sx={{ paddingBottom: "2rem" }}>
            Héroes
            </Typography>
            <Box sx={{ display: "flex", justifyContent: 'center', gap: "2rem" }}>
            {rol.map((role, index) => (
                <IconButton
                key={index}
                onClick={() => handleButtonClick(index)}
                sx={{
                    width: "4rem",
                    height: "4rem",
                    border: "0.1rem solid white",
                    display: "flex",
                    backgroundColor:
                    activeStep === index
                        ? "rgba(255, 255, 255, 0.3)"
                        : "transparent",
                }}
                >
                <Box
                    component="img"
                    className="abilitie-icon"
                    src={role.icon}
                    alt={role.name}
                    loading="lazy"
                />
                </IconButton>
            ))}
            </Box>
            <Typography variant="h3" sx={{ paddingY: "2rem" }}>
            {selectedRole?.name}
            </Typography>
            <Typography variant="h5" sx={{ paddingBottom: "2rem" }}>
            {selectedRole?.description}
            </Typography>
            <Button variant="contained">
                <Link to="/heroes" className="button-link">
                    Ver todos los héroes
                </Link>
            </Button>
        </Box>
        </Container>
    );
}
