import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
    background-color: var(--color-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    border-radius: var(--radius);
    box-shadow: var(--shadow);
    width: 100;
    margin-bottom: 1rem;
`;
const Input = styled.input.attr()``;

export const Search = ({ search, setSearch }) => {
    return (
        <InputContainer>
            <IoSearch />
            <Input value={search} onChange={(e) => setSearch(e.target.value)} />
        </InputContainer>
    );
};
