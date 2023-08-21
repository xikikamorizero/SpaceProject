import Image from "next/image";
import style from "./styles/Header.module.css";
import logo from "./assets/logo.png";
import Link from "next/link";

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <Link href={"/"} className={style.link} draggable={false}>
                    <Image
                        src={logo}
                        alt={"logo"}
                        draggable={false}
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
                <div className={style.burger}></div>
            </div>
        </div>
    );
};
