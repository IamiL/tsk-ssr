"use client"

import "./mobileNavbar.css"
import {useEffect, useState} from "react";
import {Link} from "react-router";

export default function MobileNavbar({location}: { location?: string }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        console.log('is not client');
        return <></>
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    return isMobile &&
        <>
            <div id='header-back-layer' style={isOpen ? {opacity: '1'} : {opacity: '0'}}/>

            <div className="menu-container">
                <input type="checkbox" id="menu-toggle" className="menu-toggle" checked={isOpen}
                       onChange={() => {
                           setIsOpen(!isOpen)
                           const block = document.getElementById('mainp-sec1-btn');
                           if (block) {
                               console.log("блок есть");
                               if (!open) {
                                   block.classList.add('disnone');
                                   block.style
                               } else {
                                   block.classList.remove('disnone');
                               }
                           } else {
                               console.log("блока нет");
                           }
                       }}
                />
                <label htmlFor="menu-toggle" className="menu-button">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </label>
            </div>
            {
                isOpen && <nav id='mobile-nav'>
                    <div id='navbar-block'>
                        <Link to={"/about"} className="fs8 mfs4 i-b"
                              style={location === "/about" ? {color: "red", whiteSpace: "nowrap"} : {whiteSpace: "nowrap"}}>
                            о компании
                        </Link>
                        <Link to={"/services"} className="fs8 mfs4 i-b"
                              style={location === "/services" ? {color: "red"} : {}}>
                            услуги
                        </Link>
                        <Link to={"/cases"} className="fs8 mfs4 i-b" style={location === "/cases" ? {color: "red"} : {}}>
                            проекты
                        </Link>
                        <Link to={"/licenses"} className="fs8 mfs4 i-b"
                              style={location === "/licenses" ? {color: "red"} : {}}>
                            лицензии
                        </Link>
                        <Link to={"/reviews"} className="fs8 mfs4 i-b"
                              style={location === "/reviews" ? {color: "red"} : {}}>
                            отзывы
                        </Link>
                        <Link to={"/contacts"} className="fs8 mfs4 i-b"
                              style={location === "/contacts" ? {color: "red"} : {}}>
                            контакты
                        </Link>
                    </div>
                    <Link to={"/contactus"} className="fs8 mfs4 i-b"
                          style={location === "/contactus" ? {color: "red"} : {}}>
                        связаться
                    </Link>
                </nav>
            }
        </>
}