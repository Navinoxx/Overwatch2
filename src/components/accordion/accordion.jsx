import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './accordion.module.css';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
    border: `1px solid ${theme.palette}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.75rem' }} />}
        {...props}
    />
    ))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 100, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(3),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .9)',
}));

export const CustomizedAccordions = ( {story} ) => {
    const [expanded, setExpanded] = useState('panel0');
    const [chapterIndex, setChapterIndex] = useState(0);

    const handleChapter = (index) => {
        if (chapterIndex !== index) {
            setChapterIndex(index);
    }}  

    const handleChange = (panel) => (newExpanded) => {
        setExpanded(newExpanded ? panel : false);
        const index = parseInt(panel.slice(5), 10)
        handleChapter(index)
    };

    return (
        <Box sx={{display: 'grid', gridTemplateColumns: {lg: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)'}, gap: '2rem', paddingTop: '3rem', alignItems: 'start'}}>
            <Box> 
                {story?.map((chapter, index) => (
                    <Accordion sx={{backgroundColor: 'transparent', color: 'white'}} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} key={index}>
                        <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                            <Typography sx={{ textTransform: 'uppercase' }}>{chapter?.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{chapter?.content}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
                }
            </Box>
            <img className={styles.picture_story} src={story[chapterIndex]?.picture} alt={story[chapterIndex]?.title} />
        </Box>
    );
}

CustomizedAccordions.propTypes = {
    story: PropTypes.array.isRequired,
}