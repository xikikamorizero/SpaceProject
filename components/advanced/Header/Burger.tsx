import style from "./styles/Burger.module.css";
import Link from "next/link";

type PropsType = {
    burger: boolean;
    setBurger: (a: boolean) => void;
};

export const Burger = ({ ...props }: PropsType) => {
    return (
        <div
            className={style.containerBurger}
            onClick={() => {
                props.setBurger(false);
            }}
            style={
                props.burger
                    ? { opacity: "1", pointerEvents: "all" }
                    : { opacity: "0", pointerEvents: "none" }
            }
        >
            <div
                className={style.burger}
                onClick={(e) => {
                    e.stopPropagation();
                }}
                style={props.burger ? { width: "500px" } : { width: "0px" }}
            >
               <div className={style.navbar}>
                    <Link
                        href={"/techtransfer"}
                        className={style.link}
                        draggable={false}
                        onClick={() => {
                            props.setBurger(false);
                        }}
                    >
                        Techtransfer
                    </Link>
                    <Link
                        href={"/apod"}
                        className={style.link}
                        draggable={false}
                        onClick={() => {
                            props.setBurger(false);
                        }}
                    >
                        Apod
                    </Link>
                    <Link
                        href={"/about"}
                        className={style.link}
                        draggable={false}
                        onClick={() => {
                            props.setBurger(false);
                        }}
                    >
                        AboutUs
                    </Link>
                </div>
            </div>
        </div>
    );
};
