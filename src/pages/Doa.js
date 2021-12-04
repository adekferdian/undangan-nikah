import React from 'react';
import { Paper } from '@material-ui/core'
import './doa.css';
import surat from '../assets/arRum21.mp3';
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Doa() {

    let tl = new TimelineLite({
        scrollTrigger: {
            trigger: '.profile',
            start: '270%',
            end: '280%',
            scrub: true,
        }
    })

    const handlePlay = () => {
        const audio = new Audio(surat)
        audio.play()
    }

    React.useEffect(() => {
        tl.fromTo('.isi', {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%'})
    }, [])
    return (
        <Paper>
            <div className="isi">
                <p className="terjemahan">
                “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.”
                </p>
                <div className="footer">
                    <div className="circle">
                        <img title="Play surat" className="play-surat" 
                                src="https://img.icons8.com/ios-filled/50/000000/play--v1.png"
                                onClick={() => handlePlay()}
                        />
                    </div>
                    <p className="surat">
                    (QS Ar-Rum : 21)
                    </p>
                </div>
            </div>
        </Paper>
    )
};