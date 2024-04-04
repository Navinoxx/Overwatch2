import { useMemo } from "react";
import { ButtonHeroes } from "@/components/buttonHeroes/buttonHeroes";
import PropTypes from "prop-types";
import styles from "./heroDetails.module.css";

export const HeroDetailsMedia = ({ type, link }) => {
    let content;

    const iframe = useMemo(() => {
        const videoId = link?.match(/youtu\.be\/([^?]+)/)?.[1]

        return videoId ? (
            <iframe
                className={styles.iframe}
                title="Historia del heroe de Overwatch 2"
                src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=1&amp;autoplay=0&amp;mute=0&amp;loop=0&amp;playsinline=0&amp;modestbranding=1&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Foverwatch.blizzard.com&amp;widgetid=1`}
            ></iframe>
        ) : null;
    }, [link])

    if (type === 'video') {
        content = iframe;
    } else if (type === 'short-story') {
        content = <ButtonHeroes text="Ver Comic" to={link} />;
    } else {
        content = null;
    }

    return <>{content}</>;
};

HeroDetailsMedia.propTypes = {
    type: PropTypes.oneOf(['video', 'short-story']),
    link: PropTypes.string,
}