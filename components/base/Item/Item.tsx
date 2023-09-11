"use client";
import { useState } from "react";
import { styled } from "styled-components";
import style from "./styles/Item.module.css";
import { AstronomyImage } from "../../../store/Apod/apod.types";
import { PageData } from "../../../types/types";

type Props = {
    data: PageData;
    setPage: (a: any) => void;
};

export const Item = ({ ...props }: Props) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div
            className={style.containerItem}
            onClick={() => {
                props.setPage(props.data);
            }}
        >
            <Image
                onLoad={() => {
                    setImageLoaded(true);
                }}
                className={style.itemImage}
                style={imageLoaded ? {} : { backgroundColor: "silver" }}
                src={props.data.image}
                draggable={false}
            />
            <div className={style.name}>{props.data.name}</div>
        </div>
    );
};

const Image = styled.img`
    width: 100%;
    height: 15vw;

    &:hover {
        transition: width 0.1s linear, height 0.1s linear;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% + 20px);
        height: calc(15vw + 20px);
    }

    @media (max-width: 800px) {
        height: 20vw;
        &:hover {
            width: calc(100% + 10px);
            height: calc(20vw + 10px);
        }
    }
    @media (max-width: 500px) {
        height: 30vw;

        &:hover {
            width: 100%;
            height: 30vw;
        }
    }
`;
