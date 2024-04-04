import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import tankIcon from '@/assets/roles/tankBlack.svg';
import damageIcon from '@/assets/roles/damageBlack.svg';
import supportIcon from '@/assets/roles/supportBlack.svg';
import PropTypes from 'prop-types';
import styles from './heroes.module.css';
import React from 'react';

const HeroCard = ({ hero }) => {

    return (
        <Link className={styles.hero_card} to={`/heroes/${hero.key}`}>
            <Card elevation={5} sx={{ borderRadius: 0 }}>
                <CardActionArea>
                    <CardMedia component="img" image={hero.portrait} sx={{ padding: '0.2rem' }} alt={hero.key} />
                    <CardContent sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <img src={hero.role === 'tank' ? tankIcon : hero.role === 'damage' ? damageIcon : supportIcon} alt={hero.role} loading="lazy" />
                        <Typography component="h5" sx={{ display: 'flex', my: 'auto', textTransform: 'uppercase' }}>
                            {hero.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}

export const HeroCardMemo = React.memo(HeroCard);

HeroCard.propTypes = {
    hero: PropTypes.shape({
        key: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        portrait: PropTypes.string.isRequired,
        role: PropTypes.oneOf(['tank', 'damage', 'support']).isRequired,
    }).isRequired,
}