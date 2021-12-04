import React, { useRef } from 'react';
import './countdown.css';
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Countdown() {
    let tl = new TimelineLite({
        scrollTrigger: {
            trigger: '.countdown',
            start: '500%',
            end: '540%',
            scrub: true,
        }
    })
    const [timerDays, setTimerDays] = React.useState("");
    const [timerHours, setTimerHours] = React.useState("");
    const [timerMinutes, setTimerMinutes] = React.useState("");
    const [timerSeconds, setTimerSeconds] = React.useState("");

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date("December 12, 2021 00:09:00");

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(distance % (1000 * 60) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000)
    }
    React.useEffect(() => {
        tl.fromTo('.countdown', {opacity: 0, scale: 0, x: '-50%'}, {opacity: 1, scale: 1, x: 0})
        tl.fromTo('.header', {opacity: 0, scale: 0}, {opacity: 1, scale: 1})
        tl.fromTo('.day', {opacity: 0, scale: 0}, {opacity: 1, scale: 1})
        tl.fromTo('.deskripsi', {opacity: 0, scale: 0}, {opacity: 1, scale: 1})
        tl.fromTo('.time', {opacity: 0, scale: 0, x: '-50%'}, {opacity: 1, scale: 1, x: 0})
    }, [])

    React.useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    }, [])

    return (
        <div className="countdown">
            <div className="countdown-content">
                <div className="header">
                    <img className="img-header" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-timer-support-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"/>
                </div>
                <div className="title-header">
                    <p className="counting">Counting</p>
                    <p className="day">Days</p>
                </div>
                <div className="deskripsi">
                    <p className="isi-deskripsi">
                    Jam terus berdetik, kami tidak sabar untuk merayakannya bersama Anda, keluarga dan teman-teman kami di momen yang sangat spesial ini. Merupakan suatu kehormatan bagi kami untuk berbagi kebahagiaan kami dengan Anda semua.
                    </p>
                </div>
                <div className="time">
                    <div className="days">
                        <p className="angka">{timerDays < 10 ? `0${timerDays}` : timerDays}</p>
                        <p className="teks" id="hari">Hari</p>
                    </div>
                    <p className="titik">:</p>
                    <div className="hours">
                        <p className="angka">{timerHours < 10 ? `0${timerHours}` : timerHours}</p>
                        <p className="teks" id="jam">Jam</p>
                    </div>
                    <p className="titik">:</p>
                    <div className="minutes">
                        <p className="angka">{timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes}</p>
                        <p className="teks">Menit</p>
                    </div>
                    <p className="titik">:</p>
                    <div className="seconds">
                        <p className="angka">{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}</p>
                        <p className="teks">Detik</p>
                    </div>
                </div>
                {/* <div className="tick">
                    <p>{timerDays}</p>
                    <p>Days</p>
                    <p>{timerHours}</p>
                    <p>Hours</p>
                    <p>{timerMinutes}</p>
                    <p>Minutes</p>
                    <p>{timerSeconds}</p>
                    <p>Seconds</p>
                </div> */}
            </div>
        </div>
    )
};