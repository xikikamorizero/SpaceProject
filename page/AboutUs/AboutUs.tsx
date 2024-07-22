import style from "./styles/AboutUs.module.css";

export const AboutUs = () => {
    return (
        <div className={style.aboutUs}>
            <div className={style.container}>
                <h1>About Us</h1>
                <p>
                    Welcome to my non-commercial website! I have created this
                    site to showcase my skills and passion for space.
                </p>
                <p>
                    I utilize the NASA API to fetch space-related data, which I
                    then display on my website.
                </p>
                <p>
                    My goal is to present you with amazing photographs, videos,
                    and information about the universe so that you can share my
                    fascination with space.
                </p>
                <p>
                    Stay up-to-date with the latest discoveries and news from
                    the world of astronomy through my website!
                </p>
            </div>
        </div>
    );
};
