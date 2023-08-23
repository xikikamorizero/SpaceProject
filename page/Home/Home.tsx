"use client";
import style from "./styles/Home.module.css";
import Image from "next/image";
import { Base } from "../../components";
import { styled } from "styled-components";
import {
    useGetSearchImageQuery,
    searchImageApi,
} from "../../store/SearchImage/searchImage";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { PageData } from "../../types/types";
import imageLogo from "./assets/logo.png";

import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { fetchSearchImage } from "../../store/SearchImage/searchImageThunk";

export const HomeComponents = () => {
    const [keyword, setKeyword] = useState("");
    const [debouncedKeyword, setDebouncedKeyword] = useState("");
    const [page, setPage] = useState<PageData | null>(null);

    const { data, isLoading, error } = useAppSelector(
        (state) => state.searchImageSlice
    );
    console.log(isLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchSearchImage(debouncedKeyword));
    }, [debouncedKeyword]);

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

    useEffect(() => {
        const debouncedSearch = debounce((value) => {
            setDebouncedKeyword(value);
        }, 500);

        debouncedSearch(keyword);

        return () => {
            debouncedSearch.cancel();
        };
    }, [keyword]);

    return (
        <div className={style.home}>
            <div className={style.container}>
                <div className={style.containerSearchForm}>
                    <Image
                        src={imageLogo}
                        className={style.imageIcon}
                        alt={"Logo Image"}
                    />
                    <input
                        type={"text"}
                        value={keyword}
                        onChange={(e) => {
                            setKeyword(e.target.value);
                        }}
                        placeholder={"search"}
                        className={style.inputSearch}
                    />
                </div>

                {page ? (
                    <Base.InfoPage pageData={page} setPage={setPage} />
                ) : null}

                {isLoading ? (
                    <Base.PreloaderSearch />
                ) : (
                    <Base.ContainerItem>
                        {data ? (
                            data.length > 0 ? (
                                data.map((a, i) => (
                                    <Base.Item
                                        setPage={setPage}
                                        data={{
                                            image: a.links[0].href,
                                            name: a.data[0].title,
                                            description: a.data[0].description,
                                            info: a.data[0].secondary_creator,
                                        }}
                                        key={i}
                                    />
                                ))
                            ) : (
                                <p>No results found.</p>
                            )
                        ) : null}
                    </Base.ContainerItem>
                )}
            </div>
        </div>
    );
};