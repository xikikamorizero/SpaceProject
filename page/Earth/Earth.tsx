"use client";
import { styled } from "styled-components";
import { useGetEarthQuery } from "../../store/Earth/earth";

export const Earth = () => {
    return (
        <Container>
            <Navbar />
            <Content />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 8fr;
`;
const Navbar = styled.div`
    width: 100%;
    height: 100vh;
`;
const Content = styled.div`
    width: 100%;
    border-left: 1px solid white;
`;
