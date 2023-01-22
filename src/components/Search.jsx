import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const InputContainer = styled.label`
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0.7rem 1rem;

    border-radius: var(--radius);
    background-color: var(--color-ui-base);
    box-shadow: var(--shadow);

    @media (min-width: 767px) {
        width: 350px;
    }
`;
const Input = styled.input.attrs({ type: "search" })`
    width: 100%;
    height: 1.5rem;
    color: var(--color-text);
    &::placeholder {
        color: var(--color-text);
    }
`;

export const Search = ({ changeSearch }) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
        setTimeout(() => {
            changeSearch(e.target.value);
        }, 1000);
    };
    return (
        <InputContainer>
            <IoSearch size={25} style={{ cursor: "pointer" }} />
            <Input placeholder="Search for a country..." value={search} onChange={onChangeSearch} />
        </InputContainer>
    );
};
