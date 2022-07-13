import React from "react";
import { gsap, TimelineLite } from 'gsap';
import "./intro.css";

const Intro = ({
to
}) => {
    const [toogle,] = React.useState([])

    gsap.defaults({ease: "none"});
    const tl = new TimelineLite();

    React.useEffect(() => {
        tl
            .from(".first", {x :-200, opacity: 0,},)
            .to(".first", {x:0}, 1)
        tl
            .from(".second", {x :200, opacity: 0, delay: 0.1},)
            .to(".second", {x:0}, 1)
        tl
            .from(".third", {x :-200, opacity: 0, delay: 0.2},)
            .to(".third", {x:0}, 1)
        tl
            .from(".fourth", {x :200, opacity: 0, delay: 0.3},)
            .to(".fourth", {x:0}, 1)
        tl
            .from(".fifth", {x :-200, opacity: 0, delay: 0.4},)
            .to(".fifth", {x:0}, 1)
        tl
            .from(".sixth", {x :200, opacity: 0, delay: 1},)
            .to(".sixth", {x:0}, 5.5)
    }, [toogle])



    return (
        <div className="intro">
            <div className="wrapper-intro">
                <div className="first" >
                    <h2>Assalammu'alaikum Warahmatullahi Wabarakatuh</h2>
                </div>
                <div className="second">
                    <h2>Tanpa mengurangi rasa hormat, Kami mengundang Bapak/Ibu/Saudara/i</h2>
                </div>
                <div className="third">
                    <h2 style={{textTransform: "uppercase"}}>{to}</h2>
                </div>
                <div className="fourth">
                    <h2>Untuk Menghadiri Acara Pernikahan Kami</h2>
                </div>
                <div className="fifth">
                    <h2>Yang InsyaAllah akan dilaksanakan pada:</h2>
                </div>
                <div className="sixth"  id="time" >
                    <h2>Jum'at 22 Juli 2022</h2>
                    <h2>08:00 - Selesai</h2>
                    <h2>Cluster Acacia Blok K27</h2>
                    <h2>Grand Depok City</h2>
                </div>
            </div>
        </div>
    )
};

export default Intro;