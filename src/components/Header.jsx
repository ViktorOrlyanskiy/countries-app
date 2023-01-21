import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Container } from "./Container";
import { useEffect, useState } from "react";

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--color-ui-base);
    color: var(--color-text);
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 0;
`;
const Title = styled.a.attrs({ href: "/" })`
    font-size: var(--fs-m);
    font-weight: var(--fw-bold);
`;
const ThemeSwitcher = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    font-size: var(--fs-s);
    cursor: pointer;
    user-select: none;
`;

export const Header = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where in the world?</Title>
                    <ThemeSwitcher onClick={toggleTheme}>
                        {theme === "light" ? (
                            <>
                                <IoMoonOutline size={16} />
                                Light Mode
                            </>
                        ) : (
                            <>
                                <IoMoon size={16} />
                                Dark Mode
                            </>
                        )}
                    </ThemeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};
