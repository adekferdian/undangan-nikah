import React from "react";
import "./mimi.css";
import adek from "../../assets/adek.jpeg";
import { gsap, TimelineLite } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Doa from "./Doa";
gsap.registerPlugin(ScrollTrigger);

const Mimi = ({

}) => {

    const myRef = React.useRef();

    React.useEffect(() => {
        let tl = new TimelineLite({
            scrollTrigger: {
                trigger: '.mimi',
                start: '-50%',
                end: '10%',
                scrub: true,
                markers: true
            }
        })
        let tl2 = new TimelineLite({
            scrollTrigger: {
                trigger: '.adek',
                start: '-100%',
                end: '0%',
                scrub: true,
                markers: true
            }
        })
        tl.fromTo('.border-mimi', {scale: 0.5, opacity: 0}, { scale: 1, opacity: 1})
        tl2.fromTo('.border-adek', {scale: 0.5, opacity: 0}, { scale: 1, opacity: 1})
        // tl.fromTo('.front-page', {clipPath: 'circle(5%', border: 'none'}, {clipPath: 'circle(60%', border: 'none', overflow: 'hidden', background: 'transparent'})
        // tl.fromTo('.music-note', {scale: 0.5}, { scale: 0, opacity: 0})
        // tl.fromTo('.video-undangan', {scale: 0.5}, { scale: 0, opacity: 0})
        // tl.fromTo('.video-undangan', {scale: 0.5}, { scale: 0, opacity: 0})
        // tl.fromTo('title', { opacity: 0}, { opacity: 1})
        // tl.fromTo('sub-title', { opacity: 0}, { opacity: 1})
    }, [])

    return (
        <div>
            <div className="mimi">
                <div>
                    <div className="border-mimi">
                        <h1>Mempelai Wanita...</h1>
                        <h1>Izzatul Rahmi</h1>
                        <img src={adek} id="foto-mimi" alt="" />
                        <div className="ortu">
                            <p>Putri dari :</p>
                            <p>Bapak H.Amris Said.Dt.Bandaro Kayo (alm)</p>
                            <p>Ibu Hj.Ertati (almh)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="adek">
                <div>
                    <div className="border-adek">
                        <h1>Mempelai Pria...</h1>
                        <h1>Adek Ferdian</h1>
                        <img src={adek} id="foto-adek" alt="" />
                        <div className="ortu">
                            <p>Putra dari :</p>
                            <p>Bapak Yasrul</p>
                            <p>Ibu Syafni (almh)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="doa">
                <Doa lagu={myRef} />
            </div>
        </div>
    )
};

export default Mimi;