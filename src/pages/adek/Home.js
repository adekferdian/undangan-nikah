import React from "react";
import mywedding from "../../assets/video/mywedding.mp4";
import "./home.css";
import Intro from "./Intro";
import lagu from "../../assets/my_music.mp3";

const Home = ({
    to
}) => {
    const [visibleOpen, setVisibleOpen] = React.useState(false);
    const myRef = React.useRef();

    const handleOpen = () => {
        const a = document.getElementsByClassName("my-video");
        console.log(a);
        for (let i = 0; i < a.length; i++) {
            a[i].style.transition = "2s ease";
            a[i].style.opacity = "0.5";
            a[i].style.marginTop = "-100%";
            a[i].style.backgroundColor = "black";
        }
        setTimeout(() => {
            setVisibleOpen(true)
        }, 1000)
    };

    return (
        <div className="home">
            {
                !visibleOpen  ?
                <div>
                    <div className="wrapper-video">
                        <div className="my-video" >
                            <video className="video1" autoPlay={true} loop muted >
                                <source src={mywedding} />
                            </video>
                        </div>
                        <div className="button-open">
                            <p id="yth">Kepada Yth.</p>
                            <p id="to">{to}</p>
                            <div className="card bg-1" >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>
                                <div onClick={() => handleOpen()} className="btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <p id="text-undangan" >
                                        Buka Undangan
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                : <Intro to={to} lagu={myRef} />
            }
            {
                visibleOpen ? 
                <audio ref={myRef} id="audio" src={lagu} autoPlay >
                    
                </audio> : null
            }
        </div>
    )
};

export default Home;