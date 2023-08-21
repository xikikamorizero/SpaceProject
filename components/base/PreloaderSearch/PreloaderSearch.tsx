import style from "./styles/PreloaderSearch.module.css";

export const PreloaderSearch = () => {
    return (
        <div className={style.preloader}>
            <div className={style.dot} />
            <div className={style.dot} />
            <div className={style.dot} />
        </div>
    );
};
