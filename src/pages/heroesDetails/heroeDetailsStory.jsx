import { Box, Button, Card, CardContent, CardMedia, Container, IconButton, Typography } from "@mui/material";
import ShieldIcon from '@mui/icons-material/Shield';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaceIcon from '@mui/icons-material/Place';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CustomizedAccordions from "../../components/accordion/accordion";
import PropTypes from 'prop-types';

export default function HeroeDetailsStory({portrait, hitpoints, description, story, location}) {
    const type = story.media?.type
    const url = story.media?.link

    const videoId = url?.match(/youtu\.be\/([^\?]+)/)?.[1]
    const iframe = videoId ? (
        <iframe
            id="player"
            allowFullScreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title="Historia del heroe de Overwatch 2"
            width="640"
            height="360"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=1&amp;autoplay=0&amp;mute=0&amp;loop=0&amp;playsinline=0&amp;modestbranding=1&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Foverwatch.blizzard.com&amp;widgetid=1`}
        ></iframe>
    ) : null;

    return (
        <Box component="section" className="background-story">
            <Container maxWidth="xl">
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem', paddingY: '3rem' }}>
                    <Typography component="h3" variant="h3">
                        Historia de origen
                    </Typography>
                    <Typography component="p" variant="h5">
                        {story.summary}
                    </Typography>
                    {type === 'video' && url ? iframe : <Button  variant="contained" href={url} target="_blank">Ver cómic</Button>}
                </Box>
                <Card elevation={3} sx={{ display: 'flex', backgroundColor: 'transparent', color: 'white', width: {md: '80%'}, marginX: 'auto' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: '50%' }}
                            image={portrait}
                            alt=""  
                        />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1' }}>
                            <Typography component="div" variant="h5">
                                {description}
                            </Typography>
                            <IconButton edge= 'start' sx={{color: 'white'}}>
                                <PlaceIcon />
                            </IconButton>{location}
                        </CardContent>
                        <Box sx={{paddingBottom: '1rem', fontSize: '1.5em', display: 'flex', alignItems: 'center'}}>
                            <IconButton sx={{color: 'white'}}>
                                <ShieldIcon />
                            </IconButton >{hitpoints.shields}
                        </Box>
                        <Box sx={{paddingBottom: '1rem', fontSize: '1.5em', display: 'flex', alignItems: 'center'}}>
                        <IconButton sx={{color: 'white'}}>
                                <FavoriteIcon />
                            </IconButton>{hitpoints.health}
                        </Box>
                        <Box sx={{paddingBottom: '1rem', fontSize: '1.5em', display: 'flex', alignItems: 'center'}}>
                            <IconButton sx={{color: 'white'}}>
                                <AccessibilityNewIcon />
                            </IconButton>{hitpoints.armor}
                        </Box>
                    </Box>
                </Card>
                <CustomizedAccordions story={story.chapters} />
            </Container>
        </Box>
    )
}

HeroeDetailsStory.propTypes = {
    portrait: PropTypes.string.isRequired,
    hitpoints: PropTypes.shape({
        shields: PropTypes.number.isRequired,
        health: PropTypes.number.isRequired,
        armor: PropTypes.number.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    story: PropTypes.shape({
        summary: PropTypes.string.isRequired,
        media: PropTypes.shape({
            type: PropTypes.oneOf(['video', 'comic', 'short-story']).isRequired,
            link: PropTypes.string.isRequired,
        }).isRequired,
        chapters: PropTypes.array.isRequired,
    }).isRequired,
    location: PropTypes.string.isRequired,
}