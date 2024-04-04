import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from "prop-types";
import styles from './gameModes.module.css';

export const ModeCard = ({ mode }) => {

    return (
        <Card sx={{ borderRadius: 0, height: '100%' }}>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', height: '100%' }}>
                <CardMedia component="img" height={180} image={mode.screenshot} alt={mode.name} loading="lazy"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <img className={styles.img_icon} src={mode.icon} alt={mode.description} loading="lazy"/>
                        {mode.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {mode.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

ModeCard.propTypes = {
    mode: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        screenshot: PropTypes.string.isRequired,
    }),
}