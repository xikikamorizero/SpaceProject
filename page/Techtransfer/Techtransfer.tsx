"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Base } from "../../components";
import { useGetTechtransferQuery } from "../../store/Techtransfer/techtransfer";
import style from "./styles/Techtransfer.module.css";
import { PageData } from "../../types/types";

export const Techtransfer = () => {
    const { data, isLoading, error } = useGetTechtransferQuery(1);
    const [page, setPage] = useState<PageData | null>(null);

    const handleBodyScroll = () => {
        if (page) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      };
      
      useEffect(() => {
        handleBodyScroll();
      }, [page]);

    return (
        <div className={style.techtransfer}>
            <div className={style.container}>
                {page ? (
                    <Base.InfoPage pageData={page} setPage={setPage} />
                ) : null}
                {isLoading ? (
                    <Base.Preloader />
                ) : (
                    <Base.ContainerItem>
                        {data?.results.map((a, i) => (
                            <Base.Item
                                setPage={setPage}
                                data={{
                                    image: a[10],
                                    name: a[1],
                                    description: a[3],
                                    info: a[9],
                                }}
                                key={i}
                            />
                        ))}
                    </Base.ContainerItem>
                )}
            </div>
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
