/* eslint-disable react/prop-types */
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Card, CardMedia } from '@mui/material';

const style = {
    display: 'block',
    margin: '5rem auto',    
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 2,
    };

    export default function TransitionsModal({name, location, open, image, handleClose}) {

        return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
            >
                <Fade in={open}>
                    <Card sx={style}>
                        <CardMedia
                            component="img"
                            image={image}
                        />
                        <Typography id="transition-modal-title" variant="h4" component="h2">
                        {name}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        {location}
                        </Typography>
                    </Card>
                </Fade>
            </Modal>
        )
}