import { Box, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const InfoGameIcon = ({ data, index, handleButtonClick, activeStep }) => {

    return (
        <Box
            sx={{
                color: activeStep === index ? "white" : "rgba(255, 255, 255, 0.3)",
                maxWidth: "7rem",
                cursor: "pointer",
                ":hover": {
                color: "white",
                "& > .MuiIconButton-root": {
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                },
                },
            }}
            onClick={() => handleButtonClick(index)}
            >
            <IconButton
                sx={{
                width: { md: "4rem" },
                height: { md: "4rem" },
                border: "0.1rem solid white",
                display: "flex",
                margin: "0 auto",
                backgroundColor:
                    activeStep === index ? "rgba(255, 255, 255, 0.3)" : "transparent",
                }}
            >
                <Box
                component="img"
                sx={{ width: "2rem" }}
                src={data.src}
                alt="icono de habilidad"
                loading="lazy"
                />
            </IconButton>
            <Typography
                gutterBottom
                sx={{
                textAlign: "center",
                marginTop: "1rem",
                display: { xs: "none", md: "block" },
                }}
            >
                {data.title}
            </Typography>
        </Box>
    );
};

InfoGameIcon.propTypes = {
    data: PropTypes.shape({
        src: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }),
    index: PropTypes.number,
    handleButtonClick: PropTypes.func,
    activeStep: PropTypes.number,
}
