import React from 'react';
import './location.css';
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Location() {
    let tl = new TimelineLite({
        scrollTrigger: {
            trigger: '.profile',
            start: '390%',
            end: '410%',
            scrub: true,
        }
    })
    let tl2 = new TimelineLite({
        scrollTrigger: {
            trigger: '.profile',
            start: '405%',
            end: '430%',
            scrub: true,
        }
    })
    let tl3 = new TimelineLite({
        scrollTrigger: {
            trigger: '.profile',
            start: '430%',
            end: '460%',
            scrub: true,
        }
    })
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
    };

    const handleClick = () => {
        const newWindow = window.open('https://www.google.com/maps/dir//-0.4004601,100.606717/@-0.4011998,100.6047142,17.84z/data=!4m2!4m1!3e2');
        
    }
    const handleClick2 = () => {
        const newWindow = window.open('https://www.google.com/maps/dir//-0.3873443,100.6985168/@-0.3873443,100.6963281,17z/data=!4m2!4m1!3e0?hl=en');
        
    }

    React.useEffect(() => {
        tl.fromTo('.judul', {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%'})
        tl2.fromTo('.location1', {opacity: 0, scale: .2}, {opacity: 1, scale:1 })
        tl2.fromTo('.pesta1', {opacity: 0, scale: .2}, {opacity: 1, scale:1 })
        tl2.fromTo('.pin', {opacity: 0, scale: .2}, {opacity: 1, scale:1 })
        tl2.fromTo('#peta', {opacity: 0, scale: .2}, {opacity: 1, scale:1 })
        tl3.fromTo('.location2', {opacity: 0, scale: .2}, {opacity: 1, scale:1 })
        tl3.fromTo('.pesta2', {opacity: 0, scale: .2}, {opacity: 1, scale:1 })
        tl3.fromTo('.pin2', {opacity: 0, scale: .2}, {opacity: 1, scale:1 })
        tl3.fromTo('#peta2', {opacity: 0, scale: .2}, {opacity: 1, scale:1 })
    }, [])
    return (
        <div className="location">
            <div className="judul">
                <img id="lokasi" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-location-map-location-flatart-icons-outline-flatarticons-7.png"/>
                <h1 className="lokasi">Lokasi Pesta</h1>
            </div>
            <div className="divider">
                <div className="location1">
                    <h1 id="first">Resepsi 1..</h1>
                    <p className="lokasi-1">(Kediaman Mempelai Wanita)</p>
                    <p className="pesta1" id="jarak">Belakang Kantor Camat Sungayang</p>
                    <p className="pesta1">Nagari Sungayang</p>
                    <p className="pesta1">Kecamatan Sungayang</p>
                    <p className="pesta1">Kabupaten Tanah Datar</p>
                    <div className="direction">
                        {/* <p id="lihat">Lihat</p> */}
                        <p id="peta">Lokasi</p>
                    </div>
                    <img onClick={() => handleClick()} className="pin" src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-location-user-interface-icongeek26-linear-colour-icongeek26.png"/>
                </div>
                <div className="location2">
                    <h1 id="second">..Resepsi 2</h1>
                    <p className="lokasi-2">(Kediaman Mempelai Pria)</p>
                    <p className="pesta2" id="jarak2">lintau batu bulek </p>
                    <p className="pesta2">Nagari Lintau</p>
                    <p className="pesta2">Kecamatan Lintau Buo Utara</p>
                    <p className="pesta2">Kabupaten Tanah Datar</p>
                    <div className="direction2">
                        {/* <p id="lihat">Lihat</p> */}
                        <p id="peta2">Lokasi</p>
                    </div>
                    <img onClick={() => handleClick2()} className="pin2" src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-location-user-interface-icongeek26-linear-colour-icongeek26.png"/>
                </div>
            </div>
        </div>
    )
};