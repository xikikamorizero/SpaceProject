"use client";
import { useState, useEffect } from "react";
import style from "./styles/MainBackgroundContainer.module.css";
import backgroundImage from "./assets/background.jpg";

type Props = {
    children?: React.ReactNode;
    preloader:React.ReactNode;
};

export const MainBackgroundContainer = ({ children, preloader }: Props) => {
    const [loader, setLoader] = useState(true);

   

    useEffect(() => {
        const img = new Image() as HTMLImageElement;
        img.src = backgroundImage.src;
        img.onload = () => {
            setLoader(false);
        };
    }, []);

    return (
        <div className={style.container}>
            {loader && preloader}
            {children}
        </div>
    );
};
