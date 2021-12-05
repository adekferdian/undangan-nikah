import { Paper } from '@material-ui/core';
import React from 'react';
import './kado.css';
import cincin from '../assets/cincin1.png'
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {CopyToClipboard} from 'react-copy-to-clipboard';
gsap.registerPlugin(ScrollTrigger);


export default function Kado() {
    const [copySuccess, setCopySuccess] = React.useState(false);
    let tl = new TimelineLite({
        scrollTrigger: {
            trigger: '.kado',
            start: '580%',
            end: '590%',
            scrub: true,
        }
    });

    React.useEffect(() => {
        tl.fromTo('.kado', {opacity: 0, scale: 0, x: '-50%'}, {opacity: 1, scale: 1, x: 0})
        tl.fromTo('.img-title', {opacity: 0, scale: 0,}, {opacity: 1, scale: 1,})
        tl.fromTo('.text-title', {opacity: 0, scale: 0, x: '-50%'}, {opacity: 1, scale: 1, x: 0})
        tl.fromTo('.line1', {opacity: 0, scale: 0,}, {opacity: 1, scale: 1})
        tl.fromTo('.line2', {opacity: 0, scale: 0,}, {opacity: 1, scale: 1})
        tl.fromTo('.line3', {opacity: 0, scale: 0,}, {opacity: 1, scale: 1})
        tl.fromTo('.donate', {opacity: 0, scale: 0,}, {opacity: 1, scale: 1})
    }, [])
    
    const handleCopy = (copyMe) => {
        console.log('masas');
    };

    const handleonCopy = () => {
        setCopySuccess(true)
    }
        
    return (
        <div className="kado">
            <div className="gift">
            <div className="bg-kado">
            </div>
                <Paper className="badan">
                    <div className="kado-title">
                        <img className="img-title" src="https://img.icons8.com/ios/50/000000/gift--v1.png"/>
                        <p className="text-title">Kado Pernikahan</p>
                    </div>
                    
                    <div className="desc">
                        <p className="line1">Silahkan klik tombol dibawah ini untuk </p>
                        <p className="line2"> mengirimkan hadiah secara online untuk kami</p>
                        <p className="line3">542901001159506 (BRI) - Frisca Amelia</p>
                        {/* <div className="click">
                            <img onClick={() => handleCopy()} src="https://img.icons8.com/material-outlined/24/000000/copy.png"/>
                            <p>Copy</p>
                        </div> */}
                        <CopyToClipboard
                            text="542901001159506"
                            onCopy={() => handleonCopy()}
                        >
                            <div className="donate">
                                <img className="img-donate" src="https://img.icons8.com/material-outlined/24/000000/copy.png"/>
                                {
                                    copySuccess === false ?
                                        <p className="text-donate">Copy Number</p>
                                        :
                                        <p className="text-donate">Copied!</p>
                                }
                            </div>
                        </CopyToClipboard>
                    </div>
                        
                </Paper>
            </div>
        </div>
    )
}