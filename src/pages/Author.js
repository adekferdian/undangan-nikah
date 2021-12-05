import React from 'react';
import './author.css';


export default function Author() {

    const handleClick = (url) => {
        const newWindow = window.open('https://www.instagram.com/adekferdian/');
    }
    return (
        <div className="author">
            <div className="content-author">
                <p className="invitation">• Digital Invitation •</p>
                <p className="me">Ferdian</p>
                <div className="sosmed-author">
                    <img onClick={() => handleClick()} id="ig" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTU1LjA0LDEwLjMyYy0yNC42NTYyNiwwIC00NC43MiwyMC4wNjM3NCAtNDQuNzIsNDQuNzJ2NjEuOTJjMCwyNC42NTYyNiAyMC4wNjM3NCw0NC43MiA0NC43Miw0NC43Mmg2MS45MmMyNC42NTYyNiwwIDQ0LjcyLC0yMC4wNjM3NCA0NC43MiwtNDQuNzJ2LTYxLjkyYzAsLTI0LjY1NjI2IC0yMC4wNjM3NCwtNDQuNzIgLTQ0LjcyLC00NC43MnpNNTUuMDQsMTcuMmg2MS45MmMyMC45Mzc1LDAgMzcuODQsMTYuOTAyNSAzNy44NCwzNy44NHY2MS45MmMwLDIwLjkzNzUgLTE2LjkwMjUsMzcuODQgLTM3Ljg0LDM3Ljg0aC02MS45MmMtMjAuOTM3NSwwIC0zNy44NCwtMTYuOTAyNSAtMzcuODQsLTM3Ljg0di02MS45MmMwLC0yMC45Mzc1IDE2LjkwMjUsLTM3Ljg0IDM3Ljg0LC0zNy44NHpNMTI3LjI4LDM3Ljg0Yy0zLjc5OTcyLDAgLTYuODgsMy4wODAyOCAtNi44OCw2Ljg4YzAsMy43OTk3MiAzLjA4MDI4LDYuODggNi44OCw2Ljg4YzMuNzk5NzIsMCA2Ljg4LC0zLjA4MDI4IDYuODgsLTYuODhjMCwtMy43OTk3MiAtMy4wODAyOCwtNi44OCAtNi44OCwtNi44OHpNODYsNDguMTZjLTIwLjg1NzcxLDAgLTM3Ljg0LDE2Ljk4MjI5IC0zNy44NCwzNy44NGMwLDIwLjg1NzcxIDE2Ljk4MjI5LDM3Ljg0IDM3Ljg0LDM3Ljg0YzIwLjg1NzcxLDAgMzcuODQsLTE2Ljk4MjI5IDM3Ljg0LC0zNy44NGMwLC0yMC44NTc3MSAtMTYuOTgyMjksLTM3Ljg0IC0zNy44NCwtMzcuODR6TTg2LDU1LjA0YzE3LjEzOTQ4LDAgMzAuOTYsMTMuODIwNTIgMzAuOTYsMzAuOTZjMCwxNy4xMzk0OCAtMTMuODIwNTIsMzAuOTYgLTMwLjk2LDMwLjk2Yy0xNy4xMzk0OCwwIC0zMC45NiwtMTMuODIwNTIgLTMwLjk2LC0zMC45NmMwLC0xNy4xMzk0OCAxMy44MjA1MiwtMzAuOTYgMzAuOTYsLTMwLjk2eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/>
                </div>
            </div>
        </div>
    )
};