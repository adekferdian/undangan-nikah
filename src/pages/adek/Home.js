import React from "react";
import mywedding from "../../assets/video/mywedding.mp4"
import "./home.css";

const Home = ({
    to
}) => {
    const [visibleOpen, setVisibleOpen] = React.useState(false);

    return (
        <div className="home">
            {
                !visibleOpen  ?
                <div>
                    <div className="wrapper-video">
                        <div className="my-video">
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
                                <div onClick={() => setVisibleOpen(true)} className="btn">
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
                : null
            }
        </div>
    )
};

export default Home;