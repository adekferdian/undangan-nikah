import { Paper } from '@material-ui/core';
import React from 'react';
import './wedding.css';
import cincin from '../assets/cincin1.png'
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Wedding() {
    let tl = new TimelineLite({
        scrollTrigger: {
            trigger: '.profile',
            start: '320%',
            end: '350%',
            scrub: true,
        }
    });

    React.useEffect(() => {
        tl.fromTo('.wedding', {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%'})
        tl.fromTo('.bg', {opacity: 0, scale: 0}, {opacity: 0.2, x: '0%', scale: 1})
        tl.fromTo('#cincin', {opacity: 0, scale: 0}, {opacity: 1, x: '0%', scale: 1})
        tl.fromTo('.akad', {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%'})
        tl.fromTo('.nikah', {opacity: 0, scale: 0.2}, {opacity: 1, scale: 1})
        tl.fromTo('.isian', {opacity: 0, scale: 0.2}, {opacity: 1, scale: 1})
        tl.fromTo('.resepsi1', {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%'})
        tl.fromTo('#resepsi1', {opacity: 0, scale: 0.2}, {opacity: 1, scale: 1})
        tl.fromTo('.resepsi2', {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%'})
        tl.fromTo('#resepsi2', {opacity: 0, scale: 0.2}, {opacity: 1, scale: 1})
    }, [])
    return (
        <div className="wedding">
            <div className="pertama">
                <Paper className="konten">
                    <div className="tengah">
                        <img id="cincin" src={cincin}></img>
                    </div>
                    <div className="bg">
                    </div>
                        <p className="akad">Akad <span className="nikah">Nikah</span>  </p>
                        <div className="isian">
                            <p>Minggu, 12 Desember 2021</p>
                            <p>09:00 WIB s.d SELESAI</p>
                        </div>
                        <p className="resepsi1">
                            Resepsi 1
                        </p>
                        <div id="resepsi1">
                            <p>Minggu, 12 Desember 2021</p>
                            <p>12:00 WIB s.d SELESAI</p>
                        </div>
                        <p className="resepsi2">
                            Resepsi 2
                        </p>
                        <div id="resepsi2">
                            <p>Senin, 13 Desember 2021</p>
                            <p>10:00 WIB s.d SELESAI</p>
                        </div>
                </Paper>
            </div>
        </div>
    )
}