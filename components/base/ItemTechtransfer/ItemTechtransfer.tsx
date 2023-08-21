"use client";
import style from "./styles/ItemTechtransfer.module.css";
import styled from "styled-components";

type Props = {
    data:any[];
};

export const ItemTechtransfer = ({ ...props }: Props) => {
    return (
        <div className={style.containerItem}>
            <Image className={style.itemImage} image={props.data[10]} />
            <div className={style.name}>{props.data[1]}</div>
        </div>
    );
};

const Image = styled.div<{ image: string }>`
    width: 100%;
    height: 15vw;

    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    transition: filter 0.3s ease;

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
    }
    @media (max-width: 500px) {
        height: 30vw;
    }
`;
