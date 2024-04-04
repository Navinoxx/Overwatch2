import { Link } from 'react-router-dom'
import Facebook from '@/assets/socialIcons/facebook.svg'
import Twitter from '@/assets/socialIcons/x_twitter.svg'
import Youtube from '@/assets/socialIcons/youtube.svg'
import Instagram from '@/assets/socialIcons/instagram.svg'
import styles from './footer.module.css'
import { Box, Typography } from '@mui/material'

export const Footer = () => {
    const socials = [
        {
            name: 'Facebook',
            icon: Facebook,
            url: 'https://www.facebook.com/OverwatchES'
        },
        {
            name: 'Twitter',
            icon: Twitter,
            url: 'https://www.twitter.com/OverwatchES'
        },
        {
            name: 'Youtube',
            icon: Youtube,
            url: 'https://www.youtube.com/overwatchES'
        },
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://www.instagram.com/overwatcheu/'
        }
    ]

    return (
        <footer className={styles.footer}>
            <Typography sx={{ color: '#fff', fontSize: '2rem', textTransform: 'uppercase' }}>Mantente al día</Typography>
            <Box sx={{ display: 'flex', gap: '2rem' }}>
                {socials.map(({ name, icon, url }) => (
                    <Link to={url} key={name} target="_blank" rel="noreferrer">
                        <img className={styles.img_socials} src={icon} alt={name} loading="lazy" />
                    </Link>
                ))}
            </Box>
        </footer>
    );
}