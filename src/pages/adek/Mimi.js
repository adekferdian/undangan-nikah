import React from "react";
import "./mimi.css";
import adek from "../../assets/blackWhite.jpeg";
import adekf from "../../assets/mypic.jpeg";
import { gsap, TimelineLite } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Doa from "./Doa";
import Wedding from "./Wedding";
import Countdown from "./Countdown";
import Kado from "./Kado";
import Gallery from "./Gallery";
gsap.registerPlugin(ScrollTrigger);

const Mimi = ({
lagu
}) => {

    React.useEffect(() => {
        let tl = new TimelineLite({
            scrollTrigger: {
                trigger: '.mimi',
                start: '-50%',
                end: '10%',
                scrub: true,
            }
        })
        let tl2 = new TimelineLite({
            scrollTrigger: {
                trigger: '.adek',
                start: '-100%',
                end: '0%',
                scrub: true,
            }
        })
        tl.fromTo('.border-mimi', {x: -100, opacity: 0}, {x:0, opacity: 1})
        tl.fromTo('#mims', {x: 100, opacity: 0}, {x:0, opacity: 1, delay: .1})
        tl.fromTo('#foto-mimi', {x: 100, opacity: 0}, {x:0, opacity: 1, delay: .2})
        tl.fromTo('#ortu-mimi', {x: -100, opacity: 0}, {x:0, opacity: 1, delay: .3})
        tl2.fromTo('.border-adek', {x: -100, opacity: 0}, {x:0, opacity: 1})
        tl2.fromTo('#adekf', {x: 100, opacity: 0}, {x:0, opacity: 1, delay: .1})
        tl2.fromTo('#foto-adek', {x: 100, opacity: 0}, {x:0, opacity: 1, delay: .2})
        tl2.fromTo('#ortu-adek', {x: -100, opacity: 0}, {x:0, opacity: 1, delay: .3})
        
        
    }, [])

    return (
        <div>
            <div className="mimi">
                <div>
                    <div className="border-mimi">
                        <h1 className="mempelai">Mempelai Wanita...</h1>
                        <h1 className="our" id="mims">Izzatul Rahmi</h1>
                        <img src={adek} id="foto-mimi" alt="" />
                        <div className="ortu" id="ortu-mimi">
                            <p className="putra">Putri dari :</p>
                            <p>Bapak H.Amris Said.Dt.Bandaro Kayo (alm)</p>
                            <p>Ibu Hj.Ertati (almh)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="adek">
                <div>
                    <div className="border-adek">
                        <h1 className="mempelai">Mempelai Pria...</h1>
                        <h1 className="our" id="adekf">Adek Ferdian</h1>
                        <img src={adekf} id="foto-adek" alt="" />
                        <div className="ortu" id="ortu-adek">
                            <p className="putra">Putra dari :</p>
                            <p>Bapak Yasrul</p>
                            <p>Ibu Syafni (almh)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="doa">
                <Doa lagu={lagu} />
            </div>
            <div className="wedding">
                <Wedding />
            </div>
            <div className="countdown">
                <Countdown />
            </div>
            <div className="kado">
                <Kado />
            </div>
            <div className="gallery">
                <Gallery />
            </div>
        </div>
    )
};

export default Mimi;