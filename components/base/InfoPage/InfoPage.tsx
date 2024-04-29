import style from "./styles/InfoPage.module.css";
import { AstronomyImage } from "../../../store/Apod/apod.types";
import { PageData } from "../../../types/types";

type Props = {
    pageData:PageData;
    setPage: (a: null) => void;
};

export const InfoPage = ({ ...props }: Props) => {

    function removeHtmlTags() {
        const regex = /(<[^>]+)>/gi;
        return props.pageData.description.replace(regex, "");
      }

    return (
        <div className={style.container}>
            <div className={style.exit} onClick={() => props.setPage(null)}>
                <div className={style.close} />
            </div>
            <div className={style.windownfo}>
                <img
                    src={props.pageData.image}
                    className={style.image}
                    alt={"image"}
                    draggable={false}
                />
                <div className={style.title}>{props.pageData.name}</div>
                <div className={style.description}>
                    {removeHtmlTags()}
                </div>
                <div className={style.date}>{props.pageData.info}</div>
            </div>
        </div>
    );
};
