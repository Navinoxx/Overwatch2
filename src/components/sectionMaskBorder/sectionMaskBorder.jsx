import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export const SectionMaskBorder = ({ children, Divider, BgImageDesktop, BgImageMobile }) => {

    return (
        <Box
            component="section"
            sx={{
                WebkitMaskBoxImage: { md: `url(${Divider})` },
                WebkitMaskBoxImageSlice: { md: "20 350 fill" },
                WebkitMaskRepeat: 'no-repeat',
                minHeight: '90vh',
                backgroundImage: {xs: `url(${BgImageMobile})`, md: `url(${BgImageDesktop})`},
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                marginTop: { xs: 0, md: '-1.5rem' },
            }}
        >
            {children}
        </Box>
    );
}

SectionMaskBorder.propTypes = {
    children: PropTypes.node,
    Divider: PropTypes.string,
    BgImageDesktop: PropTypes.string,
    BgImageMobile: PropTypes.string,
}