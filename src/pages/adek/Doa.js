import React from "react";
import { Paper } from '@material-ui/core'
import './doa.css';
import surat from '../../assets/arRum21.mp3';
import { gsap, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Doa = ({
    lagu
}) => {

    const [visibleButton, setVisibleButton] = React.useState(true);
    const audio = new Audio(surat);
    const handlePlay = () => {
        setVisibleButton(false);
        // audio.current.pause()
        audio.play()
        setTimeout(() => {
            setVisibleButton(true);
        }, 58000)
    };

    React.useEffect(() => {
        let tl = new TimelineLite({
            scrollTrigger: {
                trigger: '.border-adek',
                start: '20%',
                end: '80%',
                scrub: true,
            }
        })
        tl.fromTo('.paper', {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%'})
        tl.fromTo('.terjemahan', {opacity: 0, x: '50%'}, {opacity: 1, x: '0%'})
    }, [])
    
    return (
        <div className="isi">
            <Paper className="paper">
                <p className="terjemahan">
                “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.”
                </p>
                <div className="footer">
                    <div className="circle">
                        {
                            visibleButton ?
                                <img title="Play surat" className="play-surat"  alt=""
                                        src="https://img.icons8.com/ios-filled/50/000000/play--v1.png"
                                        onClick={() => handlePlay()}
                                />
                                :
                                null
                        }
                    </div>
                    <p className="surat">
                    (QS Ar-Rum : 21)
                    </p>
                </div>
            </Paper>
        </div>
    )
};

export default Doa;