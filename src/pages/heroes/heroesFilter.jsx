import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import tankIcon from '../../assets/roles/tank.svg';
import damageIcon from '../../assets/roles/damage.svg';
import supportIcon from '../../assets/roles/support.svg';

export default function HeroesFilter({ handleFilteredHeroes }) {

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem' }}>
                <Button variant="contained" size="large" onClick={() => handleFilteredHeroes('all')}>
                    Todos
                </Button>
                <Button variant="contained" size="large" onClick={() => handleFilteredHeroes('tank')} startIcon={<img className="img-filter" src={tankIcon} alt="Tank" loading="lazy" />}>
                    Tanke
                </Button>
                <Button variant="contained" size="large" onClick={() => handleFilteredHeroes('damage')} startIcon={<img className="img-filter" src={damageIcon} alt="Damage" loading="lazy" />}>
                    Daño
                </Button>
                <Button variant="contained" size="large" onClick={() => handleFilteredHeroes('support')} startIcon={<img className="img-filter" src={supportIcon} alt="Support" loading="lazy" />}>
                    Apoyo
                </Button>
            </Box>
        </>
    );
}

HeroesFilter.propTypes = {
    handleFilteredHeroes: PropTypes.func.isRequired,
};
