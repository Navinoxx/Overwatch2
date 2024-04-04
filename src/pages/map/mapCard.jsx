import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from 'prop-types';

export const MapCard = ({ map, handleOpen }) => {

    return (
        <Card sx={{ borderRadius: 0 }}>
            <CardActionArea onClick={() => handleOpen(map)}>
                <CardMedia component="img" height={180} image={map.screenshot} alt={map.name} loading="lazy" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                        {map.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {map.location}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

MapCard.propTypes = {
    map: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        screenshot: PropTypes.string.isRequired
    }),
    handleOpen: PropTypes.func.isRequired
}