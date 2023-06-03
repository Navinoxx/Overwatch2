import { Box } from '@mui/material'
import PropTypes from 'prop-types';

export default function HeroeDetailsHeader({picture, name}) {

    return (
        <Box component="section" sx={{ width: '100%'}}>
            <img className="img-header" src={picture} alt="imagen de fondo header heroes detalle" />
            <h2 className="title" >{name}</h2>
        </Box>
    )
}

HeroeDetailsHeader.propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

