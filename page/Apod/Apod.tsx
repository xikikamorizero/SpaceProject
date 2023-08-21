"use client";
import style from "./styles/Apod.module.css";
import { useGetApodQuery } from "../../store/Apod/apod";
import { Base } from "../../components";
import { useState } from "react";
import { styled } from "styled-components";
import { PageData } from "../../types/types";

export const Apod = () => {
    const { data, isLoading, error } = useGetApodQuery();

    const [page, setPage] = useState<PageData | null>(null);

    return (
        <div className={style.home}>
            <Container page={page}>
                {page ? <Base.InfoPage pageData={page} setPage={setPage} /> : null}
                {isLoading ? (
                    <Base.Preloader />
                ) : (
                    <Base.ContainerItem>
                        {data?.map((a, i) => (
                            <Base.Item data={{image:a.url, name:a.title, description:a.explanation, info:a.date}} setPage={setPage} key={i} />
                        ))}
                    </Base.ContainerItem>
                )}
            </Container>
        </div>
    );
};

const Container = styled.div<{ page: PageData | null }>`
    width: var(--container);
    max-height: ${(props) =>
        props.page ? "calc(100vh - 123px)" : "auto"};
    padding: 2vw 20px;
    overflow: hidden;
`;