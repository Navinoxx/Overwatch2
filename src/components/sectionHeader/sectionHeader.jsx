import { Box } from "@mui/material"
import PropTypes from "prop-types"
import styles from "./sectionHeader.module.css"

export const SectionHeader = ({picture, name}) => {

    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                height: "50vh",
                backgroundImage: `url(${picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
            }}
        >
            <h2 className={styles.title}>{name}</h2>
        </Box>
    );
}

SectionHeader.propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}