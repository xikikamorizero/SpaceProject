"use client";
import style from "./styles/Apod.module.css";
import { useGetApodQuery } from "../../store/Apod/apod";
import { Base } from "../../components";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { PageData } from "../../types/types";

export const Apod = () => {
    const { data, isLoading, error } = useGetApodQuery();

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
        <div className={style.home}>
            <div className={style.container}>
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
            </div>
        </div>
    );
};