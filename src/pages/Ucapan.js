import { Paper } from '@material-ui/core';
import React from 'react';
import './ucapan.css';
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {CopyToClipboard} from 'react-copy-to-clipboard';
gsap.registerPlugin(ScrollTrigger);

export default function Ucapan() {
    let tl = new TimelineLite({
        scrollTrigger: {
            trigger: '.ucapan',
            start: '650%',
            end: '660%',
            scrub: true,
        }
    });

    React.useEffect(() => {
        tl.fromTo('.text-ucapan1', {scale: 0, opacity: 0, x: '-50%'}, { scale: 1, opacity: 1, x: 0})
        tl.fromTo('.text-ucapan2', {scale: 0, opacity: 0,}, { scale: 1, opacity: 1, x: 0})
        tl.fromTo('.text-ucapan3', {scale: 0, opacity: 0, x: '50%'}, { scale: 1, opacity: 1, x: 0})
        tl.fromTo('.isi-ucapan', {scale: 0.2, opacity: 0.2,}, { scale: 1, opacity: 1,})
    }, [])
    return (
        <div className="ucapan">
            <p className="text-ucapan1">Ucapan</p>
            <p className="text-ucapan2">&</p>
            <p className="text-ucapan3">Doa</p>
            <div className="border">
                <hr className="garis" />
            </div>
            <div className="header-ucapan">
                <Paper className="isi-ucapan">
                    <div className="konten-ucapan">
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                        <p className="authors">Adek</p>
                        <p className="comments">selamat ya</p>
                    </div>
                </Paper>
            </div>
        </div>
    )
};