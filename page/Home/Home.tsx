"use client";
import style from "./styles/Home.module.css";
import Image from "next/image";
import { Base } from "../../components";
import { styled } from "styled-components";
import { useGetSearchImageQuery } from "../../store/SearchImage/searchImage";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { PageData } from "../../types/types";
import imageLogo from './assets/logo.png';

export const HomeComponents = () => {
    const [keyword, setKeyword] = useState("");
    const [debouncedKeyword, setDebouncedKeyword] = useState("");
    const [page, setPage] = useState<PageData | null>(null);

    useEffect(() => {
        const debouncedSearch = debounce((value) => {
            setDebouncedKeyword(value);
        }, 500);

        debouncedSearch(keyword);

        return () => {
            debouncedSearch.cancel();
        };
    }, [keyword]);

    const { data, error, isLoading, refetch } = useGetSearchImageQuery(
        debouncedKeyword,
        {
            skip: debouncedKeyword == "",
        }
    );

    return (
        <div className={style.home}>
            <Container page={page}>
                <div className={style.containerSearchForm}>
                    <Image src={imageLogo} alt={'Logo Image'} width={300} height={300}  />
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
                    <Base.Preloader />
                ) : keyword === "" ? null : (
                    <Base.ContainerItem>
                        {data && data.collection.items.length > 0 ? (
                            data.collection.items.map((a, i) => (
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
                        )}
                    </Base.ContainerItem>
                )}
            </Container>
        </div>
    );
};

const Container = styled.div<{ page: PageData | null }>`
    width: var(--container);
    max-height: ${(props) => (props.page ? "calc(100vh - 123px)" : "auto")};
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding-top: 4vw;
`;
