import { Box, IconButton } from "@mui/material";
import PropTypes from "prop-types";

export const InfoRolesIcon = ({ role, index, handleButtonClick, activeStep }) => {

    return (
        <IconButton
            key={index}
            onClick={() => handleButtonClick(index)}
            sx={{
                width: { md: '4rem' },
                height: { md: '4rem' },
                border: '0.1rem solid white',
                display: 'flex',
                backgroundColor:
                activeStep === index
                    ? 'rgba(255, 255, 255, 0.3)'
                    : 'transparent',
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.3)'},
            }}
            >
                <Box
                    component="img"
                    src={role.icon}
                    alt={role.name}
                    loading="lazy"
                />
        </IconButton>
    );
};

InfoRolesIcon.propTypes = {
    role: PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }),
    index: PropTypes.number,
    handleButtonClick: PropTypes.func,
    activeStep: PropTypes.number,
}
