import React from 'react';
import './wedding.css';
import cincin from '../../assets/cincin1.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Wedding() {
    // let tl = new TimelineLite({
    //     scrollTrigger: {
    //         trigger: '.intro',
    //         // start: '320%',
    //         // end: '350%',
    //         // scrub: true,
    //     }
    // });

    React.useEffect(() => {
        // tl.fromTo('.wedding', {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%'})
        // tl.fromTo('.bg', {opacity: 0, scale: 0}, {opacity: 0.2, x: '0%', scale: 1})
        // tl.fromTo('#cincin', {opacity: 0, scale: 0}, {opacity: 1, x: '0%', scale: 1})
        // tl.fromTo('.akad', {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%'})
        // tl.fromTo('.nikah', {opacity: 0, scale: 0.2}, {opacity: 1, scale: 1})
        // tl.fromTo('.isian', {opacity: 0, scale: 0.2}, {opacity: 1, scale: 1})
        // tl.fromTo('.resepsi1', {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%'})
        // tl.fromTo('#resepsi1', {opacity: 0, scale: 0.2}, {opacity: 1, scale: 1})
        // tl.fromTo('.resepsi2', {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%'})
        // tl.fromTo('#resepsi2', {opacity: 0, scale: 0.2}, {opacity: 1, scale: 1})
    }, [])
    return (
        <div className="wedding">
            <div className="pertama">
                <div className="konten">
                    <div className="tengah">
                        <img id="cincin" alt="" src={cincin}></img>
                    </div>
                    <div className="bg">
                        <p className="akad">Akad <span className="nikah">Nikah</span>  </p>
                        <div className="isian">
                            <p>Jum'at, 22 Juli 2022</p>
                            <p>08:00 WIB - 08:30 WIB</p>
                        </div>
                        <p className="resepsi1">
                            Resepsi
                        </p>
                        <div id="resepsi1">
                        <p>Jum'at, 22 Juli 2022</p>
                            <p>09:00 WIB - SELESAI</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}