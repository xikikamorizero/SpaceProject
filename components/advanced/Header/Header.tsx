"use client"
import Image from "next/image";
import style from "./styles/Header.module.css";
import logo from "./assets/logo.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Burger } from "./Burger";

export const Header = () => {
    const [burger, setBurger] = useState(false);

    const handleBodyScroll = () => {
        if (burger) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      };
      
      useEffect(() => {
        handleBodyScroll();
      }, [burger]);

    return (
        <div className={style.header}>
            <div className={style.container}>
                <Link href={"/"} className={style.link} draggable={false}>
                    <Image
                        src={logo}
                        alt={"logo"}
                        draggable={false}
                        className={style.logo}
                        width={200}
                    />
                </Link>

                <div className={style.navbar}>
                    <Link
                        href={"/techtransfer"}
                        className={style.link}
                        draggable={false}
                    >
                        Techtransfer
                    </Link>
                    <Link
                        href={"/apod"}
                        className={style.link}
                        draggable={false}
                    >
                        Apod
                    </Link>
                    <Link
                        href={"/about"}
                        className={style.link}
                        draggable={false}
                    >
                        AboutUs
                    </Link>
                </div>
                <div className={style.burger} onClick={()=>{setBurger(!burger)}}>
                    <div
                        className={
                            burger ? style.burgerIconActive : style.burgerIcon
                        }
                    />
                </div>
                <Burger burger={burger} setBurger={setBurger} />
            </div>
        </div>
    );
};
