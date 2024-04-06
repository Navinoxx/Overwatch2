import { useEffect } from "react";

export const usePreloadImages  = (imageSources) => {
    useEffect(() => {
        const images = document.createElement('div');
        images.style.display = 'none';

        imageSources.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            images.appendChild(img);
        });

        document.body.appendChild(images);

        return () => {
            if (document.body.contains(images)) {
                document.body.removeChild(images);
            }
        }
    }, [imageSources]);
}
