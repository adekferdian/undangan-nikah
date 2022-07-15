import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import img1 from '../../assets/_DSC1511.JPG';
import img2 from '../../assets/_DSC2140.JPG';
import img3 from '../../assets/_DSC2141.JPG';
import img4 from '../../assets/_DSC2146.JPG';
import img5 from '../../assets/_DSC2149.JPG';
import img6 from '../../assets/_DSC2150.JPG';
import img7 from '../../assets/_DSC2152.JPG';
import img8 from '../../assets/_DSC2153.JPG';
import './gallery.css';


export default function Gallery() {

    const image = [
        {
            image: img1
        },
        {
            image: img2
        },
        {
            image: img3
        },
        {
            image: img4
        },
        {
            image: img5
        },
        {
            image: img6
        },
        {
            image: img7
        },
        {
            image: img8
        },
    ];
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    };
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    };
    return (
        <div className="gallery">
            <div className="border-gallery">
                <Carousel
                    data={image}
                    time={2000}
                    width="100%"
                    height="500px"
                    captionStyle={captionStyle}
                    radius="10px"
                    // slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="black"
                    slideImageFit="contain"
                    // thumbnails={true}
                    thumbnailWidth="100px"
                    className="pic-foto"
                    style={{
                        textAlign: "center",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        margin: "40px auto",
                    }}
                />
            </div>
            <div className="closing">
                <p className="close">Sampai Jumpa di Hari Bahagia Kami</p>
                <p className="pengantin">Adek & Mimi</p>
            </div>
        </div>
    )
};