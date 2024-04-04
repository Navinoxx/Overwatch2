import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Card, CardMedia, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const TransitionsModal = ({ name, location, open, image, handleClose }) => {

    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        slotProps={{
            backdrop: {
            timeout: 500,
            },
        }}
        >
            <Fade in={open}>
                <Card sx={{ borderRadius: 0, width: { xs: '90%', md: '80%', lg: '60%'}, margin: { xs: '10rem auto', md: '5rem auto', lg: '3rem auto'}, padding: '0.5rem', }}>
                    <CardMedia component="img" image={image} loading="lazy"/>
                    <Typography id="transition-modal-title" variant="h4" component="h2">
                        {name}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        {location}
                    </Typography>
                </Card>
            </Fade>
        </Modal>
    );
}

TransitionsModal.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,  
    open: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
}
