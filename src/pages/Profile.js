import React, { useRef } from 'react';
import './profile.css';
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gb1 from '../assets/wonkpao.jpeg'
import gb2 from '../assets/4.jpeg'
gsap.registerPlugin(ScrollTrigger);

export default function Profile() {
    let tl = new TimelineLite({
        scrollTrigger: {
            trigger: '.profile',
            start: '0%',
            end: '100%',
            scrub: true,
        }
    })
    let tl2 = new TimelineLite({
        scrollTrigger: {
            trigger: '.profile',
            start: '0%',
            end: '100%',
            scrub: true,
        }
    })
    let tl3 = new TimelineLite({
        scrollTrigger: {
            trigger: '.profile',
            start: '50%',
            end: '100%',
            scrub: true,
        }
    })
    let tl4 = new TimelineLite({
        scrollTrigger: {
            trigger: '.profile',
            start: '90%',
            end: '100%',
            scrub: true,
        }
    })
    let tl5 = new TimelineLite({
        scrollTrigger: {
            trigger: '.media',
            start: '95%',
            end: '100%',
            scrub: true,
        }
    })

    const ref = useRef(null);
    React.useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
        element.querySelector(".first-paragraph"),
        {
            opacity: 0,
            y: -20
        },
        {
            opacity: 1,
            y: 0,
            scrollTrigger: {
            trigger: ".first",
            start: "-50%",
            end: "bottom center",
            scrub: true,
            }
        }
        );
    }, [])

    React.useEffect(() => {
        tl.fromTo('#pria', {opacity: 0, scale: 0.2}, {opacity: 1, scale: 1})
        tl.fromTo('.border-pria', {opacity: 0, scale: 0.2, overflow: 'hidden'}, {opacity: 1, scale: 1})
        tl2.fromTo('#gb1', {opacity: 0, scale: 0.2}, {opacity: 1, scale: 1, rotate: 360, overflow: 'hidden'})
        tl3.fromTo('.first-paragraph', {opacity: 0, y: -200}, {opacity: 1, x: '5%', marginTop: '2rem'})
        tl4.fromTo('.father', {opacity: 0,}, {opacity: 1})
        tl4.fromTo('.dan', {opacity: 0,}, {opacity: 1, delay: 20})
        tl4.fromTo('.mother', {opacity: 0,}, {opacity: 1, delay: 10})
        tl4.fromTo('#wanita', {opacity: 0,}, {opacity: 1, delay: 10})
        tl5.fromTo('.media', {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%'})
    }, [])

    const handleClick = (url) => {
        const newWindow = window.open('http://www.instagram.com/hadilagani');
    }
    

    return (
        <div className="profile" ref={ref}>
            <div className="first">
                <h1 id="pria">Mempelai Pria..</h1>
                <div className="border-pria">
                    <div className="media">
                        <img onClick={() => handleClick()} src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
                    </div>
                    <img src={gb1} alt="" id="gb1"></img>
                    <p className="first-paragraph">
                    Hadi Putra L S.E
                    </p>
                    <p className="parents">
                        Putra dari:
                    </p>
                    <p className="father">
                        Bapak H.Amris Said.Dt.Bandaro Kayo (alm)
                        
                    </p>
                    <p className="dan">&</p>
                    <p className="mother">
                        Ibu Hj.Ertati (almh)
                    </p>
                </div>
                <div className="logo-main">
                {/* <img src={gb1} id="workout-logo" alt="workout" /> */}
                </div>
            </div>
        </div>
    )
};