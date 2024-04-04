import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export const SectionLineBorder = ({ children, Divider, BgImageDesktop, BgImageMobile, color }) => {

    return (
        <Box 
        component="section"
            sx={{
                WebkitMaskBoxImage: { md: `url(${Divider})` },
                WebkitMaskBoxImageSlice: { md: "16 400 fill" },
                minHeight: '98vh',
                marginTop: { xs: 0, md: '-1.5rem' },
                paddingTop: { xs: 0, md: '2rem' },
                backgroundColor: color,
            }}>
            <Box
                sx={{
                    WebkitMaskBoxImage: { md: `url(${Divider})` },
                    WebkitMaskBoxImageSlice: { md: "16 400 fill" },
                    WebkitMaskRepeat: 'no-repeat',
                    minHeight: '98vh',
                    backgroundImage: {xs: `url(${BgImageMobile})`, md: `url(${BgImageDesktop})`},
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    marginTop: { xs: 0, md: '-1.5rem' },
                    transition: 'background-image 0.2s ease-in-out',
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

SectionLineBorder.propTypes = {
    children: PropTypes.node.isRequired,
    Divider: PropTypes.string.isRequired,
    BgImageDesktop: PropTypes.string.isRequired,
    BgImageMobile: PropTypes.string.isRequired,
    color: PropTypes.string,
}