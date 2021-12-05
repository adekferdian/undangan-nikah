import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
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
            image: img5
        },
        {
            image: img6
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
            <Carousel
                data={image}
                time={2000}
                width="500px"
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
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                // thumbnails={true}
                thumbnailWidth="100px"
                style={{
                textAlign: "center",
                maxWidth: "300px",
                maxHeight: "500px",
                margin: "40px auto",
                }}
            />
            <div className="closing">
                <p className="close">Sampai Jumpa di Hari Bahagia Kami</p>
                <p className="pengantin">Hadi & Frisca</p>
            </div>
        </div>
    )
};