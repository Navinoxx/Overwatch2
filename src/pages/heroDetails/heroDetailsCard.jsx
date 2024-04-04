import { Box, IconButton, Typography } from "@mui/material"
import PlaceIcon from "@mui/icons-material/Place";
import PropTypes from "prop-types";

export const HeroDetailsCard = ({ description, location, name }) => {

    return (
        <Box maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column',gap: '1rem', backgroundColor: 'rgba(0, 0, 0, 0.3)', color: 'white', position: 'absolute', height: '50vh', minWidth: '100%', paddingX: {md: '15rem', xs: '2rem'}, paddingTop: '12rem' }}>
            <Typography component="h3" variant="h3" sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.7)', textTransform: 'uppercase' }}>{name}</Typography>
            <Typography component="p">{description}</Typography>
            <Box>
                <IconButton sx={{color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.3)', marginRight: '1rem'}}>
                    <PlaceIcon />
                </IconButton>{location}
            </Box>
        </Box>
    )
}

HeroDetailsCard.propTypes = {
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}