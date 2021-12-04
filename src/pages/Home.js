import React, { useRef } from 'react';
import bg from '../assets/1.jpeg'
import pidio from '../assets/pidio.mp4'
import './home.css';
import { gsap, TimelineLite, Power3 } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import lagu from '../assets/lagu.mp3';
import { motion } from "framer-motion"
import Profile from './Profile';
import ProfileWanita from './ProfileWanita';
import Doa from './Doa';
import Wedding from './Wedding';
import Location from './Location';
import Kado from './Kado';
import Countdown from './Countdown';
import Ucapan from './Ucapan';
import Gallery from './Gallery';
import Author from './Author';
gsap.registerPlugin(ScrollTrigger);

export default function Home(props) {
    const [musicOn, setMusicOn] = React.useState(false)
    let audio = new Audio(lagu)
    let tl = new TimelineLite({
        scrollTrigger: {
            trigger: '.container',
            start: '0%',
            end: '100%',
            scrub: true,
        }
    })

    
    React.useEffect(() => {
        tl.fromTo('.front-page', {clipPath: 'circle(5%', border: 'none'}, {clipPath: 'circle(60%', border: 'none', overflow: 'hidden', background: 'transparent'})
        tl.fromTo('.music-note', {scale: 0.5}, { scale: 0, opacity: 0})
        tl.fromTo('title', { opacity: 0}, { opacity: 1})
        tl.fromTo('sub-title', { opacity: 0}, { opacity: 1})
    }, [])

    const handlePlay = (e) => {
        audio.play(true)
        setMusicOn(true)
        console.log('-1', audio.play());
    }

    const handlePause = () => {
        console.log('--22', audio.pause());
        setMusicOn(false)
    }
    return (
        <div className="container">
            <div className="first-page">
                <p 
                    className="brand">
                        The Wedding off
                </p>
                <h3 initial={{opacity: 0}} animate={{animationDelay: 5, opacity: 1}} className="title">Hadi and Frisca</h3>
                <h3 initial={{opacity: 0}} animate={{animationDelay: 3, opacity: 1}} className="sub-title">12 December 2021</h3>
                <h3 className="for">Kepada YTH</h3>
                <h3 className="for2">{props.nama}</h3>
                <audio id="audio">
                    <source src={lagu} type="audio/mpeg"></source>
                </audio>
                <div className="front-page">
                    <div className="intro-text">
                    </div>
                    {/* <img className="music-note" src="" alt=""></img> */}
                    {/* <img className="music-note" src="https://img.icons8.com/ios-filled/50/000000/invitation.png" alt =""/> */}
                    <div className="blend"></div>
                    <video src={pidio} autoPlay={true} loop muted></video>
                </div>
                {
                    musicOn ?
                        <img className="toogle-music" src="https://img.icons8.com/ios-filled/50/000000/pause--v1.png"
                            onClick={() => handlePause()}
                        />
                        :
                        <img className="toogle-music" 
                            src="https://img.icons8.com/ios-filled/50/000000/play--v1.png"
                            onClick={() => handlePlay()}
                        />
                }
            </div>
            <div className="second-page">
                <Profile />
                <ProfileWanita />
            </div>
            <div className="third-page">
                <Doa />
            </div>
            <div className="four-page">
                <Wedding />
            </div>
            <div className="fifth-page">
                <Location />
            </div>
            <div className="sixth-page">
                <Countdown />
            </div>
            <div className="seven-page">
                <Kado />
            </div>
            <div className="eight-page">
                <Ucapan />
            </div>
            <div className="nine-page">
                <Gallery />
            </div>
            <div className="ten-page">
                <Author />
            </div>
        </div>
    )
};