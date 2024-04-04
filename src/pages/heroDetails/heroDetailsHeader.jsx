import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types';

export const HeroDetailsHeader = ({picture, name}) => {

    return (
        <Box component="section" sx={{ width: '100%'}}>
            <img className="img-header" src={picture} alt="imagen de fondo header heroes detalle" loading='lazy' />
            <Typography component="h2" variant="h2" sx={{ color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }} className="title" >{name}</Typography>
        </Box>
    )
}

HeroDetailsHeader.propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

