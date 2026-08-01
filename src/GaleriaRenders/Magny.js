import React, { useEffect, useMemo, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

const Magny = ({ img }) => {

    const [zoom, setZoom] = useState(2);

    const [size, setSize] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {

        if (!img) return;

        const image = new Image();

        image.onload = () => {
            setSize({
                width: image.naturalWidth,
                height: image.naturalHeight
            });
        };

        image.src = img;

    }, [img]);

    const largeImage = useMemo(() => ({
        src: img,
        width: size.width * zoom,
        height: size.height * zoom,
    }), [img, size, zoom]);

    if (!img) return null;

    return (
    <div className="magnify-wrapper">

        <div className="zoom-buttons">
            <button onClick={() => setZoom(1)}>100%</button>
            <button onClick={() => setZoom(1.5)}>150%</button>
            <button onClick={() => setZoom(2)}>200%</button>
            <button onClick={() => setZoom(3)}>300%</button>
        </div>

        <div className="magnify-container">
            <ReactImageMagnify
                smallImage={{
                    alt: '',
                    src: img,
                    isFluidWidth: true,
                }}
                largeImage={largeImage}
            />
        </div>

    </div>
);
};

export default Magny;