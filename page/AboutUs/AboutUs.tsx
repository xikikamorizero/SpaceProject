import style from "./styles/AboutUs.module.css";

export const AboutUs = () => {
    return (
        <div className={style.aboutUs}>
            <div className={style.container}>
                <h1>About Us</h1>
                <p>
                    Welcome to our non-commercial website! We have created this
                    site to showcase our skills and passion for space.
                </p>
                <p>
                    We utilize the NASA API to fetch space-related data, which
                    we then display on our website.
                </p>
                <p>
                    Our goal is to present you with amazing photographs, videos,
                    and information about the Universe so that you can share our
                    fascination with space.
                </p>
                <p>
                    Stay up-to-date with the latest discoveries and news from
                    the world of astronomy through our website!
                </p>
            </div>
        </div>
    );
};
