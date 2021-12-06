import React, { useRef } from 'react';
import './profile.css';
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gb1 from '../assets/3.jpeg'
import gb2 from '../assets/priska.jpeg'
gsap.registerPlugin(ScrollTrigger);

export default function ProfileWanita() {
    let tl = new TimelineLite({
        scrollTrigger: {
            trigger: '.second',
            start: '140%',
            end: '200%',
            scrub: true,
        }
    })
    let tl2 = new TimelineLite({
        scrollTrigger: {
            trigger: '.second',
            start: '150%',
            end: '200%',
            scrub: true,
        }
    })
    let tl3 = new TimelineLite({
        scrollTrigger: {
            trigger: '.second',
            start: '50%',
            end: '100%',
            scrub: true,
        }
    })
    let tl4 = new TimelineLite({
        scrollTrigger: {
            trigger: '.second',
            start: '90%',
            end: '100%',
            scrub: true,
        }
    })
    let tl5 = new TimelineLite({
        scrollTrigger: {
            trigger: '.second',
            start: '195%',
            end: '220%',
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

    const handleClick = (url) => {
        const newWindow = window.open('http://www.instagram.com/f.pikaaa');
    }

    React.useEffect(() => {
        tl.fromTo('.second', {opacity: 0, scale: 0.8}, {opacity: 1, scale: 1})
        tl2.fromTo('#gb2', {opacity: 0, scale: 0.2, x: -200, overflow: 'hidden'}, {opacity: 1, scale: 1, x: 0, overflow: 'hidden' })
        tl5.fromTo('.ig', {opacity: 0, x: '50%', overflow: 'hidden'}, {opacity: 1, x: '0%', overflow: 'hidden'})
        // tl3.fromTo('.first-paragraph', {opacity: 0, y: -200}, {opacity: 1, x: '5%', marginTop: '2rem'})
        // tl4.fromTo('.father', {opacity: 0,}, {opacity: 1})
        // tl4.fromTo('.dan', {opacity: 0,}, {opacity: 1, delay: 20})
        // tl4.fromTo('.mother', {opacity: 0,}, {opacity: 1, delay: 10})
        // tl4.fromTo('#wanita', {opacity: 0,}, {opacity: 1, delay: 10})
    }, [])
    

    return (
        <div className="profile" ref={ref}>
            <div className="second">
                <h1 id="women">..Mempelai Wanita</h1>
                <div className="border-wanita">
                    <div className="ig">
                        <img onClick={() => handleClick()} src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
                    </div>
                    <img src={gb2} alt="" id="gb2"></img>
                    <p className="nama-wanita">
                        Frisca Amelia S.I.kom
                    </p>
                    <p className="parents-w">
                        Putri dari:
                    </p>
                    <p className="father-w">
                        Bapak Don Reflis 
                        
                    </p>
                    <p className="dan-w">&</p>
                    <p className="mother-w">
                        Ibu Aprillia Ningsih
                    </p>
                </div>
                <div className="logo-main">
                {/* <img src={gb1} id="workout-logo" alt="workout" /> */}
                </div>
            </div>
        </div>
    )
};