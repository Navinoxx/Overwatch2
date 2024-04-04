import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const ButtonHeroes = ({ text, to }) => {

    return (
        <Link to={to}>
            <Button variant="contained" sx={{ borderRadius: 0, padding: '1rem 2rem', backgroundColor: 'rgba(255, 255, 255, 0.8)', '&:hover': { backgroundColor: 'white' }, color: 'black', fontSize: '1.5rem' }}>
                    {text}
            </Button>
        </Link>
    )
};

ButtonHeroes.propTypes = {
    text: PropTypes.string,
    to: PropTypes.string
}